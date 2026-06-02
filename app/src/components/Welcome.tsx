import { content } from "../content";
import { HeartDivider } from "./decor";

export function Welcome() {
  return (
    <section
      id="welcome"
      className="page page-white flex items-center justify-center px-7 py-24"
    >
      <div className="relative z-10 max-w-md w-full text-center flex flex-col items-center gap-8">
        <h2
          className="script text-forest leading-[0.85]"
          style={{ fontSize: "clamp(4rem, 16vw, 6rem)" }}
        >
          {content.welcome.title}
        </h2>

        <HeartDivider width={80} />

        <p
          className="serif italic text-ink/85 leading-relaxed max-w-sm"
          style={{ fontSize: "clamp(1.1rem, 3vw, 1.25rem)" }}
        >
          {content.welcome.body}
        </p>

        <HeartDivider width={40} />

        <p
          className="serif italic text-ink/70 leading-relaxed max-w-sm"
          style={{ fontSize: "clamp(1rem, 2.8vw, 1.15rem)" }}
        >
          {content.welcome.thanks}
        </p>
      </div>
    </section>
  );
}
