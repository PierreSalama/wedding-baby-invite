const ALLOWED_CHOICES = new Map([
  ["ceremony", "Wedding Ceremony"],
  ["gender", "Gender Reveal"],
  ["both", "Both"],
  ["none", "Sadly can't attend"],
]);

function json(status, payload) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function normalizePhoneNumber(value) {
  const compact = String(value ?? "").trim().replace(/[^\d+]/g, "");

  if (!compact) return "";
  if (compact.startsWith("+")) return compact;
  if (compact.length === 11 && compact.startsWith("1")) return `+${compact}`;
  if (compact.length === 10) return `+1${compact}`;

  return compact;
}

function parseNotifyNumbers(rawValue) {
  return String(rawValue ?? "")
    .split(/[,\n]/)
    .map((value) => normalizePhoneNumber(value))
    .filter(Boolean);
}

function buildSmsBody({ guestName, attendanceLabel, submittedAt }) {
  const submittedLine = submittedAt
    ? new Date(submittedAt).toLocaleString("en-CA", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "America/Toronto",
      })
    : "Unknown time";

  return [
    "Wedding RSVP received",
    `Name: ${guestName}`,
    `Response: ${attendanceLabel}`,
    `Submitted: ${submittedLine}`,
  ].join("\n");
}

async function sendSms({ accountSid, authToken, fromNumber, toNumber, body }) {
  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        From: fromNumber,
        To: toNumber,
        Body: body,
      }).toString(),
    }
  );

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const detail =
      typeof data?.message === "string"
        ? data.message
        : `Twilio returned HTTP ${response.status}.`;
    throw new Error(detail);
  }

  return {
    sid: data.sid ?? "",
    status: data.status ?? "queued",
  };
}

export default async (request) => {
  if (request.method !== "POST") {
    return json(405, { ok: false, error: "Use POST for RSVP notifications." });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json(400, { ok: false, error: "Invalid RSVP payload." });
  }

  const guestName = String(payload?.guestName ?? "").trim();
  const attendanceChoice = String(payload?.attendanceChoice ?? "").trim();
  const submittedAt = String(payload?.submittedAt ?? "").trim();
  const honeypot = String(payload?.honeypot ?? "").trim();

  if (honeypot) {
    return json(200, { ok: true, warning: "Bot field triggered." });
  }

  if (!guestName || guestName.length > 80) {
    return json(400, {
      ok: false,
      error: "Please enter a valid guest name.",
    });
  }

  if (!ALLOWED_CHOICES.has(attendanceChoice)) {
    return json(400, {
      ok: false,
      error: "Please choose a valid RSVP option.",
    });
  }

  const accountSid = String(process.env.TWILIO_ACCOUNT_SID ?? "").trim();
  const authToken = String(process.env.TWILIO_AUTH_TOKEN ?? "").trim();
  const fromNumber = normalizePhoneNumber(process.env.TWILIO_FROM_NUMBER ?? "");
  const notifyNumbers = parseNotifyNumbers(process.env.RSVP_NOTIFY_NUMBERS ?? "");

  if (!accountSid || !authToken || !fromNumber) {
    return json(503, {
      ok: false,
      error:
        "SMS notifications are not configured yet. Set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_FROM_NUMBER.",
    });
  }

  if (notifyNumbers.length === 0) {
    return json(503, {
      ok: false,
      error:
        "No RSVP notification recipients are configured. Set RSVP_NOTIFY_NUMBERS in Netlify environment variables.",
    });
  }

  const attendanceLabel = ALLOWED_CHOICES.get(attendanceChoice);
  const smsBody = buildSmsBody({
    guestName,
    attendanceLabel,
    submittedAt,
  });

  const results = [];

  for (const toNumber of notifyNumbers) {
    try {
      const sent = await sendSms({
        accountSid,
        authToken,
        fromNumber,
        toNumber,
        body: smsBody,
      });

      results.push({
        phone: toNumber,
        sid: sent.sid,
        status: sent.status,
      });
    } catch (error) {
      results.push({
        phone: toNumber,
        error: error instanceof Error ? error.message : "Unknown SMS error.",
      });
    }
  }

  const failures = results.filter((result) => "error" in result);

  if (failures.length === results.length) {
    return json(502, {
      ok: false,
      error:
        "Your RSVP was saved, but every SMS notification failed. Check the Twilio sender number, trial restrictions, and verified recipient numbers.",
      results,
    });
  }

  return json(200, {
    ok: true,
    warning:
      failures.length > 0
        ? "Your RSVP was saved, but one or more SMS notifications failed."
        : null,
    results,
  });
};
