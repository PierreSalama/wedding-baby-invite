# Technical Plan

## Recommended stack

The previously chosen technical direction still makes sense for the next build:

- Vite
- React
- TypeScript
- Tailwind CSS
- GSAP for the hero interaction
- Cloudflare Pages for hosting
- Cloudflare Functions for lightweight APIs
- Cloudflare D1 for RSVP storage

This stack is probably still the best fit because:

- traffic is tiny
- cost needs to be near zero
- static content can stay fast
- Cloudflare Pages supports a free `pages.dev` domain
- D1 free limits are comfortably above this use case

## Hosting and cost notes

Cloudflare's current documentation shows:

- free and unlimited static asset delivery on Pages
- Pages Functions requests counting toward the Workers free allowance
- `100,000` free requests per day on the Workers free plan
- D1 free limits of `5 million` rows read per day, `100,000` rows written per day, and `5 GB` total storage

This is far beyond what a 50-guest invitation site needs.

Reference docs:

- `https://developers.cloudflare.com/pages/functions/pricing/`
- `https://developers.cloudflare.com/d1/platform/pricing/`
- `https://developers.cloudflare.com/pages/configuration/custom-domains/`

## Suggested architecture

### Frontend

- one React app
- route-based page structure
- content sourced from a single config or content module
- animations isolated to the hero and a few tasteful secondary reveals

### Backend

- `POST /api/rsvp`
- `POST /api/admin/login`
- `POST /api/admin/logout`
- `GET /api/admin/rsvps`
- `GET /api/admin/rsvps.csv`
- `GET /api/admin/settings`
- `POST /api/admin/settings`

## Data model

### `rsvps`

- id
- primary_name
- attendance_type
- guest_count
- guest_names
- email
- phone
- note
- created_at

### `admin_sessions`

- id
- session_token_hash
- created_at
- expires_at

### `site_settings`

- key
- value
- updated_at

### `request_logs` or rate-limit support table

- ip hash or similar lightweight fingerprint
- route
- created_at

## Validation and abuse controls

Even a tiny public RSVP form should include:

- server-side schema validation
- honeypot field
- basic rate limiting
- sane length limits
- trimmed text normalization

## Local development expectations

The next build should support two local development modes:

### Fast UI mode

- local Vite dev server for layout and animation work

### Network preview mode

- bind to `0.0.0.0`
- show the local network URL so the site can be opened on the phone using the same Wi-Fi

Example expectation:

- desktop URL like `http://127.0.0.1:4173`
- phone URL like `http://192.168.x.x:4173`

## Deployment model

### v1 launch path

1. deploy to a free `pages.dev` subdomain
2. test RSVP flow
3. optionally attach a custom domain later

### Domain guidance

- free `pages.dev` is enough for testing and maybe even launch
- if a cleaner public URL is wanted, buy a simple domain for about $10 to $15 for one year
- keep the custom domain optional until the design and RSVP flow are approved

## Content strategy

Store most site copy in one clearly named content file so it can be updated without hunting through components.

## Testing plan

- iPhone Safari first
- Android Chrome second
- desktop Chrome and Safari
- desktop should get a dedicated visual review
- test long names and long notes
- test valid and invalid RSVP submissions
- test CSV export
- test reduced-motion mode

## Rebuild strategy

The rebuild should not start with broad page coding.

Recommended order:

1. confirm content and event structure
2. choose envelope reference implementation
3. build only the hero interaction and validate it on desktop and phone
4. lock typography, spacing, and palette
5. build the rest of the landing page
6. build RSVP flow
7. build admin tools
8. connect deploy and storage last
