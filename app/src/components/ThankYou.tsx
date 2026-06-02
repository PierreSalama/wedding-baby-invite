import { content } from "../content";
import { HeartDivider } from "./decor";

export function ThankYou() {
  return (
    <section
      id="thank-you"
      className="page page-ivory flex items-center justify-center px-6 py-24"
    >
      <div className="relative z-10 max-w-md w-full text-center flex flex-col items-center gap-7">
        <h2
          className="script text-forest leading-[0.85]"
          style={{ fontSize: "clamp(4rem, 16vw, 6rem)" }}
        >
          {content.thankYou.title}
        </h2>

        <HeartDivider width={70} />

        {content.thankYou.lines.map((line, i) => (
          <p
            key={i}
            className="serif text-ink/85 leading-relaxed max-w-sm"
            style={{ fontSize: "clamp(1.05rem, 2.8vw, 1.18rem)" }}
          >
            {line}
          </p>
        ))}

        <p
          className="script text-botanical mt-3"
          style={{ fontSize: "clamp(2rem, 6vw, 2.4rem)", lineHeight: 1 }}
        >
          {content.thankYou.em}
        </p>
      </div>
    </section>
  );
}
