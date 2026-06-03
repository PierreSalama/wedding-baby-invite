import { content, weddingDate } from "../content";
import { Countdown } from "./Countdown";
import { HeartDivider, RingsIcon, FootstepsIcon } from "./decor";

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" aria-hidden>
      <rect x="4" y="8" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M 4 14 L 32 14" stroke="currentColor" strokeWidth="1.6" />
      <path d="M 11 4 L 11 11 M 25 4 L 25 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" aria-hidden>
      <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="1.6" />
      <path d="M 18 10 L 18 18 L 24 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" aria-hidden>
      <path
        d="M 18 4 C 12 4 7 9 7 15 C 7 22 18 32 18 32 C 18 32 29 22 29 15 C 29 9 24 4 18 4 Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="18" cy="15" r="4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function buildGoogleMapsUrl(venue: string, address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${venue} ${address}`,
  )}`;
}

type EventBlockProps = {
  label: string;
  icon: React.ReactNode;
  date: string;
  time: string;
  venue: string;
  address: string;
};

function EventBlock({ label, icon, date, time, venue, address }: EventBlockProps) {
  const directionsUrl = buildGoogleMapsUrl(venue, address);

  return (
    <div className="w-full bg-white border border-eucalyptus/30 rounded-3xl shadow-[0_18px_40px_-22px_rgba(138,106,44,0.4)] px-6 py-7 sm:px-8 sm:py-8">
      <div className="flex items-center gap-3 justify-center mb-5">
        {icon}
        <span
          className="script text-forest"
          style={{ fontSize: "clamp(1.6rem, 5vw, 2rem)", lineHeight: 1 }}
        >
          {label}
        </span>
      </div>

      <div className="flex items-start gap-4 mb-4">
        <CalendarIcon className="w-6 h-6 text-botanical shrink-0 mt-0.5" />
        <div className="flex-1 text-left">
          <p className="tracking-label text-botanical">Date</p>
          <p className="serif text-ink/90" style={{ fontSize: "1.02rem" }}>{date}</p>
        </div>
      </div>

      <div className="h-px bg-botanical/15 mb-4" />

      <div className="flex items-start gap-4 mb-4">
        <ClockIcon className="w-6 h-6 text-botanical shrink-0 mt-0.5" />
        <div className="flex-1 text-left">
          <p className="tracking-label text-botanical">Time</p>
          <p className="serif text-ink/90" style={{ fontSize: "1.02rem" }}>{time}</p>
        </div>
      </div>

      <div className="h-px bg-botanical/15 mb-4" />

      <div className="flex items-start gap-4 mb-5">
        <PinIcon className="w-6 h-6 text-botanical shrink-0 mt-0.5" />
        <div className="flex-1 text-left">
          <p className="tracking-label text-botanical">Location</p>
          <p className="serif text-ink/90" style={{ fontSize: "1.02rem" }}>{venue}</p>
          <p className="text-ink/65 mt-0.5" style={{ fontSize: "0.92rem" }}>{address}</p>
        </div>
      </div>

      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center px-6 py-3 rounded-full bg-forest text-ivory tracking-[0.18em] uppercase text-xs hover:bg-botanical transition-colors active:scale-95"
        style={{ fontFamily: '"Work Sans", system-ui, sans-serif' }}
      >
        Get Directions
      </a>
    </div>
  );
}

export function EventDetails() {
  return (
    <section
      id="event-details"
      className="page page-ivory flex items-center justify-center px-6 py-24"
    >
      <div className="relative z-10 max-w-md w-full text-center flex flex-col items-center gap-6">
        <h2
          className="script text-forest leading-[0.85]"
          style={{ fontSize: "clamp(3.4rem, 13vw, 5rem)" }}
        >
          {content.events.title}
        </h2>

        <HeartDivider width={70} />

        {/* unified countdown card */}
        <div className="w-full max-w-sm rounded-3xl bg-white border border-eucalyptus/30 shadow-[0_18px_40px_-22px_rgba(138,106,44,0.35)] px-6 py-7">
          <div className="flex items-center justify-center gap-4 mb-4">
            <RingsIcon className="w-12" />
            <span className="script text-botanical" style={{ fontSize: "1.5rem", lineHeight: 1 }}>&amp;</span>
            <FootstepsIcon className="w-10" />
          </div>
          <Countdown target={weddingDate} />
          <p className="serif italic text-forest mt-3 leading-snug" style={{ fontSize: "1rem" }}>
            {content.events.tagline}{" "}
            <span className="text-botanical">{content.events.taglineEm}</span>
          </p>
        </div>

        <HeartDivider width={50} />

        <EventBlock
          label="Wedding Ceremony"
          icon={<RingsIcon className="w-12" />}
          date={content.events.wedding.date}
          time={content.events.wedding.time}
          venue={content.events.wedding.venue}
          address={content.events.wedding.address}
        />

        {/* transition line between the two events */}
        <div className="w-full max-w-sm flex flex-col items-center gap-3 -my-2">
          <HeartDivider width={40} />
          <p
            className="serif italic text-forest leading-snug px-4"
            style={{ fontSize: "clamp(1rem, 2.6vw, 1.1rem)" }}
          >
            Please join us afterward for a reception and baby gender reveal at our home
          </p>
          <HeartDivider width={40} />
        </div>

        <EventBlock
          label="Reception & Gender Reveal"
          icon={
            <span className="flex items-center gap-2">
              <RingsIcon className="w-11" />
              <FootstepsIcon className="w-10" />
            </span>
          }
          date={content.events.babyShower.date}
          time={content.events.babyShower.time}
          venue={content.events.babyShower.venue}
          address={content.events.babyShower.address}
        />
      </div>
    </section>
  );
}
