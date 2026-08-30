# Portfolio Redesign Design Specification

Version: 1.0
Date: 2026-08-30
Status: Approved foundation for implementation

## Scope

This file is the authoritative design specification for the portfolio redesign.

Content truth must remain in `lib/portfolio-data.ts` and the current public project/resume content. The redesign may reorganize, restage, and reframe that content visually, but it must not invent a different story, remove important facts, or break existing functionality.

Required functionality to preserve:

- Homepage
- About
- Projects
- Individual project pages
- Resume
- Ask Parsa AI
- Responsive/mobile support

Implementation note:

- When implementation begins, use the installed OpenAI Build Web Apps / Sites workflow if available for preview/build/deploy operations.
- Do not let tooling decisions change the design principles below.

## Core Direction

Primary foundation: `Field Manual`

Secondary influence: `Quiet Authority`

Small accent: `Machine Room`

Target feeling:

- Elite engineering student
- Software + AI + mechatronics
- Technical but creative
- Refined and modern
- Confident and memorable
- Interactive without becoming noisy

The site should feel like an engineer's published field notebook edited with the restraint of a strong editorial portfolio.

It must not feel:

- Beige academic
- Military or tactical
- Fake industrial UI
- Sci-fi dashboard
- Cyberpunk
- SaaS landing page
- Student template
- Generic minimal portfolio
- Generic AI-generated website

## Design Philosophy

1. Typography is the primary visual engine.
2. Composition matters more than decoration.
3. Every section should feel authored, not assembled from reusable cards.
4. Technical references must be subtle enough to read as polish first and engineering influence second.
5. Motion should clarify hierarchy, transitions, and narrative pacing.
6. The homepage must read as one continuous composition rather than six unrelated blocks.
7. Restraint is part of the signature. The design should win through precision, not spectacle.

## Visual Identity

The visual language should combine:

- Oversized, high-character display typography
- Narrow editorial text measures
- Fine rules and structural dividers
- Small mono metadata
- Asymmetric placement
- Meaningful negative space
- Carefully staged imagery
- Soft engineering notation

The design should feel physically laid out, almost like a printed technical journal translated into a modern web composition.

## Content Handling Rules

- Use existing public content as the factual source of truth.
- Tighten phrasing only when needed for layout, clarity, or pacing.
- Do not introduce generic brand copy.
- Do not bury strongest signals such as SPS Commerce, Waterloo, software engineering, AI, and mechatronics.
- Preserve the range of the portfolio: software systems, applied AI, data work, and robotics.

## Typography Roles And Candidate Fonts

Typography must do a large amount of the visual work. Do not default to Inter for the whole site.

Recommended font roles:

- Display: a condensed or high-character sans used for the name, major statements, section titles, and project titles.
- Editorial text: a readable serif or refined text face used for longer paragraphs and case-study reading.
- Mono: a precise mono used for dates, technologies, annotations, section IDs, figure captions, and UI metadata.

Candidate display fonts:

- `Big Shoulders Display`
- `Archivo SemiCondensed`
- `IBM Plex Sans Condensed`

Candidate editorial fonts:

- `Source Serif 4`
- `Newsreader`
- `Literata`

Candidate mono fonts:

- `IBM Plex Mono`
- `Geist Mono`
- `JetBrains Mono`

Recommended starting combination:

- Display: `Archivo SemiCondensed`
- Editorial text: `Source Serif 4`
- Mono: `IBM Plex Mono`

Why this starting combination:

- `Archivo SemiCondensed` is assertive without looking like a fashion portfolio or fake industrial UI.
- `Source Serif 4` adds calm editorial credibility and keeps longer text humane.
- `IBM Plex Mono` introduces technical precision without becoming hacker cosplay.

## Type Scale Principles

Type should be fluid and composition-driven rather than locked to template sizes.

Desktop targets:

