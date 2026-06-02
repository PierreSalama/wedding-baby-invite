# Project Brief

## One-line goal

Create a beautiful, highly polished invitation website for a wedding and baby shower that feels premium on phone and desktop, lets guests RSVP once, and stays cheap enough to host for free.

## Business context

This is a very small, low-traffic event site. Expected scale is roughly 50 guests, and most people will only visit once or twice. The project does not need enterprise complexity. It does need emotional impact, clean presentation, and low operational burden for the organizer.

## Core use case

Someone receives a link, opens the invitation on their phone, experiences a memorable animated opening, scrolls through the story and event details, and submits a quick RSVP with household information.

## Audience

- invited guests on iPhone and Android
- organizer on desktop reviewing RSVP responses
- a few guests may also open the link on desktop, so the site cannot feel broken or compressed there

## Non-negotiables

- phone-first UX
- green-and-white primary theme
- highly legible text
- tasteful motion, not gimmicky motion
- clear RSVP flow
- free hosting if possible
- free database if possible
- easy local testing on the same Wi-Fi network from a phone

## Visual intent

The site should feel romantic, editorial, clean, and expensive-looking without actually being expensive to build or host.

The desired mood is:

- soft green and warm white
- elegant, airy, and premium
- wedding-first romance with baby-shower softness folded in carefully
- no cluttered card stack
- no generic template vibe
- no unreadable overlays on top of photos

## Why the first implementation was rejected

The first build failed for concrete reasons:

- text contrast was weak and hard to read
- the envelope animation felt homemade instead of premium
- the homepage felt like a mobile composition stretched into desktop
- the overall finish level did not match the reference images
- it was built too much from scratch instead of adapting proven motion and layout references

That failure should shape the next attempt. The rebuild should begin with reference analysis, layout decisions, animation sourcing, and typography planning before heavy coding starts.

## Success criteria

The rebuild is successful if:

- it feels beautiful immediately on first load
- the envelope animation feels intentional and high quality
- users can read every important line without strain
- desktop looks like a real desktop experience
- RSVP submissions are reliable and easy to review
- the organizer can deploy without paid infrastructure

## Scope for v1

The v1 site should include:

- one combined invitation homepage
- one RSVP page
- one private admin view for responses
- event details, schedule, attire, location, and theme guidance
- optional gallery or photo moments section
- optional urgent update banner

## Explicitly out of scope for v1

- guest self-service RSVP edits
- SMS flows
- email campaigns
- multi-language support
- large-scale CMS editing
- advanced seating charts
- invitation code system unless later required
