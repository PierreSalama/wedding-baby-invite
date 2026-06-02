/*
  Small decorative bits used across pages:
    - HeartDivider: single heart with thin gold lines flanking it
    - LinesDivider: simple thin gold rule
    - RingsIcon: interlocked rings (wedding)
    - FootstepsIcon: pair of baby footprints
*/

export function HeartDivider({ className, width = 90 }: { className?: string; width?: number }) {
  return (
    <div className={`flex items-center justify-center ${className ?? ""}`} aria-hidden>
      <span className="h-px bg-botanical/50" style={{ width }} />
      <svg width="14" height="13" viewBox="0 0 14 13" className="mx-2 text-botanical" fill="currentColor">
        <path d="M 7 12.5 C 7 12.5 0.5 8 0.5 4 C 0.5 1.5 2 0.5 3.5 0.5 C 5 0.5 7 2 7 3.5 C 7 2 9 0.5 10.5 0.5 C 12 0.5 13.5 1.5 13.5 4 C 13.5 8 7 12.5 7 12.5 Z" />
      </svg>
      <span className="h-px bg-botanical/50" style={{ width }} />
    </div>
  );
}

export function RingsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 50" className={className} fill="none" aria-hidden>
      <defs>
        <radialGradient id="goldRing" cx="0.4" cy="0.4" r="0.7">
          <stop offset="0%" stopColor="#ead49b" />
          <stop offset="60%" stopColor="var(--c-botanical)" />
          <stop offset="100%" stopColor="#6e521e" />
        </radialGradient>
      </defs>
      {/* left ring */}
      <circle cx="29" cy="28" r="16" fill="none" stroke="url(#goldRing)" strokeWidth="4" />
      <circle cx="29" cy="28" r="16" fill="none" stroke="#fff5d6" strokeWidth="1" opacity="0.6" />
      {/* right ring (overlapping) */}
      <circle cx="51" cy="28" r="16" fill="none" stroke="url(#goldRing)" strokeWidth="4" />
      <circle cx="51" cy="28" r="16" fill="none" stroke="#fff5d6" strokeWidth="1" opacity="0.6" />
      {/* tiny diamond on right ring */}
      <path d="M 51 9 L 54 13 L 51 17 L 48 13 Z" fill="#fff5d6" stroke="var(--c-botanical)" strokeWidth="0.6" />
    </svg>
  );
}

export function FootstepsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 70" className={className} fill="none" aria-hidden>
      <defs>
        <radialGradient id="footGold" cx="0.4" cy="0.4" r="0.7">
          <stop offset="0%" stopColor="#ead49b" />
          <stop offset="100%" stopColor="var(--c-botanical)" />
        </radialGradient>
      </defs>
      {/* left foot — sole */}
      <ellipse cx="22" cy="38" rx="11" ry="17" fill="url(#footGold)" transform="rotate(-12 22 38)" />
      {/* left foot — toes */}
      <circle cx="14" cy="21" r="3" fill="url(#footGold)" />
      <circle cx="20" cy="17" r="2.7" fill="url(#footGold)" />
      <circle cx="26" cy="16" r="2.4" fill="url(#footGold)" />
      <circle cx="31" cy="18" r="2.1" fill="url(#footGold)" />
      <circle cx="35" cy="22" r="1.8" fill="url(#footGold)" />

      {/* right foot — sole */}
      <ellipse cx="58" cy="48" rx="11" ry="17" fill="url(#footGold)" transform="rotate(12 58 48)" />
      {/* right foot — toes */}
      <circle cx="65" cy="31" r="3" fill="url(#footGold)" />
      <circle cx="59" cy="27" r="2.7" fill="url(#footGold)" />
      <circle cx="53" cy="26" r="2.4" fill="url(#footGold)" />
      <circle cx="48" cy="28" r="2.1" fill="url(#footGold)" />
      <circle cx="44" cy="32" r="1.8" fill="url(#footGold)" />
    </svg>
  );
}

export function ChurchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 90" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id="churchGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ead49b" />
          <stop offset="100%" stopColor="var(--c-forest)" />
        </linearGradient>
      </defs>
      {/* steeple cross */}
      <path d="M 40 4 L 40 14 M 36 7 L 44 7" stroke="url(#churchGrad)" strokeWidth="1.8" strokeLinecap="round" />
      {/* steeple roof */}
      <path d="M 30 38 L 40 14 L 50 38 Z" fill="none" stroke="url(#churchGrad)" strokeWidth="1.5" />
      {/* main body */}
      <rect x="22" y="38" width="36" height="38" fill="none" stroke="url(#churchGrad)" strokeWidth="1.5" />
      {/* arched door */}
      <path d="M 33 76 L 33 56 Q 33 50 40 50 Q 47 50 47 56 L 47 76" fill="none" stroke="url(#churchGrad)" strokeWidth="1.4" />
      {/* windows */}
      <path d="M 27 53 L 27 47 Q 27 44 30 44 Q 33 44 33 47 L 33 53" fill="none" stroke="url(#churchGrad)" strokeWidth="1" />
      <path d="M 47 53 L 47 47 Q 47 44 50 44 Q 53 44 53 47 L 53 53" fill="none" stroke="url(#churchGrad)" strokeWidth="1" />
      {/* ground line */}
      <path d="M 14 80 L 66 80" stroke="url(#churchGrad)" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export function GenderRevealIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 90" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id="balloonGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ead49b" />
          <stop offset="100%" stopColor="var(--c-forest)" />
        </linearGradient>
      </defs>
      {/* balloon */}
      <ellipse cx="40" cy="32" rx="20" ry="24" fill="none" stroke="url(#balloonGrad)" strokeWidth="1.6" />
      {/* knot */}
      <path d="M 38 56 L 42 56 L 41 60 L 39 60 Z" fill="url(#balloonGrad)" />
      {/* string */}
      <path d="M 40 60 Q 36 70 42 78 Q 38 84 40 88" stroke="url(#balloonGrad)" strokeWidth="1.2" fill="none" />
      {/* question mark inside */}
      <path
        d="M 34 26 Q 34 18 40 18 Q 46 18 46 24 Q 46 30 40 32 L 40 38"
        stroke="url(#balloonGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="40" cy="44" r="1.8" fill="url(#balloonGrad)" />
    </svg>
  );
}
