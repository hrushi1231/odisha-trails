# Homepage Viewports 04–07 Plan

## Goal
Rebuild only the final four homepage sections to closely match the approved references while preserving the first three viewports, existing routes, data, SEO, and WhatsApp behavior.

## Sections
- **04 Rent A Camp:** Full-bleed dusk camp scene with split editorial headlines, CTA, and six-step setup timeline. Desktop uses one scoped pinned progression; tablet and mobile use a static stacked story without pinning.
- **05 Koraput Journey:** Warm-paper expedition board with left introduction, animated SVG route and five illustrated stops, supporting landscape imagery, subtle map/topographic details, and a vertical mobile timeline.
- **06 Real Rural Camps:** Charcoal field-journal composition with text first, a loose taped-photo collage, factual location/time-style captions, and restrained reveal/parallax motion. No ratings, testimonials, or metrics.
- **07 Plan Your Trip:** Cinematic dusk background with editorial copy and the existing validated WhatsApp form restyled as a matte dark panel. Mobile stacks copy above the form.

## Implementation
- Add four isolated homepage section components and four scoped motion components.
- Keep all section copy and stop descriptions in typed data modules; reuse existing replaceable editorial media without presenting it as real Rural Camps photography.
- Update the shared booking form only with an optional presentation class/default values needed by the homepage layout; do not change validation or WhatsApp generation.
- Replace the current inline sections 04–07 in the homepage with the new components.
- Add semantic design-token-based styles for desktop, tablet, mobile, and reduced-motion states.
- Record the new homepage section-isolation decision in project guidance.

## Motion
- Use `gsap.matchMedia()` so Rent A Camp pins only at 1100px and above, with cleanup on resize/unmount.
- Animate only opacity, transforms, SVG stroke drawing, and a light clip reveal.
- Keep sections 05–07 unpinned and mobile motion minimal or absent.

## Verification
- Compare each section against its matching reference.
- Test 1440×900, 1600×900, 1920×1080, 768×1024, 1024×768, 360×800, 390×844, and 430×932.
- Check no horizontal overflow, section separation, form usability, route links, desktop-only pinning, resize cleanup, reduced-motion behavior, console/runtime errors, and the current build signal.
- Capture desktop and mobile screenshots for all four sections and provide them as the requested review set.
