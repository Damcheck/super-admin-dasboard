# Design System Specification

## 1. Overview & Creative North Star
### The Creative North Star: "The Obsidian Observatory"
This design system is engineered to feel like a high-end, proprietary tactical interface used by elite institutional traders. It moves away from the "flat" web by embracing **depth, translucency, and light-refraction.** 

The goal is to move beyond a standard dashboard and create an experience that feels "expensive" through intentional asymmetry and layered depth. We achieve this by treating the interface as a physical stack of laser-cut glass panels floating in a deep, atmospheric void. This is not just a UI; it is a high-performance instrument.

---

## 2. Colors
Our palette is rooted in a deep, monochromatic teal base, punctuated by high-energy neon accents.

*   **Primary Foundation:** `surface` (#001716) acts as the infinite void. All other layers must feel as though they are emerging from this depth.
*   **The "No-Line" Rule:** Do not use 1px solid borders for layout sectioning. Vertical and horizontal separation must be achieved through background shifts (e.g., using `surface-container-low` for sidebars vs. `surface` for the main stage).
*   **Surface Hierarchy & Nesting:** 
    *   **Level 0 (Base):** `surface` (#001716)
    *   **Level 1 (Sections):** `surface-container-low` (#00201e)
    *   **Level 2 (Cards):** `surface-container-high` (#0b2f2d) / 40% Opacity
*   **The "Glass & Gradient" Rule:** All primary cards must utilize `backdrop-blur-xl` and a subtle linear gradient border using `primary-container` (#00ffcc) at 20% opacity. This creates a "3D cut glass" edge that catches ambient light.
*   **Signature Textures:** Use a subtle radial gradient of `surface-bright` (#1d3f3c) in the background to prevent the dark mode from feeling "dead" or flat.

---

## 3. Typography
The typography system balances technical precision with modern editorial flair.

*   **The Display Layer:** We use **Space Grotesk** for `display` and `headline` scales. Its geometric quirks signal a "tech-forward" and futuristic personality.
*   **The Information Layer:** We use **Inter** for `title`, `body`, and `label` scales. Inter provides the crisp, high-readability required for rapid-fire financial data.
*   **Intentional Contrast:** Primary data (Account Balances, P&L) should be `primary` (#fdfffc), while labels must use `on-surface-variant` (#b9cbc2) or `tertiary-fixed-dim` (#aacdca) to create a clear visual hierarchy where the numbers "pop" off the glass.

---

## 4. Elevation & Depth
Depth is not communicated via shadows alone, but through **Tonal Layering** and **Refraction.**

*   **The Layering Principle:** Instead of standard shadows, stack surface tiers. A `surface-container-highest` element sitting on a `surface-container-low` background creates a "natural lift."
*   **Ambient Shadows:** For "Floating" elements (Modals, Hovered Cards), use a hyper-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 255, 204, 0.04)`. This mimics the glow of the screen reflecting off a dark surface.
*   **The Ghost Border:** For containment within cards (e.g., nested stats), use `outline-variant` (#3a4a44) at 10% opacity. It should be felt, not seen.
*   **Glassmorphism:** Apply `bg-[#0a2e2c]/40` and `backdrop-blur-xl` to all interactive panels. This allows the vibrant chart accents (Orange/Cyan) to bleed through the UI, making the experience feel unified and organic.

---

## 5. Components

### Buttons
*   **Primary (Action):** `primary-container` (#00ffcc) background with `on-primary` text. No border. Apply a subtle outer glow on hover.
*   **Secondary (Outline):** 1px `primary-container` border at 40% opacity. Transparent background.
*   **Tertiary (Ghost):** `on-surface` text with no background. Interaction state is a simple `surface-bright` background shift.

### Input Fields
*   **Structure:** `surface-container-highest` background. No bottom border. 
*   **State:** On focus, the 1px "Glass Edge" (`primary-container` 20%) should transition to 50% opacity to signal activity.

### Cards & Lists
*   **Rules:** Absolute prohibition of divider lines.
*   **Separation:** Use `spacing-6` (1.5rem) of vertical white space to separate list items. Use a subtle `surface-variant` background on alternate rows for high-density tables.
*   **The "Trading Glow" Chip:** Status chips (Active, Funded, Phase 1) should have a background of the status color at 10% opacity and text at 100% opacity, creating a "neon tube" effect.

### Special Component: The Data-HUD
For Super Admin views, use "floating" data points. These are `label-sm` labels paired with `display-sm` values, with no containing box, using only the `primary-fixed` (#24ffcd) color to denote high-importance global metrics.

---

## 6. Do's and Don'ts

### Do
*   **DO** use asymmetry. Place a large display metric on the left and a dense data table on the right to create "Editorial Tension."
*   **DO** use `secondary` (#ffbc7c) for cautionary data or secondary chart trends to balance the cool teal tones.
*   **DO** maximize the use of `backdrop-blur-xl` on any element that overlaps another.

### Don'ts
*   **DON'T** use 100% opaque black backgrounds (#000000). Always use the deep teal `surface` (#001716) to maintain the brand's atmospheric depth.
*   **DON'T** use rounded corners larger than `xl` (0.75rem). The system should feel "precision-machined," not bubbly or friendly.
*   **DON'T** use high-contrast dividers. If you can't see the separation through background shifts, increase the spacing scale rather than adding a line.