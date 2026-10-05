# Odisha Trails

You are acting as a senior product designer, frontend architect, motion designer, and production engineer.

I am giving you a ZIP named:

`Rural-Camps-One-Shot-Build-Pack.zip`

Your job is to build the **complete production-ready Rural Camps website** from this specification pack.

Do NOT start coding immediately.

First inspect and understand the ZIP completely.

Inside it is:

`/docs`

with 19 specification files.

The main file is:

`docs/18-ONE-SHOT-MASTER-PROMPT.md`

Read that file first, then read **every other file inside `/docs`** before making implementation decisions.

Treat the documentation as the project's source of truth.

---

# IMPORTANT

Do not create your own unrelated interpretation of Rural Camps.

Do not simplify this into a normal camping template.

Do not create only a hero or homepage demo.

Do not stop halfway.

I want the complete V1 website.

---

# PROJECT

Brand:

**RURAL CAMPS**

Location focus:

**Odisha, India**

Core offerings:

- Camp With Us
- Rent A Camp
- Rural Stay
- Tours / Experiences

Primary destination hubs:

- Ramachandi / Puri–Konark Marine Drive
- Koraput

Koraput can contain experiences/places such as:

- Talamali
- Deomali
- Duduma
- Gupteswar
- Kolab
- Machhakund
- Damanjodi

Do NOT automatically represent these as separate Rural Camps branches.

Daringbadi and Phulbani must not be presented as live bookable locations unless the documentation explicitly allows it.

---

# CORE CREATIVE DIRECTION

The website should feel like:

**modern outdoor editorial + cinematic Odisha travel film + authentic camping experience**

It should feel:

- premium in execution
- adventurous
- warm
- youthful
- authentic
- highly visual
- Odisha-specific
- smooth
- modern

But NOT:

- luxury hotel
- generic travel agency
- Airbnb clone
- SaaS website
- eco-green template
- generic resort website

---

# HOMEPAGE

Build the homepage using the seven-section structure defined in the docs.

The overall sequence should be:

### 01
Cinematic Hero

Working headline:

**OUTSIDE THE ORDINARY.**

Supporting copy:

**Camp. Stay. Explore Odisha differently.**

---

### 02
Choose Your Experience

Show:

- Camp With Us
- Rent A Camp
- Explore With Us
- Rural Stay

---

### 03
Ramachandi × Koraput

Create a visually strong transition between the two primary destination worlds.

Ramachandi:

- coastal
- beach
- camps
- friends
- nights

Koraput:

- hills
- valleys
- waterfalls
- roads
- rural experience

Desktop should have a premium scroll-linked transition.

Mobile should use a lighter non-janky version.

---

### 04
Rent A Camp

This must be one of the signature sections.

Core message:

**YOU PICK THE PLACE.  
WE BRING THE CAMP.**

Use a cinematic scroll sequence showing a location changing from empty landscape into a completed Rural Camps setup.

Use real asset placeholders where required.

---

### 05
Koraput Journey

Use a visual route / journey rather than generic cards.

Feature:

Talamali → Deomali → Duduma → Gupteswar → Kolab

Use a GSAP/SVG path animation where appropriate.

---

### 06
Real Rural Camps

Show:

- real photos
- reels/video placeholders
- guest moments
- actual reviews when supplied

Do NOT invent:

- ratings
- testimonials
- social metrics

---

### 07
Plan Your Trip

Build a clean booking form.

Fields:

- Experience
- Destination / location
- Date
- Guests
- Name
- WhatsApp number
- Optional message

On submission, generate a structured WhatsApp message and continue to WhatsApp.

---

# WHATSAPP

Use an environment variable.

Example:

`NEXT_PUBLIC_RURAL_CAMPS_WHATSAPP`

Do NOT invent the business WhatsApp number.

If the number is missing, build everything properly but make configuration clear.

The WhatsApp message should contain the user's trip details in a clean format.

---

# INTERNAL PAGES

Build all routes defined in the docs, including:

- `/`
- `/destinations`
- `/destinations/ramachandi`
- `/destinations/koraput`
- `/rent-a-camp`
- `/tours`
- `/tours/koraput-2-day`
- `/rural-stay`
- `/about`
- `/faq`
- `/plan-trip`

Do NOT create empty placeholder pages.

Each page should follow its specification from the documents.

---

# TECH STACK

Follow the technical specification.

Preferred stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP
- ScrollTrigger
- Lenis
- React Hook Form
- Zod

Do not add Three.js just to make the site look advanced.

Real footage, photography, masks, transitions and GSAP are enough.

Do not add another primary animation system if GSAP can handle it.

---

# LENIS

Lenis should be responsible for smooth scrolling.

Do NOT combine it with conflicting CSS smooth scrolling.

Desktop:

smooth but subtle.

Do not make scrolling feel delayed.

Mobile:

keep scrolling much closer to native touch behavior.

---

# GSAP

Use GSAP strategically.

I want:

- premium hero reveal
- mask transitions
- destination transition
- subtle parallax
- pinned Ramachandi/Koraput section on desktop
- pinned Rent A Camp sequence on desktop
- Koraput route drawing
- smooth section transitions
- clean booking reveal

Do NOT animate every element.

Performance comes first.

---

# SECTION TRANSITIONS

The website should feel like one continuous visual journey.

Use the transition system defined in the docs.

The rough emotional progression should be:

coastal sunset  
→ warm editorial paper  
→ sea  
→ Koraput hills  
→ dark campsite  
→ route/map  
→ real guest moments  
→ sunset booking section

Avoid the feeling of seven unrelated blocks stacked together.

---

# DESIGN SYSTEM

Follow the colors, typography and layout rules from:

`03-DESIGN-SYSTEM.md`

Use:

- Instrument Serif
- Manrope

Core colors include:

- Camp Charcoal
- Tent Bone
- Laterite
- Hill Moss
- Sand
- Mist
- Ember

Do not substitute the entire direction with random gradients.

---

# RESPONSIVE DESIGN

Desktop and mobile are equally important.

Primary review sizes:

Desktop:
`1440 × 900`

Mobile:
`390 × 844`

Also test common widths.

Mobile is NOT the desktop layout squeezed down.

Create:

- proper mobile typography
- proper mobile navigation
- portrait hero framing
- reduced animation density
- native-feeling interaction
- accessible form controls

---

# PERFORMANCE

This site is visual, but it must remain fast.

Use:

- optimized video
- poster frames
- AVIF/WebP
- responsive images
- lazy loading
- transforms rather than layout-heavy animations

Avoid huge videos.

Avoid unnecessary dependencies.

Avoid hundreds of animated DOM nodes.

Target smooth 60fps when practical.

---

# BUSINESS ACCURACY

This is very important.

Never invent:

- prices
- active availability
- ratings
- customer numbers
- fake Instagram views
- fake testimonials
- cancellation policies
- exact capacity
- current operating hours
- active future destinations

Use clear editable placeholders whenever owner confirmation is required.

The docs explain what is confirmed and what is not.

---

# CONTENT ARCHITECTURE

Keep all important destination/tour data outside UI components.

Use typed data objects.

I should be able to add a new Rural Camps destination later without rebuilding the site architecture.

---

# ASSETS

Use the asset structure defined in the docs.

If original Rural Camps photos/videos are unavailable:

use tasteful temporary placeholders.

Make them easy to replace.

Never claim an AI-generated destination image is a real Rural Camps property.

---

# ACCESSIBILITY

Support:

- keyboard navigation
- proper HTML semantics
- focus states
- labels
- form errors
- accessible mobile navigation
- contrast
- alt text
- `prefers-reduced-motion`

When reduced motion is enabled, the site must still work perfectly.

---

# SEO

Implement proper metadata for each main page.

Use location/product SEO naturally.

Do not keyword-stuff.

Create:

- title
- description
- canonical
- Open Graph
- sitemap
- robots
- valid structured data only where factual

---

# DEVELOPMENT PROCESS

Follow this sequence:

1. Inspect existing repository.
2. Extract/read the documentation.
3. Understand the whole specification.
4. Inspect existing assets.
5. Build global design tokens.
6. Add fonts.
7. Build typed content/data architecture.
8. Build navigation and footer.
9. Build the complete homepage.
10. Build every internal page.
11. Add WhatsApp booking flow.
12. Add Lenis.
13. Add GSAP/ScrollTrigger.
14. Optimize responsive layouts.
15. Optimize performance.
16. Add accessibility.
17. Add SEO.
18. Run TypeScript checks.
19. Run lint.
20. Run production build.
21. Fix issues.
22. Review against the QA document.

---

# DO NOT STOP EARLY

Do NOT finish after:

- project setup
- hero
- desktop homepage
- homepage only
- animation prototype

Continue until the complete V1 is implemented.

If a final client image, price, phone number or business detail is missing, use an explicit replaceable placeholder and continue building everything else.

Do not repeatedly ask me questions for details that can safely remain placeholders.

---

# FINAL QUALITY BAR

The result should make people feel:

> “Wait, this is Odisha?”

then:

> “What can I do there?”

then:

> “Can we go this weekend?”

The site should make Rural Camps feel like a real outdoor-experience brand, not merely a campsite.

---

# FINAL RESPONSE FROM YOU

When implementation is complete, give me:

### BUILT
All pages and major components.

### MOTION
How GSAP, ScrollTrigger and Lenis are being used.

### BOOKING
How WhatsApp handoff works.

### ASSETS NEEDED
Exact remaining images/videos/logos/client information.

### OWNER CONFIRMATION NEEDED
Any business facts still using placeholders.

### QA
- typecheck status
- lint status
- production build status
- responsive status
- known limitations

Do not just tell me what you plan to build.

Actually build it.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1ec87ace-ebfd-464d-8021-27a499721e64).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
