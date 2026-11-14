# TAMANNA — THE WEBSITE DESIGN BIBLE

> **Document type:** Living design system, creative direction, content policy, interaction specification, motion bible, accessibility contract, and implementation guide.  
> **Owner / subject:** Tamanna.  
> **Primary site:** <https://tasnimaktertamanna.github.io/>  
> **Repository:** <https://github.com/tasnimaktertamanna/tasnimaktertamanna.github.io>  
> **Current design family:** *A Little Garden of Light* — warm editorial, botanical, soft-colour, quietly expressive.  
> **Status:** Active and evolving. This document is intentionally over-detailed so future contributors (including future assistant sessions) can use it as the canonical reference instead of guessing.

---

## 0. THE ONE-SENTENCE NORTH STAR

Build a personal website that feels like opening a beautifully kept notebook in a sunlit room where a small, impossible garden is growing in the margins: warm, thoughtful, expressive, a little dreamy, technically polished, and unmistakably Tamanna's.

The site is not a business landing page, a résumé template, a generic influencer portfolio, a corporate dashboard, or a clone of another person's site. It is a personal place. It should feel authored rather than assembled from a theme. Its visual character can be whimsical without becoming childish, elegant without becoming stiff, and animated without becoming exhausting.

The central design promise is **quiet delight**. A visitor should discover small details as they move through the page: a flower mark beside the wordmark, a soft colour wash, type that feels editorial, a petal opening when a section arrives, a small star appearing after a heading, or a line that gently follows the scroll. None of these details should compete with the words or make the site difficult to use.

When a design decision is uncertain, use this order of priority:

1. Truthfulness and the owner's intent.
2. Readability, accessibility, and usability.
3. The established visual identity and typography.
4. Motion that supports the story rather than distracting from it.
5. Novelty and decoration.

A clever animation is never a reason to compromise the first four priorities.

---

## 1. IDENTITY, NAMING, AND PERSONAL BOUNDARIES

### 1.1 Public-facing identity

- Preferred display name: **Tamanna**.
- Public online name / handle: **@red_heart_07**.
- GitHub username: **tasnimaktertamanna**.
- GitHub profile: <https://github.com/tasnimaktertamanna>.
- Website: <https://tasnimaktertamanna.github.io/>.
- The wordmark should read `tamanna.` in lowercase unless a particular graphic treatment calls for uppercase micro-labels.

Use “Tamanna” in page headings, body copy, signatures, captions, and normal conversation. The full legal name may remain in formal metadata or structured data where appropriate, but it should not be unnecessarily repeated in visible interface copy. Do not call the owner “Tasnim” as a casual display name.

### 1.2 Do not invent a biography

The website must not invent or imply hobbies, education, employment, achievements, professional credentials, location details, personal history, relationships, beliefs, or ambitions that the owner has not supplied and approved.

When the site needs more content but the owner has not supplied it, use honest editorial placeholders such as:

- “A page to come.”
- “A space I'll fill when there's something I want to share.”
- “Still unfolding.”
- “A growing collection.”

An intentionally blank page is better than a fabricated story. Do not turn an empty card into a fake project, quote, testimonial, skill list, or résumé achievement merely to make the layout look full.

### 1.3 Voice and tone

The voice is first-person, personal, warm, lightly poetic, and direct. It can have a little humour and affection, but should not sound like a marketing agency wrote it. Prefer human sentences over feature claims.

Good tonal qualities:

- Gentle, not timid.
- Playful, not silly by default.
- Elegant, not grandiose.
- Personal, not oversharing.
- Clear, not vague.
- Hopeful, not falsely inspirational.

Avoid stock phrases such as “passionate creative,” “thought leader,” “innovative solutions,” “where creativity meets technology,” and “welcome to my digital universe.” Do not write exaggerated claims about the website or the owner. Do not use placeholder Latin or fake quotes in production.

### 1.4 Content ownership and relationships

Do not add another person's name, portrait, personal information, work, or relationship details to the visible website unless Tamanna explicitly requests it. A collaborator credit must describe the real contribution and permission accurately. A credit is not a substitute for permission.

---

## 2. CREATIVE DIRECTION: A LITTLE GARDEN OF LIGHT

### 2.1 The visual metaphor

The core metaphor is a personal notebook with a small botanical universe growing around it. It has five ingredients:

1. **Paper:** warm, tactile-feeling backgrounds, quiet borders, generous margins.
2. **Ink:** deep plum-charcoal text with excellent contrast.
3. **Petals:** lilac, blush coral, butter yellow, and sage.
4. **Light:** translucent layers, soft halos, faint glints, delicate shadows.
5. **Growth:** scroll reveals and blooming illustrations that unfold as the visitor moves through the page.

This is an editorial botanical identity, not a floral shop identity. Flowers are visual punctuation and metaphor, not a reason to cover every empty space with leaves.

### 2.2 Emotional target

The first impression should be welcoming and distinctive. The visitor should feel that the page belongs to one real person, has been cared for, and is still allowed to grow. It should not feel like a template with a name swapped into it.

### 2.3 What it should not become

Do not drift into:

- A generic pastel SaaS landing page.
- A wedding invitation or beauty salon template.
- A children's sticker book.
- A maximalist scrapbook where every element has a different font, border, and animation.
- A dark neon technology portfolio.
- A clone of Razim's visual language, page structure, typography, or signature graphics.
- A gallery of unrelated animation demos with no personal narrative.

Borrow broad principles only when useful: craft, consistency, clear hierarchy, and deliberate motion. The site must retain its own composition and identity.

---

## 3. COLOUR SYSTEM — THE PAPER, PETAL, AND INK PALETTE

The following values are the established light-theme palette. Reuse the CSS custom properties; do not create a new slightly different lilac or cream every time a component is added.