- Display XXL: `clamp(4.75rem, 9vw, 9rem)`, line-height `0.88` to `0.94`
- Display XL: `clamp(3.5rem, 6.5vw, 6.5rem)`, line-height `0.92`
- Display L: `clamp(2.5rem, 4.8vw, 4.5rem)`, line-height `0.95`
- Heading M: `clamp(1.75rem, 2.6vw, 2.75rem)`, line-height `1.0` to `1.05`
- Heading S: `clamp(1.25rem, 1.8vw, 1.6rem)`, line-height `1.15`
- Body L: `1.125rem` to `1.25rem`, line-height `1.55` to `1.7`
- Body: `1rem` to `1.0625rem`, line-height `1.6` to `1.75`
- Mono label: `0.75rem` to `0.8125rem`, line-height `1.4`, uppercase or small-caps feel
- Fine note: `0.6875rem` to `0.75rem`, line-height `1.4`

Rules:

- Major display lines should feel large enough to shape the layout by themselves.
- Paragraph width should usually remain between `58ch` and `68ch`.
- Mono should never dominate the page, but should appear often enough to create rhythm.
- Avoid excessive font weights across long text. Let scale and spacing create authority.

## Color System

The palette should be original, warm, and controlled without becoming beige.

Core palette:

- Paper: `#F3EFE6`
- Paper bright: `#FBF8F2`
- Carbon: `#171717`
- Carbon soft: `#2B2B29`
- Technical green: `#23362E`
- Technical green deep: `#18251F`
- Signal copper: `#A35634`
- Signal red muted alternative: `#8E4033`
- Rule neutral: `rgba(23, 23, 23, 0.16)`
- Rule strong: `rgba(23, 23, 23, 0.32)`

Usage rules:

- Paper is the primary field, not a gimmick texture.
- Carbon should carry most reading contrast.
- Deep green should anchor technical emphasis, navigation accents, and selected surfaces.
- Copper or muted red should be rare and intentional, used for emphasis, active states, or specific key details.
- Large saturated color fills should be uncommon.
- Avoid blue-purple gradients entirely.

Contrast rules:

- Body text must remain comfortably readable on every surface.
- Accent color alone must never carry essential meaning.
- Decorative low-contrast layers must never sit behind long-form text.

## Spacing System

Use a disciplined spacing scale derived from an 8px unit.

Base scale:

- `4`
- `8`
- `12`
- `16`
- `24`
- `32`
- `40`
- `56`
- `72`
- `96`
- `128`
- `160`

Rules:

- Default vertical rhythm should be generous.
- Hero and major section transitions should use `96` to `160` spacing on desktop.
- Tight UI groups may use `8` to `16`.
- Long-form reading blocks should breathe with at least `24` between paragraphs and `40` to `56` between sub-sections.
- The site should feel expensive in space, not crowded.

## Grid

Desktop grid:

- 12 columns
- Max composition width: `1440px`
- Side padding: `40px` to `64px`
- Column gap: `20px` to `28px`

Tablet grid:

- 6 columns
- Side padding: `28px` to `40px`

Mobile grid:

- 4 columns
- Side padding: `18px` to `22px`
- Reduced but still visible asymmetry

Grid behavior:

- Use an annotation rail or utility column in key layouts.
- Use off-center anchoring frequently.
- Do not center every heading, paragraph, and image by default.
- Allow sections to shift dominant mass from left to right as the page progresses.

## Page Widths

- Full composition width: `1440px`
- Standard content width: `1280px`
- Reading column width: `620px` to `720px`
- Large narrative width: `760px` to `860px`
- Annotation rail width: `88px` to `128px`
- Resume reading width: `1040px` to `1180px`

Rules:

- Not every page needs the same max width.
- Reading pages should feel narrower than showcase pages.
- Project pages should combine a narrow narrative measure with larger media spans.

## Border And Radius Rules

Use corners sparingly and keep them restrained.

