# Product Specification

## Product shape

The product is one combined invitation site with three main surfaces:

- `/` public invitation experience
- `/rsvp` public RSVP form
- `/admin` private organizer dashboard

## Public homepage goals

The homepage should do four things well:

1. create emotional impact
2. communicate the two events clearly
3. make logistics obvious
4. push the guest toward RSVP

## Proposed homepage structure

### 1. Opening hero

- full-screen introduction
- premium envelope opening interaction tied to scroll or an initial user action
- immediate names or headline
- clear call to continue

### 2. Welcome section

- short introduction to the couple/family
- framing sentence about celebrating love and the baby
- clean transition out of the hero into readable content

### 3. Event summary

- short overview of both events
- dates
- times
- city or neighborhood
- one-line distinction between wedding and baby shower if needed

### 4. Countdown or anticipation moment

- optional countdown to event day
- should be elegant and restrained

### 5. Details section

- venue names
- full addresses
- day and time
- parking or arrival note if needed
- map links

### 6. Story or moments section

- short relationship/family story
- optional key timeline moments
- optional curated photo grid

### 7. Schedule section

- ceremony or gathering timeline
- any bridal shower / baby shower specific sequencing if applicable
- concise and easy to scan

### 8. Attire and theme

- dress guidance
- color or style suggestions
- any baby-shower theme cue

### 9. RSVP section

- strong CTA
- very clear explanation of what guest needs to submit
- link or inline path into `/rsvp`

### 10. Closing section

- warm thank-you note
- reminder to RSVP by deadline

## RSVP flow

The RSVP should be household-based and short.

### Required fields

- primary guest name
- attendance selection
- guest count

### Optional or recommended fields

- additional guest names
- email
- phone number
- note to hosts

### Attendance options

- attending wedding day
- attending baby shower
- attending both events
- cannot attend

### RSVP behavior

- one shared public link is acceptable
- guest submits once
- organizer can manually adjust later if needed
- success state should reassure the guest that the response was received

## Admin dashboard

The admin view should be practical, not fancy.

### Minimum features

- password-protected login
- list of all submissions
- created date
- attendance type
- guest count
- note preview
- filters by attendance choice
- summary counts
- CSV export

### Nice-to-have

- toggle a single urgent update banner
- simple search by name
- copyable contact info

## Content model

Most public copy should live in one easy-to-edit content config or content file.

That content should cover:

- names
- hero headline
- intro copy
- dates and times
- locations
- attire notes
- schedule
- RSVP deadline
- gallery captions or image metadata
- footer message

## Content editing philosophy

Do not build a full CMS in v1. Keep content simple and centralized so a developer or future chat can update it quickly.

## Performance requirements

- fast first load on mobile data
- compressed imagery
- limited animation cost
- reduced-motion fallback

## Accessibility requirements

- readable contrast
- scalable text
- keyboard support on desktop
- form labels and errors
- animation should not block access to content

## Device requirements

Priority order:

1. iPhone Safari
2. Android Chrome
3. desktop Chrome and Safari

Desktop must have a deliberate layout, not a centered narrow phone mockup unless the design uses a phone frame intentionally and pairs it with a full desktop composition.