| Token | Current value | Role |
|---|---:|---|
| `--paper` | `#fbf8f3` | Main page background; warm off-white paper |
| `--paper-deep` | `#f2ece5` | Alternate section background |
| `--ink` | `#29253b` | Main text; plum-charcoal ink |
| `--muted` | `#777181` | Secondary copy and quiet labels |
| `--faint` | `#a6a0aa` | Low-priority metadata; use sparingly |
| `--line` | `rgba(55, 46, 69, .13)` | Hairlines, outlines, dividers |
| `--lilac` | `#dcd3f5` | Soft floral/lavender surface |
| `--lilac-deep` | `#9e8bd9` | Lilac accent and emphasis |
| `--coral` | `#f3b8ad` | Blush/coral accent |
| `--butter` | `#f4e5aa` | Warm pollen / golden accent |
| `--sage` | `#c6d4b8` | Botanical green accent |

### 3.1 Colour roles

- Cream is the default canvas. It should remain the dominant colour.
- Deep ink carries most text. Never use pale lavender for essential body copy.
- Lilac is the lead accent for display emphasis, soft panels, orbital lines, and bloom details.
- Coral adds warmth and a human note; it should not become a loud warning red.
- Butter yellow is a small highlight, not a full-screen yellow background.
- Sage is a botanical counterweight. Use it in leaves, small surfaces, and quiet decorative moments.
- Borders should be subtle but visible. Avoid both invisible borders and heavy boxed UI.

### 3.2 Colour balance

As a rough visual balance, aim for approximately:

- 65–75% paper/cream and open background.
- 15–20% ink and readable text.
- 8–15% combined accent surfaces, illustrations, and decorative colour.

This is a mood guide, not a pixel-count rule. A flower may briefly occupy a colourful region, but the overall page should still breathe.

### 3.3 Dark theme

The dark theme is a second rendering of the same identity, not a different brand. Current token mapping:

| Token | Dark value |
|---|---:|
| `--paper` | `#171522` |
| `--paper-deep` | `#211c30` |
| `--ink` | `#f8f2eb` |
| `--muted` | `#b9afc2` |
| `--faint` | `#82798d` |
| `--line` | `rgba(248, 242, 235, .14)` |
| `--lilac` | `#443a61` |
| `--lilac-deep` | `#b5a4f0` |
| `--coral` | `#67434b` |
| `--butter` | `#5b5037` |
| `--sage` | `#38483e` |

Dark mode should feel like the same garden at dusk. Keep the soft accents, but adjust their luminance and opacity for contrast. Avoid pure black, electric neon, and high-contrast white cards. Test every text and control state in both themes.

### 3.4 Gradients and transparency

Use gradients to create subtle light, depth, and translucent petals. Prefer two or three harmonious stops. Keep gradients low contrast and soft-edged. A radial wash may sit behind the hero artwork; a linear blend may distinguish a botanical interlude. Do not apply a gradient to every button, card, heading, and footer.

Transparency should never make text difficult to read. Glass-like effects are decorative surfaces only, not an excuse to put body text over a busy background.

---

## 4. TYPOGRAPHY — DO NOT CHANGE THE FONTS CASUALLY

The current type system is intentional. Preserve it unless Tamanna explicitly asks to redesign typography.

### 4.1 The three families

1. **Playfair Display** — display/serif voice. Used for the wordmark, large headings, selected expressive lines, and the occasional handwritten-feeling signature.
2. **DM Sans** — primary sans-serif. Used for body copy, controls, navigation, buttons, and readable interface text.
3. **DM Mono** — monospaced editorial metadata. Used for tiny section indices, labels, handles, credits, dates, and microcopy.

Current CSS variables:

```css
--display: "Playfair Display", Georgia, serif;
--sans: "DM Sans", system-ui, sans-serif;
--mono: "DM Mono", monospace;
```

Current Google Fonts request includes Playfair Display weights 500, 600, 700 and italic 500/600; DM Sans weights 400, 500, 600, 700; DM Mono weights 400 and 500. Keep a dependable system fallback in every family.

### 4.2 Typographic hierarchy

- Hero heading: oversized Playfair Display, fluid size, compact line height, carefully controlled negative tracking.
- Section headings: Playfair Display, expressive but smaller than the hero.
- Paragraphs: DM Sans with comfortable line height and a readable measure.
- Lead paragraphs: can use Playfair Display at a modest size to create an editorial opening.
- Navigation and buttons: DM Sans, generally medium or semibold.
- Metadata: DM Mono, small uppercase text with letter spacing.
- Handwritten-like note: use italic Playfair Display; do not introduce a fourth decorative font merely to simulate handwriting.

### 4.3 Typography rules

- Large headings should be short enough to remain expressive and legible.
- Do not set long paragraphs in Playfair Display.
- Do not use DM Mono for normal paragraphs; it is a label voice, not a reading voice.
- Avoid too many all-caps labels. All-caps is for small metadata, not every heading.
- Use italics for intentional emphasis, not random decoration.
- Do not use arbitrary letter spacing to make every word look “designed.”
- Preserve typographic hierarchy across mobile and desktop. Scale fluidly instead of allowing headings to overflow.
- If fonts fail to load, the page must remain usable and well laid out with the fallbacks.

**Font preservation rule:** When improving layout, adding flowers, or changing animation, do not replace Playfair Display, DM Sans, or DM Mono. Typography is part of the approved design identity.

---

## 5. GRID, SPACING, AND PAGE COMPOSITION

### 5.1 Content width

The established page wrapper is:

```css
--wrap: min(1180px, calc(100% - clamp(34px, 8vw, 120px)));
```

Use a consistent centered wrapper for primary sections. The hero, story, online section, and footer should share the same alignment logic. Full-bleed interludes may extend to viewport edges but should align their contents to the same wrapper.

### 5.2 Spacing rhythm

Use a deliberate spacing scale rather than one-off guesses. A practical rhythm:

- 4–8px: tiny icon gaps and close label relationships.
- 12–16px: compact text and control spacing.
- 20–28px: card internals and related components.
- 32–48px: component groups and heading-to-copy gaps.
- 56–80px: major section sub-layouts.
- 82–140px: large section vertical rhythm, fluid with viewport size.

Whitespace is a design material. Do not fill every gap with a flower or a badge.

