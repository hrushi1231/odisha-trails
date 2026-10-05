# Rural Camps V1 Build Plan

## Goal
Build the complete 11-route Rural Camps website as an Odisha-rooted outdoor editorial experience, following all 19 supplied specifications. The existing TanStack Start foundation will be preserved and the documented Next.js patterns translated to TanStack equivalents.

## Foundation
- Establish the documented Camp Charcoal, Tent Bone, Laterite, Hill Moss, Sand, Mist, and Ember token system.
- Load Instrument Serif and Manrope through the document head with restrained weights.
- Add GSAP/ScrollTrigger and Lenis only; keep React Hook Form and Zod for booking.
- Create typed, centralized destination, experience, tour, FAQ, media, and verification-status data.
- Build reusable media fallbacks so missing owner photography never creates broken layouts or false authenticity claims.
- Record architecture decisions and configuration requirements in the project guidance.

## Shared Site Experience
- Build the editorial logo treatment, desktop navigation, accessible mobile menu, footer, page transitions, focus states, and global Plan A Trip action.
- Add subtle film grain, paper/topographic texture, organic masks, and route-line motifs without glassmorphism, gradients, or generic travel-card styling.
- Initialize Lenis once for subtle desktop smoothing, retain near-native mobile scrolling, and disable it for reduced motion.
- Register GSAP once, scope and clean every timeline, and reserve desktop pinning for the two specified sequences.

## Homepage
Build exactly the seven required sections:
1. **Cinematic Hero** — immediate poster-first visual, editorial reveal, destination index, and “Find Your Escape.”
2. **Choose Your Experience** — four asymmetric visual paths for Camp With Us, Rent A Camp, Explore With Us, and Rural Stay.
3. **Ramachandi × Koraput** — pinned desktop sea-to-hills mask transition; stacked mobile destination stories.
4. **Rent A Camp** — signature empty-landscape-to-finished-camp scroll sequence on desktop; shorter staged reveal on mobile.
5. **Koraput Journey** — animated SVG route through Talamali, Deomali, Duduma, Gupteswar, and Kolab; vertical mobile route.
6. **Real Rural Camps** — honest media/reel placeholders with no invented reviews, counts, or ratings.
7. **Plan Your Trip** — reusable validated booking form and WhatsApp handoff.

## Complete Route Set
- `/destinations` — live destination discovery and experience filtering.
- `/destinations/ramachandi` — coastal story, night flow, media, withheld unverified operations, booking action.
- `/destinations/koraput` — regional hub, four experience modes, Talamali/Deomali feature, journey highlights, Rural Stay preview.
- `/rent-a-camp` — feasibility-led process, verified-safe wording, signature setup story, operational FAQ, request form.
- `/tours` — live Koraput journey listing and custom enquiry.
- `/tours/koraput-2-day` — overview, two-day editorial timeline, route visualization, withheld unverified inclusions/pricing, travel notes, booking.
- `/rural-stay` — story, accommodation concept, local experience, gallery placeholders, FAQ, enquiry without claiming unverified live details.
- `/about` — affordable outdoor Odisha story and vision, avoiding unverified legal relationships.
- `/faq` — grouped answers limited to confirmed facts, with enquiry paths where owner confirmation is required.
- `/plan-trip` — expanded conditional booking flow.

## Booking and WhatsApp
- Use one Zod schema and React Hook Form implementation across homepage, destination CTAs, Rent A Camp, and Plan Trip.
- Switch destination/setup/pickup fields by experience, validate dates, guest count, name, and phone, and announce errors accessibly.
- Generate the exact structured, URL-encoded WhatsApp message from the specification.
- Use a Vite-compatible public environment variable for the WhatsApp number and provide an example configuration file; if absent, keep the form usable but block the outbound action with a clear setup notice.
- Add non-blocking hooks for started, completed, and WhatsApp-clicked events without choosing an analytics vendor.

## Media Strategy
- Create a cohesive set of clearly temporary, Odisha-specific editorial landscape placeholders for coast, hills, waterfalls, roads, rural textures, and camp setup stages.
- Never describe temporary imagery as a real Rural Camps site, guest, or property.
- Use responsive crops, explicit dimensions/aspect ratios, eager first-view media, and lazy loading below the fold.
- Centralize every media reference so owner assets can replace placeholders without changing page components.

## Responsive, Accessibility, and Motion
- Compose dedicated desktop, tablet, and mobile layouts at the documented behavioral breakpoints.
- Validate 1440×900 and 390×844 first, then all listed widths from 360 to 1920.
- Ensure intentional heading wraps, no overflow, 44px touch targets, keyboard navigation, trapped mobile-menu focus, Escape close, labels, live errors, semantic hierarchy, useful alt text, and reliable image overlays.
- Provide complete static fallbacks for reduced motion; no content or navigation will depend on animation.

## SEO and Production Details
- Give every content route unique title, description, canonical, Open Graph text, `og:type`, and Twitter card metadata.
- Add factual breadcrumb structured data where valid, plus sitemap and robots handling; omit fabricated organization, review, price, and availability data.
- Keep Daringbadi and Phulbani out of live/bookable UI, and keep Koraput stops represented as regional experiences rather than branches.

## Verification
- Exercise every route and link, conditional form branch, WhatsApp message generation, missing-number state, menu behavior, reduced-motion mode, and animation cleanup.
- Run focused tests, TypeScript checking, lint, and production build; fix all relevant failures.
- Inspect desktop and mobile renders with browser screenshots, check horizontal overflow and runtime/console/network errors, then review against the supplied QA checklist.

## Owner Inputs Remaining After Build
The finished V1 will clearly identify replaceable items: official logo files, real desktop/mobile hero footage and posters, Ramachandi/Koraput/Rural Stay galleries, Rent A Camp setup footage or frame sequence, approved guest/reel content, WhatsApp number, canonical production URL, exact operating details, policies, current inclusions, pricing, and the Adventure Holiday relationship wording.
