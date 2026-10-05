# Fix Homepage Viewports 02 and 03

## Scope
- Keep the approved hero, routes, booking, SEO, data, internal pages, and later homepage sections unchanged.
- Modify only the experience layout and the Ramachandi/Koraput presentation and motion.

## Implementation
1. **Stabilize Choose Your Experience**
   - Keep each image and its copy inside one bounded article.
   - Preserve the asymmetric desktop composition using clamped sizes and breakpoint-specific placement.
   - Use a normal two-column flow from 768–1099px and a single-column editorial flow below 768px.
   - Remove all out-of-bounds text positioning and verify no horizontal overflow.

2. **Split Destination Presentation Modes**
   - Add a desktop-only cinematic wrapper containing the pinned coast-to-hills stage.
   - Add separate tablet/mobile destination stories in normal document flow, using the same existing destination media and links.
   - Fully hide desktop masks, labels, route line, and pinned stage below 1100px.
   - Tune Ramachandi and Koraput mobile image crops for the requested subjects.

3. **Make Desktop Motion Responsive**
   - Replace the one-time media query check with `gsap.matchMedia()`.
   - Restrict pinning, scrub, clipping, boundary travel, route drawing, and copy fades to widths of 1100px and above.
   - Use restrained start/end polygons and `autoAlpha` so inactive copy and CTAs cannot remain interactive.
   - Cleanly destroy and recreate the timeline across resize and orientation changes.

4. **Verify**
   - Check 1440×900, 1600×900, 1920×1080, 768×1024, 1024×768, 360×800, 390×844, and 430×932.
   - Capture the experience section and destination states, including desktop transition states.
   - Verify no overflow, no mobile pinning, clean breakpoint resize behavior, reduced motion, and no preview errors.