### 5.3 Grid principles

- Hero: two-column composition on wide screens, text and botanical artwork balanced rather than forced into equal halves.
- Story: two-column editorial layout, heading on one side and copy on the other.
- Bloom interlude: text and flower scene side by side on wide screens; stacked on narrow screens.
- Little-world cards: three calm cards on wide screens; one column on small screens.
- Online section: heading and a single clear profile card, not a crowded social-media wall.

### 5.4 Asymmetry

Use restrained asymmetry to make the page feel editorial: a small annotation near a large flower, a note slightly offset, or a section heading that does not line up with every card edge. Asymmetry must look intentional and must not damage alignment, reading order, or responsive flow.

### 5.5 Cards

Cards should feel like paper objects or scrapbook pages, not dashboard widgets. Use soft surfaces, a quiet border, subtle corner rounding, and an illustration with plenty of room. Avoid heavy shadows, glass cards everywhere, exaggerated rounded rectangles, and stacks of badges. Card text should remain more important than the decoration.

---

## 6. INFORMATION ARCHITECTURE AND PAGE STORY

The home page should feel like a small, coherent journey rather than a stack of unrelated blocks.

### 6.1 Header

- Wordmark: `tamanna.` with a small flower symbol.
- Navigation: concise section links, currently “My story,” “Little world,” and “Find me.”
- A “Say hello” link may appear when it points to a real, working destination.
- Theme control: a visible, keyboard-operable button with a truthful label.
- Mobile menu: button with `aria-expanded` and `aria-controls`; it must close when a navigation link is selected or Escape is pressed.
- Sticky header: translucent paper treatment and subtle blur; never obscure focused content or anchor targets.

### 6.2 Hero — the entrance

The hero introduces the person and the visual metaphor together.

Copy direction:

- Small mono eyebrow such as “A little space, just mine.”
- Large serif greeting: “Hello, I'm Tamanna.”
- Handle line: “ONLINE AS @red_heart_07”.
- One short, genuine sentence about the site being a personal space.
- One primary invitation to explore and one quiet external link (GitHub).
- Small footnote that reinforces the site's gentle, evolving nature.

Artwork direction:

- A translucent flower, ideally the approved Prism Aster asset in the current implementation.
- A soft halo behind the flower.
- A small number of orbit rings.
- A few drifting petals and glints.
- Optional small editorial annotations, never more than the composition can support.
- Credit and an accessible pause control when ambient motion is active.

The hero must communicate identity and mood within the first screen. The flower is a focal point, not an obstacle that pushes the introduction below the fold.

### 6.3 Story section — the human center

The story section should feel like a note from the owner, not an “About Us” corporate profile. Use a clear section index, a large heading such as “Not a brand. Just me.”, and a short first-person text. A warm sign-off is appropriate. Keep the copy concise until the owner supplies more material.

### 6.4 Botanical interlude — a visual breath

A dedicated interlude can carry a small line such as “There's no hurry to bloom.” This is a visual pause between the personal introduction and the collection of small sections. It uses a simple flower made from petals, a center, a stem, leaves, and orbit details. The flower should bloom when it enters the viewport.

The interlude should not contain a long essay. It is a breath, not a new information-heavy page.

### 6.5 Little world — a growing scrapbook

This area is for pages the owner chooses to develop. Current placeholder directions include:

- Little notes / journal.
- Things I make / creative experiments.
- Things I love / a personal collection.

These are possible containers, not proof of specific interests or existing content. Mark unbuilt pages clearly as “A page to come” or equivalent. A card should only become a working link when a real destination exists.

### 6.6 Find me — verified links only

Show the GitHub profile and handles accurately. Add other platforms only after Tamanna supplies or confirms the exact URLs. Do not invent usernames, email addresses, social accounts, or contact channels. External links should open safely and visibly communicate their destination.

### 6.7 Closing and footer

The page can close with a gentle thank-you, a small flower mark, and a clear back-to-top link. The footer should remain simple and consistent with the page's quiet tone. Avoid adding a fake company address, copyright owner, or legal boilerplate that does not apply.

---

## 7. MOTION BIBLE — THE PAGE SHOULD BLOOM, NOT JUMP

Motion is one of the main differentiators of this site. It should make the page feel alive and responsive to the visitor's progress, not like a theme demo where everything wiggles at once.

### 7.1 Motion principles

1. **Purpose:** each animation must explain an arrival, reveal a relationship, add depth, or create a small moment of delight.
2. **Restraint:** only a few elements should move continuously at the same time.
3. **Continuity:** motion should feel related across sections; use a shared easing vocabulary.
4. **Natural timing:** flowers unfold more slowly than buttons respond.
5. **No obstruction:** motion must not block reading, clicks, focus, or scroll.
6. **Respect:** users who prefer reduced motion receive a complete static experience.
7. **Control:** ambient motion should have an accessible pause mechanism when practical, especially for prominent animated art.

### 7.2 The motion vocabulary

The site has a small number of motion families. Reuse them instead of creating a new animation for each element.

| Motion family | Purpose | Typical treatment |
|---|---|---|
| Fade + rise | A heading or paragraph enters | Opacity 0→1; translate upward 20–34px |
| Directional reveal | Paired columns enter with spatial logic | Left column arrives from left, right from right |
| Soft zoom | Hero artwork arrives | Scale around 0.90→1 with gentle blur removal |
| Bloom | Flower or botanical illustration opens | Petals scale from closed to open with a short stagger |
| Drift | A detached petal floats | Slow small translation and rotation |
| Orbit | Thin decorative rings rotate | Long, subtle loops; almost imperceptible |
| Breathe | A flower gently expands or sways | Tiny scale/rotation range, long duration |
| Glint | A star catches light | Opacity/scale pulse, never a strobe |
| Progress | Scroll position is reflected | A 2px line grows horizontally |
| Micro-interaction | A button or link responds | 150–250ms lift, tint, or border change |

### 7.3 Scroll-triggered reveals

Use `IntersectionObserver` for section entry rather than a heavy scroll event animation engine. Typical behavior:

