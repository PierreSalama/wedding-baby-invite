import { useState } from "react";
import { content } from "../content";
import { HeartDivider } from "./decor";

type Choice = (typeof content.rsvp.options)[number]["id"];

const RSVP_NOTIFY_ENDPOINT = "/.netlify/functions/rsvp-notify";

function getChoiceLabel(choice: Choice) {
  return content.rsvp.options.find((option) => option.id === choice)?.label ?? choice;
}

function getSuccessCopy(name: string, choice: Choice) {
  if (choice === "none") {
    return `Thank you, ${name || "friend"}. We'll miss you, and we appreciate you letting us know.`;
  }

  return `Thank you, ${name || "friend"}. Your RSVP has been received.`;
}

export function Rsvp() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [choice, setChoice] = useState<Choice | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [warningMessage, setWarningMessage] = useState<string | null>(null);

  return (
    <section
      id="rsvp"
      className="page page-white flex items-center justify-center px-6 py-24"
    >
      <div className="relative z-10 max-w-md w-full text-center flex flex-col items-center gap-6">
        <h2
          className="script text-forest leading-[0.85]"
          style={{ fontSize: "clamp(4rem, 16vw, 6rem)" }}
        >
          {content.rsvp.title}
        </h2>

        <HeartDivider width={70} />

        <p
          className="serif italic text-ink/80 leading-snug"
          style={{ fontSize: "clamp(1.05rem, 2.8vw, 1.15rem)" }}
        >
          {content.rsvp.deadline}
        </p>

        {submitted ? (
          <div className="w-full bg-cream/50 border border-eucalyptus/40 rounded-3xl p-8 shadow-[0_18px_40px_-22px_rgba(138,106,44,0.3)]">
            <p className="serif italic text-forest" style={{ fontSize: "clamp(1.1rem, 3vw, 1.25rem)" }}>
              {successMessage}
            </p>
            {warningMessage && (
              <p className="serif text-ink/70 mt-4 leading-relaxed" style={{ fontSize: "0.98rem" }}>
                {warningMessage}
              </p>
            )}
          </div>
        ) : (
          <form
            className="w-full flex flex-col gap-5 mt-2"
            onSubmit={async (e) => {
              e.preventDefault();
              if (!choice || isSubmitting) return;

              const trimmedName = name.trim();
              const currentChoice = choice;
              const submittedAt = new Date().toISOString();
              const formData = new FormData(e.currentTarget);
              const honeypot = String(formData.get("bot-field") ?? "").trim();
              const attendanceLabel = getChoiceLabel(currentChoice);

              setIsSubmitting(true);
              setError(null);
              setWarningMessage(null);

              try {
                const notifyResponse = await fetch(RSVP_NOTIFY_ENDPOINT, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    guestName: trimmedName,
                    attendanceChoice: currentChoice,
                    attendanceLabel,
                    submittedAt,
                    honeypot,
                  }),
                });

                const notifyResult = (await notifyResponse.json().catch(() => null)) as
                  | { ok?: boolean; warning?: string; error?: string }
                  | null;

                if (!notifyResponse.ok || !notifyResult?.ok) {
                  throw new Error(
                    notifyResult?.error ??
                      "Your RSVP was saved, but the text notification step failed. Please check the SMS settings and try again."
                  );
                }

                setSuccessMessage(getSuccessCopy(trimmedName, currentChoice));
                setWarningMessage(notifyResult.warning ?? null);
                setSubmitted(true);
              } catch (submitError) {
                const message =
                  submitError instanceof Error
                    ? submitError.message
                    : "Something went wrong while sending your RSVP.";
                setError(message);
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={content.rsvp.namePlaceholder}
              className="w-full rounded-xl bg-ivory/60 border border-botanical/30 px-5 py-4 outline-none focus:border-forest serif text-center transition-colors placeholder:text-ink/40"
              style={{ fontSize: "1.05rem" }}
            />

            <input
              type="text"
              name="bot-field"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <p className="tracking-label text-botanical mt-1">{content.rsvp.prompt}</p>

            <div className="flex flex-col gap-3">
              {content.rsvp.options.map((opt) => {
                const selected = choice === opt.id;
                const isDecline = opt.id === "none";
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setChoice(opt.id)}
                    className={`w-full rounded-xl py-4 px-5 tracking-[0.18em] uppercase text-xs sm:text-sm font-medium transition-all active:scale-[0.98] flex items-center justify-center gap-3 ${
                      selected
                        ? isDecline
                          ? "bg-cream text-ink border-2 border-ink/65 shadow-[0_10px_25px_-12px_rgba(43,37,32,0.28)]"
                          : "bg-forest text-ivory border-2 border-forest shadow-[0_10px_25px_-12px_rgba(138,106,44,0.6)]"
                        : "bg-transparent text-forest border-2 border-botanical/40 hover:border-forest"
                    }`}
                    style={{ fontFamily: '"Work Sans", system-ui, sans-serif' }}
                  >
                    {selected && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                        <path d="M 2 7 L 6 11 L 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {opt.label}
                  </button>
                );
              })}
            </div>

            <button
              type="submit"
              disabled={!name.trim() || !choice || isSubmitting}
              className="mt-4 self-center px-10 py-3.5 rounded-full bg-forest text-ivory tracking-[0.2em] uppercase text-xs hover:bg-botanical transition-colors active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ fontFamily: '"Work Sans", system-ui, sans-serif' }}
            >
              {isSubmitting ? "Sending..." : "Send response"}
            </button>

            {error && (
              <p
                className="serif text-center text-[#8c3a2c] leading-relaxed"
                style={{ fontSize: "0.98rem" }}
              >
                {error}
              </p>
            )}
          </form>
        )}

        <p className="serif italic text-ink/60 mt-4" style={{ fontSize: "0.95rem" }}>
          {content.rsvp.footer}
        </p>
      </div>
    </section>
  );
}
