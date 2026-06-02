import { content } from "../content";
import { HeartDivider, ChurchIcon, GenderRevealIcon } from "./decor";

/*
  Drop a photo at one of these paths to replace the icon:
    src/assets/church.jpg | .png | .webp | .jpeg
    src/assets/gender-reveal.jpg | .png | .webp | .jpeg
*/
const churchPhotos = import.meta.glob("../assets/church.*", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const genderRevealPhotos = import.meta.glob("../assets/gender-reveal.*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const churchPhoto = Object.values(churchPhotos)[0] || null;
const genderRevealPhoto = Object.values(genderRevealPhotos)[0] || null;

function buildGoogleMapsUrl(venue: string, address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${venue} ${address}`,
  )}`;
}

type VenueCardProps = {
  label: string;
  venue: string;
  address: string;
  fallbackIcon: React.ReactNode;
  photoSrc: string | null;
};

function VenueCard({ label, venue, address, fallbackIcon, photoSrc }: VenueCardProps) {
  const directionsUrl = buildGoogleMapsUrl(venue, address);

  return (
    <div className="w-full bg-white border border-eucalyptus/30 rounded-3xl shadow-[0_18px_40px_-22px_rgba(138,106,44,0.35)] overflow-hidden">
      {/* horizontal layout on >= sm: photo LEFT, info RIGHT */}
      <div className="flex flex-col sm:flex-row">
        <div
          className="relative w-full sm:w-[42%] h-48 sm:h-auto sm:min-h-[260px] flex items-center justify-center overflow-hidden shrink-0"
          style={
            photoSrc
              ? undefined
              : {
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(184,201,166,0.55), rgba(248,243,232,0.85))",
                }
          }
        >
          {photoSrc ? (
            <img
              src={photoSrc}
              alt={venue}
              className="w-full h-full object-cover"
              draggable={false}
            />
          ) : (
            fallbackIcon
          )}
        </div>

        <div className="flex-1 px-6 py-7 sm:px-7 sm:py-8 text-center sm:text-left flex flex-col justify-center">
          <p className="tracking-label text-botanical mb-2">{label}</p>
          <p
            className="serif text-forest mb-1 leading-tight"
            style={{ fontSize: "clamp(1.2rem, 3vw, 1.4rem)", fontWeight: 500 }}
          >
            {venue}
          </p>
          <p
            className="text-ink/70 mb-5 leading-relaxed"
            style={{ fontSize: "0.95rem" }}
          >
            {address}
          </p>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block self-center sm:self-start px-6 py-3 rounded-full bg-forest text-ivory tracking-[0.18em] uppercase text-xs hover:bg-botanical transition-colors active:scale-95"
            style={{ fontFamily: '"Work Sans", system-ui, sans-serif' }}
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}

export function Location() {
  return (
    <section
      id="location"
      className="page flex items-center justify-center px-6 py-24"
      style={
        churchPhoto
          ? {
              backgroundImage: `linear-gradient(rgba(250,246,236,0.94), rgba(250,246,236,0.97)), url('${churchPhoto}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }
          : { background: "var(--c-ivory)" }
      }
    >
      <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center gap-6">
        <h2
          className="script text-forest leading-[0.85]"
          style={{ fontSize: "clamp(3.4rem, 13vw, 5rem)" }}
        >
          {content.location.title}
        </h2>

        <HeartDivider width={70} />

        <VenueCard
          label="Wedding Ceremony"
          venue={content.events.wedding.venue}
          address={content.events.wedding.address}
          photoSrc={churchPhoto}
          fallbackIcon={<ChurchIcon className="w-24 h-24 sm:w-28 sm:h-28 opacity-90" />}
        />

        <VenueCard
          label="Reception & Gender Reveal"
          venue={content.events.babyShower.venue}
          address={content.events.babyShower.address}
          photoSrc={genderRevealPhoto}
          fallbackIcon={<GenderRevealIcon className="w-24 h-24 sm:w-28 sm:h-28 opacity-90" />}
        />
      </div>
    </section>
  );
}
