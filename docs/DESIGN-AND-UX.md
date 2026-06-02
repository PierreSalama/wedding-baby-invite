# Design and UX Direction

## Theme direction

The current chosen direction is green and white.

This should not mean flat green buttons on a white page. The palette needs range and depth.

## Suggested palette

- warm white or ivory background
- botanical green as the primary brand color
- sage or eucalyptus as supporting green
- deep olive or forest for readable text accents
- soft champagne or muted gold only as a very minor accent if needed

The page should still feel mostly green-and-white, not peach, not pink, and not gold-heavy.

## Visual tone

The site should feel:

- editorial
- airy
- graceful
- feminine without becoming childish
- soft and romantic
- polished enough to feel custom

## Typography guidance

Use a real typographic hierarchy:

- elegant display serif or script for hero moments
- highly readable serif or sans-serif for body copy
- restrained all-caps utility text for labels only

Avoid:

- overly thin fonts on light backgrounds
- scripts for large body sections
- low-contrast type over photos

## Imagery guidance

Photos should support the story, not carry the burden of legibility.

Use one of these patterns:

- text on mostly clean background with photos separated into their own panels
- photo with a strong soft overlay and very limited text
- split layout where text and imagery are clearly separated

Avoid placing critical paragraph text directly over busy imagery.

## Animation direction

The envelope opening is the signature interaction, so it must be sourced or adapted from a strong reference rather than improvised.

### Requirements for the envelope motion

- the flap geometry must look believable
- the letter reveal must feel elegant
- the motion must be smooth on phone
- scroll control should feel intentional, not jerky
- there should be a reduced-motion fallback

### Recommended interaction model

- hero starts as a closed envelope or invitation package
- first scroll advances the open state
- once opened, the page naturally transitions into the invitation content

### Motion rules

- one hero-quality animation is better than many average animations
- keep later sections calmer
- avoid excessive parallax
- no motion that makes text harder to read

## Desktop direction

Desktop should not simply scale the phone layout.

Possible desktop patterns:

- a centered editorial composition with lateral breathing room
- split-screen hero with envelope or invitation object on one side and details on the other
- wide section layouts with constrained text columns and anchored image panels

Desktop should feel designed, not collapsed.

## Mobile direction

Mobile remains the primary surface.

Design for:

- thumb reach
- large tap targets
- clear section spacing
- readable line length
- no horizontal jitter
- safe area awareness on iPhone

## Layout quality bar

The next implementation should feel closer to a premium microsite than a generic React landing page.

That means:

- stronger spacing rhythm
- fewer but better cards
- consistent corner radii
- deliberate section breaks
- restrained color use
- readable contrast everywhere

## Specific mistakes to avoid next time

- no washed-out body text
- no muddy overlay layers
- no desktop view masquerading as a phone viewport
- no placeholder-level envelope animation
- no coding the entire hero blind without first testing a known animation reference

## Asset needs

The next build will look much better with:

- final names
- final event dates
- final venue details
- RSVP deadline
- real or curated placeholder photos
- clear attire wording
- any floral or botanical motif references the user prefers