- An element starts with a small offset, reduced opacity, and optionally a mild blur.
- When it enters the viewport, it receives a `.visible` state.
- The reveal runs once by default, then stays visible. Do not repeatedly hide content as the user scrolls up and down unless a special interaction specifically requires it.
- A fallback must reveal everything immediately if `IntersectionObserver` is unavailable.
- Under `prefers-reduced-motion: reduce`, all content is visible immediately with no meaningful travel or blur.

Recommended reveal travel:

- Text: 20–34px maximum.
- Artwork: scale from 0.88–0.94, not from zero.
- Blur: subtle and short; do not blur important text for long.
- Duration: roughly 550–850ms depending on content size.
- Easing: use the shared `--ease` or a carefully chosen spring-like cubic-bezier.

A reveal should not delay the moment the user can read. It should finish quickly after intersection.

### 7.4 Blooming flower entrance

A bloom animation should visibly open, not merely fade in. A good sequence:

1. The flower is initially small and closed near its center.
2. Petals open outward from a shared transform origin.
3. Each petal receives a small, controlled delay (roughly 60–120ms between neighbours).
4. The center appears after the first petals begin opening.
5. The stem and leaf are revealed with a slight sway or draw-like impression.
6. The complete flower settles, then may move with a very slow idle sway.

The sequence should feel botanical rather than mechanical. Avoid sharp snaps, extreme overshoot, or petals flying in from across the screen. The first bloom can have a little bounce; the idle state should be calm.

A bloom triggered by scrolling should not restart every time the visitor crosses the same section boundary. Set its revealed state once, unless replay is an explicit feature.

### 7.5 Hero flower motion

The hero flower can use:

- A one-time opening bloom on first load.
- A gentle vertical float.
- A very slow rotation, if the asset composition looks good while rotating.
- One or two faint tinted echoes for depth, only if they clearly serve the composition.
- Thin orbital rings rotating at different very slow speeds.
- A few petals drifting independently.
- Occasional glints that pulse softly.

Do not let every layer spin in the same direction or at the same speed. The motion should have visual depth without creating a carousel or spinning-logo effect.

### 7.6 Scroll progress

A thin fixed line at the very top can indicate page progress. It should be approximately 2px high, non-interactive, and visually quiet. Update it through `requestAnimationFrame` with a passive scroll listener or an equally efficient technique. The line is a garnish, not a substitute for navigation or a scroll indicator that needs textual explanation.

### 7.7 Section-to-section choreography

The page should create a rhythm:

- Hero: the main flower blooms; copy arrives softly.
- Story: two columns reveal with directional movement.
- Interlude: petals bloom when the flower scene becomes visible.
- Little world: cards appear in a short sequence; their small symbols bloom after the card arrives.
- Find me: copy and profile card reveal from opposite sides.
- Closing: one final flower mark appears gently, followed by the thank-you line.

Do not animate every child individually. Group related content so the page does not become a cascade of tiny delays.

### 7.8 Timing and easing guide

Suggested ranges (adjust after testing):

- Button hover/focus transition: 150–250ms.
- Theme transition: 250–350ms.
- Text reveal: 550–800ms.
- Flower bloom: 900–1,400ms.
- Hero opening bloom: 1,300–1,800ms.
- Petal drift loop: 8–14 seconds.
- Flower float: 7–10 seconds.
- Orbital rings: 30–60 seconds.
- Flower rotation: 60–90 seconds or no rotation if it becomes distracting.

Keep loop periods intentionally varied to avoid synchronization. Never use rapid flashing or repetitive high-frequency movement.

### 7.9 Scroll behavior rules

- Never hijack the user's scroll wheel or touch gesture.
- Never create forced section snapping on the main page.
- Do not make the visitor wait for a cinematic intro before using the page.
- Avoid parallax that changes content position in a way that disorients the reader.
- Do not tie important text visibility to scroll position so tightly that it can disappear on fast scroll or browser resize.
- Ensure sticky elements do not cover headings or keyboard focus outlines.

### 7.10 Motion pause and reduced motion

Prominent ambient motion should have an accessible pause/resume control. The current hero label uses “Pause motion” / “Resume motion” and `aria-pressed`. Keep the button's state truthful. If a global motion toggle is introduced, it should pause all non-essential continuous animations and remember the choice only if that persistence is explained and privacy-safe.

For reduced motion:

- Disable continuous float, rotation, orbit, drift, pulsing, and animated blur.
- Do not require animation to communicate content.
- Make bloom illustrations visible in their open/static state.
- Remove smooth scrolling and large transforms.
- Reveal all text immediately.
- Keep the site complete and attractive without movement.

The `prefers-reduced-motion` media query is mandatory. A control must not be the only way to stop motion for users whose device already requests reduced motion.

---

## 8. BOTANICAL ART DIRECTION

### 8.1 Flower language

Flowers should have translucent or softly layered petals, a calm center, subtle gradients, and enough negative space around them. A stem and one or two leaves can make a bloom feel grounded. A few detached petals are acceptable. Avoid dense bouquets unless an entire composition calls for one.

### 8.2 Shapes

Good botanical shapes:

- Rounded or tapered petals.
- Slightly asymmetrical petals so a vector bloom feels organic.
- Fine stems and simple leaves.
- Elliptical orbit rings.
- Tiny pollen-like dots or glints.
- Rounded organic halos.

Avoid harsh geometric stars mixed with photorealistic flowers, random emoji as the primary art style, and excessive ornament.

### 8.3 Original Prism artwork and provenance

The current hero uses a vector asset named `prism-aster.svg`, derived from an EPS source supplied in the project conversation. Its shape and paths are treated as original artwork from the TRILYVA Prism Flowers work. The site currently credits it with the wording:

> Artwork by Robiul Rumman Razim · used with permission

That credit reflects Tamanna's report that permission was given. Do not remove the credit or broaden the permission claim beyond what the owner has confirmed. If a future asset has different terms, record its provenance and license separately.

### 8.4 Important distinction: original library vs. decorative echo