- Preferred radius: `0px`, `4px`, or `8px`
- Avoid large rounded rectangles as the default system
- Avoid fully pill-shaped controls unless there is a very specific reason
- Borders should usually be `1px`
- Strong dividers may use `1.5px` or `2px`

The site should feel cut, aligned, and deliberate rather than soft and bubbly.

## Line And Rule Treatments

Fine rules are a signature element.

Allowed treatments:

- Thin horizontal dividers
- Vertical guide lines
- Figure brackets
- Underlines that extend or shift on interaction
- Section-start rules with IDs

Rules:

- Use rules to frame content, not to decorate empty space.
- A rule should usually connect two pieces of information or introduce a new chapter.
- Avoid dense decorative grids in the background.

## Engineering Annotation System

This is a recurring motif and must stay subtle.

Allowed annotation vocabulary:

- Section IDs such as `01 / INTRO`
- Figure labels such as `FIG. 02`
- Reference tags such as `REF`, `SYS`, `NOTE`
- Date stamps
- Coordinate-like markers such as `A1`, `B3`, `X-02`
- Directional arrows
- Short stack labels
- Technical captions

Rules:

- Annotations should be small, mono, and low-emphasis.
- They should support orientation, not become decoration for its own sake.
- Use them consistently enough to create identity.
- Do not scatter fake schematic elements across the page.

## Navigation

Navigation should feel like an editorial index, not app chrome.

Desktop behavior:

- Slim sticky top bar
- Name or wordmark at left
- Compact section/page index at right
- Thin progress indicator or active rule
- Minimal background treatment

Mobile behavior:

- Use a compact top bar with an `Index` or similarly clear label
- Open into a full-screen or near-full-screen editorial menu with section IDs
- Keep the menu typographic and spacious
- Avoid generic dashboard drawers and bubbly menu buttons

Navigation rules:

- Navigation should not visually overpower the page.
- Active state should be communicated with rule movement, weight change, or subtle color shift.
- Hover and focus states must feel precise.

## Homepage Composition

The homepage must feel like one continuous authored composition.

Required flow:

- `01 / INTRO`
- `02 / SELECTED WORK`
- `03 / EXPERIENCE`
- `04 / ABOUT / PROFILE`
- `05 / ASK PARSA`
- `06 / CONTACT / ENDING`

Homepage rules:

- No isolated section blocks that look copied from separate templates.
- Each chapter should hand off visually to the next through spacing, rules, sticky behavior, or alignment changes.
- The page should feel paced, not stacked.

## Hero Composition

The intro is the identity anchor of the entire site.

Requirements:

- Parsa Ahmadi must be a major graphic element, not a small heading over body text.
- Software, AI, mechatronics, Waterloo, and current direction must be present early.
- Use large display type to create the main visual tension.
- Use supporting mono metadata and short editorial text blocks to balance the display scale.
- Avoid generic CTA button pairs.

Preferred structure:

- Giant name across multiple lines or a broken asymmetric lockup
- Offset supporting text in a narrow reading column
- Mono metadata rail with university, discipline, location, and current focus
- Portrait used as a tall or asymmetric artifact, not a centered square avatar
- One restrained directional action such as `View selected work`, `Open resume`, or a scroll cue

Copy rules:

- Avoid startup slogans.
- Avoid overexplaining in the hero.
- Sound precise, current, and ambitious.

## Experience Presentation

Experience should read like an engineering log, not a stack of resume cards.

Rules:

- SPS Commerce must receive strongest prominence as the newest and most strategically relevant experience.
- Lead with outcome and scope, then technologies.
- Use dates and locations as small annotation data, not paragraph clutter.
- Treat the experience section as a paced timeline with clear hierarchy between roles.
- Let the newest role have the strongest visual mass.

Possible presentation pattern:

- Featured current/recent role in a larger chapter treatment
- Additional roles as smaller but still editorial entries
- A vertical log structure with chapter dividers and sparse notes

## About Page Principles

The About page should deepen credibility and personality without becoming autobiographical filler.

