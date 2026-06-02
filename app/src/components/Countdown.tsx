import { useEffect, useState } from "react";

type Props = { target: Date };

function diffParts(target: Date) {
  const now = new Date();
  let diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  diff -= days * 86400000;
  const hours = Math.floor(diff / 3600000);
  diff -= hours * 3600000;
  const minutes = Math.floor(diff / 60000);
  diff -= minutes * 60000;
  const seconds = Math.floor(diff / 1000);
  return { days, hours, minutes, seconds };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown({ target }: Props) {
  const [t, setT] = useState(() => diffParts(target));
  useEffect(() => {
    const id = setInterval(() => setT(diffParts(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items = [
    { label: "Days", value: pad(t.days) },
    { label: "Hrs", value: pad(t.hours) },
    { label: "Mins", value: pad(t.minutes) },
    { label: "Secs", value: pad(t.seconds) },
  ];

  return (
    <div className="countdown flex items-center justify-center gap-1.5 sm:gap-2">
      {items.map((it, i) => (
        <div key={it.label} className="flex items-center">
          <div className="flex flex-col items-center px-2 py-1">
            <span
              className="font-bold text-forest leading-none"
              style={{
                fontSize: "clamp(1.5rem, 6vw, 2rem)",
                letterSpacing: "-0.02em",
                fontFamily: '"Work Sans", system-ui, sans-serif',
              }}
            >
              {it.value}
            </span>
            <span
              className="tracking-[0.16em] uppercase text-botanical mt-1"
              style={{ fontSize: "0.6rem", fontWeight: 600 }}
            >
              {it.label}
            </span>
          </div>
          {i < items.length - 1 && (
            <span
              className="text-eucalyptus/70 mx-0.5"
              style={{ fontSize: "clamp(1.5rem, 5vw, 1.8rem)", lineHeight: 0, fontWeight: 300, alignSelf: "center", paddingBottom: "0.7rem" }}
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