The current site does **not** include the complete TRILYVA Prism Flowers animation library. The two tinted echo images are visual echoes of the same Aster SVG, and the flower's floating/rotation/orbit effects are website-native CSS animation. They are not separate original TRILYVA animation entries. Never describe them as a full collection or as the full TRILYVA renderer.

To add other original Prism entries:

1. Obtain the actual library source or official library ZIP.
2. Inspect each entry's metadata and rendering contract.
3. Confirm permission and applicable terms for the specific entries and distribution context.
4. Preserve attribution where required.
5. Integrate a small, curated subset first; do not blindly load a multi-megabyte data file on every visit.
6. Keep original render code, export source, and website wrappers clearly separated.
7. Test the exact rendering output, loop seam, timing, and mobile performance.

A page can be beautiful with original CSS blooms while the full animation library remains unavailable. Do not fake provenance to make the design appear more complete.

### 8.5 Decoration density

Use a focal flower per major scene, not a flower in every corner. The header may have a tiny four-petal mark; the hero may have the Aster; the interlude may have a CSS bloom; cards may use miniature symbols. This creates a family resemblance without repetition becoming monotonous.

---

## 9. INTERACTION AND MICRO-DETAIL

Every control must have a real purpose and work in mouse, touch, and keyboard contexts.

### 9.1 Buttons and links

- Primary buttons use a deep ink surface and paper text in light mode; invert appropriately in dark mode.
- Secondary links remain visually quiet with a thin underline or small arrow.
- Hover effects should be small: slight lift, tint, or border darkening.
- Focus-visible states must be clear and not rely on hover.
- Buttons must have a practical tap target (aim for 44px where possible).
- Use buttons for actions and anchors for navigation.
- Never make a decorative `div` look clickable.

### 9.2 Theme toggle

The theme switch should:

- Use `button` semantics.
- Update `data-theme` on the root element.
- Update its accessible label and title to describe the next action.
- Preserve the choice in local storage if available, but continue functioning if storage is blocked.
- Avoid a flash of the wrong theme where possible.
- Keep both themes legible and coherent.

The current storage key is `tamanna-theme`; do not casually rename it and reset user choices.

### 9.3 Mobile navigation

The menu button should clearly expose open/closed state. It must:

- Update `aria-expanded`.
- Update its accessible label (“Open navigation” / “Close navigation”).
- Reference the controlled menu with `aria-controls`.
- Close after a link is activated.
- Close on Escape.
- Avoid leaving focus behind an invisible open menu.

### 9.4 External links

Open a new tab only when this is useful and use `rel="noopener noreferrer"`. Keep the URL real and owner-approved. Do not make an empty card or a coming-soon card look like an active link.

### 9.5 Cursor and hover effects

Do not replace the system cursor. Avoid large magnetic effects, cursor-following flowers, or movement that makes text hard to select. Tiny hover reactions on buttons, cards, and the flower mark are enough.

---

## 10. RESPONSIVE DESIGN CONTRACT

The page must feel intentionally composed on desktop, tablet, and phone. Mobile is not a compressed desktop page.

### 10.1 Wide desktop

- Preserve the two-column hero and story grids when there is room.
- Keep the flower large enough to read as the main illustration, but do not let it dominate the text.
- Maintain the 1180px maximum content width.
- Use open margins and a clear visual rhythm.

### 10.2 Tablet

- Reduce the hero art's dimensions before squeezing the copy.
- Reduce gaps gradually.
- Avoid three-card layouts if each card becomes too narrow.
- Ensure navigation remains spacious and does not collide with the wordmark or action controls.

### 10.3 Mobile

- Stack hero copy and artwork in a deliberate order.
- Keep the hero flower large enough to be beautiful but not so tall that the content requires endless scrolling before the story appears.
- Collapse story and online sections to one column.
- Stack scrapbook cards into one column.
- Reduce decorative petals and glints if they crowd the viewport.
- Preserve useful padding on both sides.
- Keep the wordmark, menu, and theme control reachable without horizontal scrolling.
- Buttons should be comfortably tappable.
- No text, artwork, or controls may overflow the viewport.

### 10.4 Responsive verification

Test at minimum:

- 360px width (small phone).
- 390px width (common phone).
- 768px width (tablet portrait).
- 1024px width (small laptop/tablet landscape).
- 1280px width (desktop).
- 1440px width (large desktop).

Check both themes and reduced-motion mode at narrow widths. Test the menu, page anchors, flower credit, pause control, and card interactions.

---

## 11. ACCESSIBILITY — BEAUTY MUST INCLUDE EVERY VISITOR

Accessibility is part of the design, not a cleanup task.

### 11.1 Structure

- Use one clear `h1` for the page's primary introduction.
- Keep headings in logical order.
- Use `header`, `nav`, `main`, `section`, and `footer` landmarks appropriately.
- Provide a skip link to main content.
- Give every section heading a stable ID when it is linked by navigation.

### 11.2 Images and decorative art

- Decorative flowers, halos, glints, and floating petals should be hidden from assistive technology (`aria-hidden="true"`) when they carry no unique information.
- Meaningful artwork should have concise alt text that describes its relevant content, not its entire implementation.
- Do not duplicate the same description in both nearby body copy and alt text.
- Avoid using text embedded only in images.

### 11.3 Keyboard and focus

- All interactive controls must be reachable with keyboard navigation.
- Focus indicators must be visible against both light and dark backgrounds.
- Do not remove outlines without replacing them.
- Focus must not be trapped by a decorative panel or a mobile menu.
- Anchor targets should account for sticky header height.

### 11.4 Contrast and text

- Body text must maintain strong contrast against the paper surface.
- `--faint` is for non-essential labels only; never use it for important instructions or body copy.
- Text on accent surfaces must be tested in both themes.
- Small mono labels may be visually quiet but must remain readable.

### 11.5 Motion and cognitive comfort

- Honor `prefers-reduced-motion`.
- Avoid flashing, high-frequency pulses, looping text, or large surprise movement.
- Avoid automatic content carousels.
- Keep animations short enough that they do not delay the user's understanding.

