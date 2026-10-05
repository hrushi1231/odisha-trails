# Homepage motion-engineering pass

## Scope
Optimize only the existing homepage motion and scrolling. Preserve all approved layouts, copy, routes, booking behavior, SEO, data, and internal pages.

## Implementation
- Add one shared GSAP/ScrollTrigger loader that registers the plugin once and supports cancellation-safe component initialization.
- Refactor every active homepage motion component to own a section ref, scope selectors with `gsap.context`, and clean timelines, media-query handlers, and ScrollTriggers on unmount.
- Make Lenis react to desktop and reduced-motion media-query changes, using one lerp-based model; keep mobile/tablet native and refresh ScrollTrigger after fonts and critical hero media settle.
- Remove duplicate manual scroll heights from the two desktop pinned sections so ScrollTrigger alone supplies pin spacing.
- Change the destination transition from per-frame polygon morphing to a static organic mask whose Koraput layer moves horizontally by transform; synchronize labels, copy, edge, and route line in the same scrub timeline.
- Prepare Rent A Camp for six layered image stages with current imagery as fallback, crossfade only adjacent frames, and scope step animation to desktop steps only.
- Combine the Koraput route and stop reveals into one desktop scrub timeline at the requested progress points; use lightweight independent entry reveals on mobile.
- Consolidate Plan Your Trip into one entrance timeline and reduce Real Rural Camps movement to subtle 24–30px entrances.
- Replace runtime SVG turbulence grain with a small static repeating texture, disabled on mobile.
- Remove only confirmed-unused legacy homepage motion code/styles and dependencies; retain shared/internal-page styles such as `booking-section` where still used.

## Verification
- Check 1440×900, 1920×1080, 1024×768, and 390×844.
- Verify native mobile scrolling, exactly two desktop pins, no dead scroll, no hidden duplicate animations, no overflow, clean route/resize lifecycle, reduced-motion behavior, and zero console errors/warnings.
- Capture desktop and mobile screenshots and report ScrollTrigger counts, pinned sections, fixes, files changed, and remaining bottlenecks.
