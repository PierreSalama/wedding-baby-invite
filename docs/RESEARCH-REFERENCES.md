# Research and References

## Why this document exists

The next build should be reference-led. The previous attempt suffered because too much of the visual and motion system was improvised from scratch.

## User-provided visual references

The original design references point toward:

- premium invitation styling
- soft romantic composition
- sectioned storytelling
- curated floral framing
- strong mobile presentation

Local files originally provided by the user:

- `C:\Users\pierr\Downloads\ChatGPT Image Jun 1, 2026, 09_15_00 PM.png`
- `C:\Users\pierr\Downloads\ChatGPT Image Jun 1, 2026, 09_15_33 PM.png`

These references are useful for mood, softness, and pacing, but the next design should shift their palette toward green and white.

## Envelope and invitation animation references

### 1. GSAP invitation card animation

- Link: `https://codepen.io/rosewang0303/pen/xxYMYGG`
- Why it matters: strong proof that the envelope flap and letter reveal can feel clean and elegant with GSAP
- How to use it: borrow motion ideas and geometry principles, then adapt to the final visual system and scroll behavior

### 2. Additional envelope GSAP examples

- Link: `https://codepen.io/tripti1410/pen/BaVKBVz`
- Link: `https://codepen.io/Dr3am3rz/pen/mrGKWb`
- Why they matter: useful as secondary references for structure, layering, and motion staging
- Caution: use these as technical inspiration, not as the final aesthetic bar

## Website structure references

### 1. Ram Patra wedding website

- GitHub: `https://github.com/rampatra/wedding-website`
- Local clone: `F:\GITHUB\Perosnal\_tmp\rampatra-wedding-website`
- Why it matters: proven free-hosting mindset, RSVP handling, mapping, scheduling, and event utility sections
- What to borrow: information architecture and practical features, not necessarily the full visual direction

### 2. Odhyp wedding invitation

- GitHub: `https://github.com/odhyp/wedding-invitation`
- Local clone: `F:\GITHUB\Perosnal\_tmp\wedding-invitation-reference`
- Why it matters: useful reference for elegant invitation framing and guest-specific delivery ideas
- What to borrow: layout sensibility, event storytelling ideas, content flow

### 3. ArchakNath wedding invitation website

- GitHub: `https://github.com/archakNath/wedding-invitation-website`
- Why it matters: responsive single-page wedding invitation reference with subtle reveal patterns
- What to borrow: section pacing and responsive structure

## Hosting and backend references

### Cloudflare Pages pricing

- `https://developers.cloudflare.com/pages/functions/pricing/`
- Key note: static asset delivery is free and unlimited, while Functions requests count toward the free Workers allowance

### Cloudflare D1 pricing

- `https://developers.cloudflare.com/d1/platform/pricing/`
- Key note: current free limits are comfortably sufficient for this project size

### Cloudflare custom domains

- `https://developers.cloudflare.com/pages/configuration/custom-domains/`
- Key note: the project can start on `pages.dev` and attach a real domain later

## Implementation lessons from research

### What to adapt instead of inventing

- envelope shape construction
- flap transform origin and timing
- letter reveal staging
- single-page invitation section order
- practical RSVP/admin utility patterns

### What still needs custom design work

- green-and-white art direction
- typography system
- phone and desktop layout pairing
- content tone
- image treatment
- admin experience details

## Recommendation for the next chat

The next implementation session should begin with:

1. reviewing the reference links in this file
2. choosing one primary envelope reference
3. defining a desktop composition before coding the full page
4. building the hero in isolation first