---

## 12. PERFORMANCE AND TECHNICAL RESTRAINT

The experience should feel light and immediate. A personal website does not need a large framework merely to animate a flower.

### 12.1 Preferred implementation

The current site is a small, static HTML/CSS/JavaScript project. Preserve that simplicity unless a genuinely necessary feature requires something more complex.

- Use semantic HTML.
- Use CSS custom properties for theme tokens.
- Use CSS keyframes for ambient motion.
- Use `IntersectionObserver` for one-time entrance reveals.
- Use `requestAnimationFrame` to coalesce scroll-progress updates.
- Use local storage only for small, user-visible preferences such as theme.
- Avoid bundlers or dependencies without a clear benefit.

### 12.2 Animation performance

- Prefer `transform` and `opacity` for animation.
- Avoid animating layout-heavy properties such as width, height, top, left, margin, and large shadows in continuous loops.
- Use `will-change` sparingly and only when an element actually needs it.
- Keep the number of continuously animated elements modest.
- Pause or reduce non-essential motion when the tab is hidden if implementing a global motion system.
- Avoid expensive full-screen filters and large blurred layers on low-end mobile hardware.

### 12.3 Images and assets

- Keep the hero asset optimized and sized appropriately.
- Include width/height or aspect-ratio behavior to prevent layout shifts.
- Use descriptive, stable filenames.
- Prefer SVG for clean vector artwork when it is appropriate and safe.
- Avoid embedding a large animation data file into the initial page payload.
- Lazy-load below-the-fold non-critical images.
- Do not lazy-load the primary hero asset if that creates a visibly empty first screen; use appropriate eager loading and fetch priority.

### 12.4 External resources

The three fonts currently load from Google Fonts with preconnect hints and local system fallbacks. The page must continue to render if the font service is blocked. Do not add a collection of external scripts, trackers, social widgets, or animation CDNs without a clear need and explicit approval.

### 12.5 Failure states

If JavaScript is disabled or fails:

- The main content should remain readable.
- Navigation links should still work where possible.
- Critical sections should not remain hidden behind an unrevealed state.
- The site should not display a broken animation placeholder as the only hero content.

---

## 13. DARK MODE AND STATE PERSISTENCE

Dark mode is a palette translation, not a second design. The page structure, spacing, typography, and motion should remain consistent. Decorative halos and translucent surfaces may need adjusted opacity. Check button contrast and focus rings in both themes.

Persistent state should be minimal. The theme preference may be stored under `tamanna-theme`. Do not store personal content, form contents, tracking identifiers, or behavioural profiles. If any additional preference is introduced, explain why it is stored and let the visitor understand how it behaves.

---

## 14. CONTENT COMPONENTS AND WRITING PATTERNS

### 14.1 Section labels

Section labels use small mono text, often with an index, for example:

- `01 / THE PERSON BEHIND THE PAGE`
- `02 / A FEW LITTLE CORNERS`
- `03 / AROUND THE INTERNET`

Keep them short and consistent. Their purpose is orientation, not decoration for its own sake.

### 14.2 Eyebrows

An eyebrow is a tiny introductory phrase above a heading. Use one when it improves context. It should not repeat the heading word-for-word.

### 14.3 Body copy

Use readable paragraph widths and line heights around 1.7–2.0 depending on size. Keep important statements direct. Break long copy into digestible paragraphs. Do not use excessive italic or all-caps text.

### 14.4 Cards and coming-soon states

A card with no implemented destination must say so plainly. Use labels like “A page to come.” Do not use disabled-looking controls that still respond to clicks. Do not imply a future project is already underway unless the owner confirms it.

### 14.5 Calls to action

A primary CTA should express a real action: “Come on in” to scroll to the story, “Say hello” to a working contact route, or “My GitHub” to the real profile. Avoid vague high-pressure CTAs such as “Unlock my world” or “Let's build something amazing.”

---

## 15. SEO, METADATA, AND SHARING

The website title and social preview should retain the same identity:

- Page title direction: `Tamanna — A little garden of light`.
- Description direction: a personal space for stories, ideas, and a garden of animated prism flowers.
- Canonical URL: `https://tasnimaktertamanna.github.io/`.
- Social image: `og-image.png`, 1200 × 630.
- Favicon: a small flower mark consistent with the wordmark.

Metadata must be accurate and kept in sync when the design or page structure changes. Do not keyword-stuff. Do not describe planned pages as existing features. Use one canonical URL. The Open Graph image should be legible at small preview sizes and preserve the palette and typography.

Structured data should be truthful. Do not add a job title, organization, address, or credentials that were not supplied. Formal name metadata may be retained where needed, while visible copy remains “Tamanna.”

---

## 16. FILE ORGANIZATION AND IMPLEMENTATION CONVENTIONS

The established site bundle has used these root-level files:

| File | Responsibility |
|---|---|
| `index.html` | Semantic page structure and metadata |
| `styles.css` | Tokens, layout, components, responsive rules, and motion styles |
| `main.js` | Theme toggle, menu, scroll progress, reveal behavior, pause control, and small interactions |
| `prism-aster.svg` | Main approved Prism Aster vector artwork |
| `flower-art.svg` | Supporting/custom botanical vector artwork when present in the bundle |
| `og-image.png` | Social-sharing preview |
| `favicon.svg` | Browser tab icon |
| `robots.txt` | Crawler guidance |
| `sitemap.xml` | Canonical page discovery |
| `README.md` | Simple project overview and update instructions |
| `WEBSITE-DESIGN.md` | This design bible; canonical visual and interaction reference |

Keep the site simple and root paths consistent. If the HTML references `/styles.css`, the file must exist at the repository root as `styles.css`. If assets move into a directory, update every reference and test the deployed site path. Do not leave files in a nested folder when the site expects root-level assets.

### 16.1 JavaScript conventions