Rules:

- Preserve readable long-form paragraphs from the source content.
- Use an editorial reading layout rather than generic cards.
- Skills should be grouped intelligently and treated as labeled lists or annotated blocks.
- Education should feel precise and clean, not like a dashboard tile.
- The portrait should appear as a meaningful image field within the composition.

## Project Presentation

Projects must be presented as case-study previews, not card grids.

Rules:

- No equal-size three-card layouts.
- Each featured project should have its own composition within a shared system.
- Use one or two strong media artifacts per project.
- Different projects may use different proportions, crops, and text placement.
- Technology lists should appear as mono metadata or structured labels, not badge confetti.

System requirements:

- A shared editorial grammar must keep the project list coherent.
- Each project preview should communicate what it is, why it matters, and what kind of engineering it demonstrates.
- Software, AI, and robotics projects should not all look visually identical.

Weak asset handling:

- If an image is weak, flat, or logo-like, compensate with framing, cropping, captions, or supporting diagrams.
- Do not rely on thumbnails alone to create quality.

## Project Detail Page Principles

Project pages should feel like field reports or technical essays.

Shared structure:

- Project title and short thesis
- Date, stack, and role metadata
- One dominant hero artifact
- Chaptered narrative
- Strong back-navigation

Narrative chapters may include:

- Overview
- Problem or challenge
- System approach
- Technical decisions
- Constraints and tradeoffs
- Outcome or why it matters

Rules:

- Keep the narrative readable and paced.
- Use annotations to support orientation.
- Use imagery like evidence, not filler.
- Allow project-specific composition differences while preserving the global design language.

## Resume Page Principles

The Resume page should be a designed reading experience, not just a dump of resume facts.

Rules:

- Offer a polished live HTML presentation plus a clear PDF handoff.
- Maintain strong typographic hierarchy.
- Avoid card stacking.
- Let experience and projects read as structured professional records.
- Make the page print-friendly in spirit, even if not literally printed from the browser.

The page should feel like a clean technical dossier.

## Ask Parsa Presentation

Ask Parsa must feel like an intentional portfolio feature, not a chatbot widget.

Recommended framing:

- `QUERY / ASK PARSA`
- `FIELD QUERY`
- `ASK PARSA`

Rules:

- Keep the interaction embedded in the site language.
- Use editorial framing, fine rules, and mono prompts.
- Avoid chat bubbles, neon AI motifs, and floating assistant chrome.
- The answer area should feel like a returned note, response sheet, or typed field entry.
- If a resume link appears, it should feel integrated rather than bolted on.

## Imagery Treatment

Imagery should feel curated and staged.

Rules:

- Prefer authentic artifacts over generic stock-like visuals.
- Portrait should be treated with editorial seriousness.
- Project media should use strong crops, masks, and framing where helpful.
- Do not over-filter or over-style images.
- Use captions when they add meaning.
- Let some images breathe with whitespace instead of forcing all media into identical boxes.

## Motion System

Motion should be restrained, structural, and meaningful.

Allowed motion patterns:

- Text reveals
- Masked image reveals
- Section transitions
- Fine line drawing
- Controlled parallax
- Sticky moments
- Scroll-linked type adjustments used sparingly

Disallowed motion patterns:

- Global fade-up on every block
- Constant springs
- Random mouse-following ornaments
- Decorative motion with no narrative role
- Busy looping effects

Motion rules:

- Introduce motion at chapter transitions, not everywhere.
- A page should have only a few memorable motion ideas.
- Motion must reinforce hierarchy, not compete with it.

Suggested timing:

- Micro interactions: `140ms` to `220ms`
- Standard transitions: `240ms` to `420ms`
- Larger reveals: `500ms` to `900ms`

Suggested easing:

- Prefer crisp custom cubic-bezier easing over bouncy defaults.

## Scroll Behavior

Scroll should feel smooth and composed, but never dependent on spectacle.

Rules:

- Smooth scrolling is acceptable if it remains responsive and accessible.
- Use sticky chapters selectively.
- Use scroll to pace reveal of major sections and project media.
- Avoid turning every viewport into a forced theatrical scene.
- Important content must still make sense without scroll-linked effects.

## Hover And Focus Behavior

Hover should feel precise, not playful for its own sake.

Preferred hover ideas:

- Rule extension
- Underline travel
- Caption reveal
- Slight crop shift on imagery
- Minor weight or contrast changes

Focus rules:

- Keyboard focus must be clearly visible at all times.
- Focus states should align with the visual language using crisp outlines, rules, or high-contrast edge treatment.
- Never hide focus indicators for aesthetic reasons.

## Mobile Adaptations

Mobile must be intentionally designed, not collapsed from desktop.

Rules:

- Preserve the typography hierarchy.
- Preserve section IDs and annotation rhythm in simplified form.
- Maintain project storytelling and strong pacing.
- Reduce motion complexity where needed.
- Keep interactions thumb-friendly without turning them into pill-heavy UI.
- Recompose asymmetry rather than removing all personality.

Mobile-specific behavior:

- Display type remains large but more disciplined.
- Annotation rails may collapse into top labels above content.
- Sticky moments should be fewer and lighter.
- Project previews may become sequential but should still vary in rhythm.

## Accessibility

Accessibility is a design requirement, not a post-process.

Rules:

- Respect `prefers-reduced-motion`.
- Ensure keyboard accessibility across navigation, Ask Parsa, project links, and resume actions.
- Maintain strong contrast.
- Do not rely on motion alone to explain state.
- Do not rely on color alone to explain state.
- Keep reading order logical and semantic.
- Large type must still remain readable and not clip at zoom levels.

## Performance Rules

Decorative ambition must not damage the site.

Rules:

- Avoid enormous animation bundles.
- Prefer progressive enhancement.
- Use GPU-heavy effects sparingly.
- Load media thoughtfully.
- Keep the homepage performant even with stronger composition and motion.
- The design must still communicate if animation fails or JavaScript is delayed.

## ANTI-AI-SLOP RULES

If a design choice starts to look like a template, remove it or rework it.

Absolutely avoid:

- Blue or purple glow aesthetics
- Glassmorphism as a system
- Generic card grids
- Three equal marketing columns
- Pill buttons everywhere
- Floating blobs
- Fake terminals
- Fake hardware controls
- Random 3D objects
- Decorative circuit-board backgrounds
- Dashboard widgets
- Overuse of badges
- Empty buzzword copy
- Stock “AI future” visuals
- Over-animated entrances
- Centering everything by default
- Reusing the same project layout three times
- Excessive border radius
- Generic social-proof style sections
- Visual clutter disguised as creativity

When uncertain:

- Prefer stronger typography over more decoration.
- Prefer better spacing over more components.
- Prefer one meaningful interaction over five average ones.
- Prefer authentic artifacts over synthetic technical theater.

## DESIGN SIGNATURES

These recurring ideas should make the portfolio recognizably yours.

1. Oversized name and section titles used as compositional structure rather than labels.
2. A subtle annotation language of section IDs, figure captions, dates, and technical references.
3. Fine rules and dividers that guide reading and create rhythm.
4. Alternating asymmetric chapters that shift visual weight across the page.
5. Editorial text blocks paired with compact mono metadata rails.
6. Carefully staged authentic project media with caption-like treatment.
7. A warm paper-and-carbon palette sharpened by deep green and restrained copper.
8. Motion that feels like document choreography rather than UI animation.

## Finished Homepage Feel

The finished homepage should feel like opening a beautifully art-directed engineering journal: precise, calm, ambitious, and unmistakably personal. It should communicate that Parsa is not just a student with projects, but a serious young engineer with range across software, AI, data systems, and mechatronics, presented with the taste and confidence of someone who cares deeply about both craft and substance.