- Wrap site code in a small scope (for example, an IIFE) to avoid leaking globals.
- Use descriptive names.
- Check that an element exists before attaching behavior.
- Use event listeners rather than inline handlers.
- Keep callbacks small and focused.
- Catch local-storage errors gracefully.
- Use passive scroll listeners where appropriate.
- Coalesce high-frequency updates with `requestAnimationFrame`.
- Avoid network calls for decorative effects.

### 16.2 CSS conventions

- Put design tokens near the top.
- Keep related component styles together.
- Use meaningful class names.
- Use media queries for intentional layout changes.
- Keep reduced-motion rules close to the corresponding effects and include a global safety net.
- Avoid unexplained override piles. When a rule changes, consolidate the source instead of appending endless conflicting declarations.

### 16.3 IDs and anchors

Every ID must be unique. Navigation anchors must point to real sections. Use valid opening and closing tags; run a basic HTML validation or parser after markup edits. A visually correct page with broken anchors is not complete.

---

## 17. DESIGN QUALITY BAR — WHAT “DONE” MEANS

A change is not done merely because it looks nice in one screenshot. It is done when it meets the relevant checks below.

### 17.1 Visual checks

- Fonts remain Playfair Display, DM Sans, and DM Mono.
- Paper, ink, lilac, coral, butter, and sage feel consistent.
- Hero text remains clear and prominent.
- Flower artwork has breathing room.
- Section widths and alignment are consistent.
- Cards do not look like generic SaaS widgets.
- Dark mode retains the same identity.
- The page looks intentional at phone and desktop sizes.

### 17.2 Interaction checks

- All navigation anchors work.
- Mobile menu opens, closes, and closes on Escape.
- Theme toggle updates the page and accessible label.
- Theme preference still works if storage is unavailable.
- Pause/resume control changes the actual animation state and its label/ARIA state.
- External links go to the expected destinations.
- Buttons and cards do not pretend to do things they do not do.

### 17.3 Motion checks

- Hero bloom has a clear open-and-settle phase.
- Scroll reveals do not hide text permanently.
- Section blooms happen when their scenes enter the viewport.
- Card animations have subtle staggering, not excessive delays.
- Ambient loops are slow and limited in number.
- Scroll progress tracks the page correctly after resize.
- Reduced-motion mode is fully usable and visually complete.
- No animation creates horizontal overflow or a performance problem.

### 17.4 Technical checks

- All local file paths resolve.
- JavaScript parses without syntax errors.
- HTML has unique IDs and valid structure.
- CSS parses without obvious errors.
- No console-breaking error is introduced.
- No missing images, broken fonts, or dead links.
- Metadata and social preview still match the page.
- The ZIP contains files at the expected repository paths, not accidentally nested in a wrapper folder.

### 17.5 Truth checks

- No invented biography, credential, location, hobby, or achievement.
- No unverified contact or social URL.
- No false statement that the website is live or updated before checking the deployed URL.
- No claim that the complete TRILYVA library is included when only an Aster export is present.
- Credits and permission wording remain accurate.

---

## 18. ANTI-PATTERNS — PLEASE DO NOT DO THESE

1. Do not replace the chosen fonts just because another font is trendy.
2. Do not make the entire website pink or purple; the paper background must remain dominant.
3. Do not add a new accent colour for every new section.
4. Do not use a different display font for every heading.
5. Do not make every element float, rotate, pulse, or glow.
6. Do not use scroll hijacking, compulsory scroll snapping, or a long blocking intro.
7. Do not make all content invisible until JavaScript has run successfully.
8. Do not rely on hover to reveal essential information.
9. Do not make tiny controls or low-contrast text.
10. Do not make every card a clickable link when no destination exists.
11. Do not invent personal facts to fill empty space.
12. Do not add generic “skills,” “services,” “testimonials,” or “clients” sections without real material.
13. Do not copy Razim's site identity or distinctive proprietary artwork as a shortcut.
14. Do not describe recoloured duplicate Aster artwork as separate flowers from TRILYVA.
15. Do not load a huge JSON animation library into the homepage just to show off a technical connection.
16. Do not add tracking or analytics without a clear, owner-approved purpose.
17. Do not remove credits because they interrupt the composition; redesign the credit placement instead.
18. Do not claim an upload or publication succeeded until the repository or live site confirms it.
19. Do not leave an old cache-busting query string unchanged if it prevents visitors from receiving the updated CSS/JS.
20. Do not append endless CSS overrides when a clean edit to the original rule is possible.

---

## 19. FUTURE EXPANSION IDEAS — ONLY WHEN THE OWNER WANTS THEM

The site may grow into a fuller personal space over time. Good possible additions include:

- A real journal page for posts Tamanna writes.
- A gallery for images or creative work she chooses to share.
- A small collection page for links, objects, or inspirations she personally selects.
- A more developed botanical animation gallery, with clearly identified sources and permissions.
- A contact route, if she supplies a preferred public contact method.
- A page transition motif that uses a petal or soft paper wipe, but only if it remains quick and accessible.
- A seasonal garden detail that can be turned off or allowed to rest.

These are ideas, not commitments or facts. Do not build the page as if these sections already exist. Keep future expansion modular so each new page can join the visual system without forcing a redesign of everything else.

---

## 20. THE PRISM GARDEN — ASSET INTEGRATION SPECIFICATION

The Prism Aster is a special focal artwork. Treat it with care.

### 20.1 Composition

- The Aster sits near the center of the hero illustration area.
- A low-contrast organic halo sits behind it.
- Thin orbit rings frame the flower without crossing the headline.
- Optional tinted echoes may sit at the edges to create depth; they must remain secondary.
- Detached petals are sparse and positioned with enough margin to avoid touching text or controls.
- Glints are tiny accents, not an animated star field.

### 20.2 Motion layering

Keep the motion transforms on separate wrappers where possible. For example, the bloom entrance wrapper can handle scale and opacity while the inner image handles float or rotation. This avoids competing animation declarations overwriting each other.

### 20.3 Controls and credits

The credit must remain readable at desktop and mobile sizes. The pause button must be reachable and must not overlap the art. On a small viewport, allow the credit to wrap rather than making it microscopic.

### 20.4 Loading and fallback

The flower must not cause layout shift. Reserve the artwork's space with a fixed aspect ratio or known dimensions. If the SVG fails to load, show a soft CSS botanical fallback or a meaningful static placeholder rather than a broken-image icon.

### 20.5 Future Prism entries

If additional library assets are authorized, display them as a curated set. Each item should have its true name or verified label, a clear preview, and correct attribution. Do not label a procedural CSS bloom as a named TRILYVA source animation unless it actually is that entry.

---

## 21. COLLABORATION RULES FOR FUTURE ASSISTANT SESSIONS

This document is intended to help future contributors understand the decisions already made. When a future assistant reads it, it should:

1. Treat this file as the default design source of truth for the personal website.
2. Preserve the three font families unless Tamanna explicitly asks for a typography change.
3. Keep the current identity, palette, and editorial botanical direction intact.
4. Ask for no information that has already been supplied in the current conversation or accessible project files.
5. Avoid asking Tamanna to edit code manually when a ready-to-upload package can be supplied.
6. Explain any necessary GitHub steps in short, click-by-click language.
7. Never say a file is published unless the GitHub repository or live page confirms it.
8. Distinguish design suggestions from implemented features.
9. Distinguish original TRILYVA animation assets from CSS-created effects.
10. If a source file or library cannot be retrieved, say so directly and do not invent its contents.
11. Keep a short changelog in `README.md` when a meaningful site release is prepared.
12. Validate paths, syntax, mobile behavior, theme behavior, and reduced motion before declaring a package ready.

### 21.1 Decision record template

For meaningful design changes, record:

- **Date:**
- **Change:**
- **Reason:**
- **Files touched:**
- **Visual effect:**
- **Motion effect:**
- **Accessibility impact:**
- **Responsive impact:**
- **Validation performed:**
- **Publication status:** local / packaged / committed / live verified.

This prevents future sessions from confusing an idea, a local build, a ZIP package, a GitHub commit, and a live deployment.

---

## 22. RELEASE CHECKLIST

Before creating a new website ZIP or committing an update:

- [ ] Read this design bible and the current README.
- [ ] Inspect the current files before editing; do not rely on an old copy.
- [ ] Preserve Playfair Display, DM Sans, and DM Mono.
- [ ] Preserve the established colour tokens unless there is a deliberate approved change.
- [ ] Keep content truthful and owner-approved.
- [ ] Confirm all section anchors and IDs.
- [ ] Verify the hero artwork path and credit.
- [ ] Confirm every animation has a reduced-motion fallback.
- [ ] Confirm the pause control works for the motion it claims to pause.
- [ ] Confirm no new element causes horizontal overflow.
- [ ] Test mobile navigation and theme toggle.
- [ ] Run HTML/JS/CSS checks available in the project.
- [ ] Verify every local file referenced by HTML exists in the package.
- [ ] Ensure ZIP contents are at the expected root level.
- [ ] Make the publication state explicit: not uploaded, committed, or live verified.

---

## 23. CHANGE CONTROL — WHEN MAY THE IDENTITY EVOLVE?

A design system should be stable, not frozen. Tamanna may change any part of it. However, changes should be deliberate.

A small evolution may include:

- A new flower species or shape that fits the existing visual language.
- A new section that uses the existing grid and typography.
- A more refined bloom sequence.
- A new supporting illustration style.
- A new dark-mode adjustment.
- Improved contrast or responsive behavior.

A major redesign would include:

- Replacing the type system.
- Replacing the cream-paper foundation.
- Switching from editorial botanical to a wholly different theme.
- Reorganizing the whole information architecture.
- Replacing the hero's visual metaphor.

For major changes, preserve a rollback point and explain what changes for visitors. Do not silently redesign the brand because a new trend appears.

---

## 24. THE FINAL TEST: DOES IT FEEL LIKE TAMANNA?

Before approving a change, ask:

- Does this feel like a personal space rather than a product website?
- Can a visitor understand who the page belongs to within seconds?
- Does the typography still feel elegant and readable?
- Is the page mostly paper, ink, and breathing room, with colour used deliberately?
- Do flowers bloom in a way that feels graceful rather than gimmicky?
- Does scrolling reveal the page rather than control the visitor?
- Is the motion comfortable, optional, and accessible?
- Does every sentence tell the truth?
- Is the detail adding personality, or merely adding noise?
- Would this still feel lovely if the animations were turned off?

If the page only works while everything moves, the design is incomplete. If it works as a still composition and becomes more delightful with motion, it is on the right path.

---

## 25. POCKET SUMMARY — THE NON-NEGOTIABLES

- **Name:** Tamanna.
- **Online handle:** `@red_heart_07`.
- **GitHub:** `@tasnimaktertamanna`.
- **Mood:** a little garden of light; personal, editorial, botanical, warm, quietly playful.
- **Fonts:** Playfair Display + DM Sans + DM Mono. Keep them.
- **Light palette:** paper `#fbf8f3`, deep paper `#f2ece5`, ink `#29253b`, lilac `#dcd3f5`, deep lilac `#9e8bd9`, coral `#f3b8ad`, butter `#f4e5aa`, sage `#c6d4b8`.
- **Layout:** max 1180px content width, generous whitespace, editorial grids, responsive stacking.
- **Motion:** scroll reveals, blooming petals, slow flower float, restrained orbit, tiny glints, thin progress line.
- **Accessibility:** keyboard support, visible focus, semantic HTML, reduced-motion behavior, readable contrast.
- **Truth:** do not invent biography or links; label placeholders honestly.
- **Prism:** current Aster export plus CSS effects is not the complete TRILYVA animation library; keep credits and provenance accurate.
- **Implementation:** lightweight HTML/CSS/JS; validate before packaging.
- **Publication:** never claim live until verified.

**The design mantra:** Let the page breathe. Let the flowers open. Let the words remain true. Let it feel like Tamanna.

---

*End of design bible. This file is intentionally long; use the Pocket Summary for quick orientation and the relevant sections for implementation decisions.*
