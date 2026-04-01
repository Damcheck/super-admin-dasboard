# Design System Specification: Liquid Cyber-Glass Evolution

## 1. Overview & Creative North Star
### Creative North Star: "The Ethereal Command"
This design system moves beyond the rigid, box-shadow-heavy interfaces of the past into a realm of fluid, high-tech editorialism. It is built to feel less like a static software interface and more like a high-end digital lens—a piece of "liquid glass" floating over a deep, organic void.

To break the "template" look, we utilize **intentional asymmetry** and **tonal depth**. Layouts should avoid perfectly centered grids; instead, use staggered card heights (using the Spacing Scale) and overlapping glass layers to create a sense of three-dimensional space. The system thrives on the tension between the organic, flowing backgrounds and the razor-sharp, technical typography.

---

## 2. Colors & Surface Philosophy
The palette is rooted in an ultra-dark teal abyss, punctuated by "neon-gas" accents and "liquid" glass surfaces.

### The Palette (Material Convention)
- **Surface & Background:** Base `surface` (`#071615`) transitions into `surface_container_lowest` (`#03110f`) for the deep background.
- **Primary Accent:** `primary_fixed` (`#24ffcd`) and `primary_container` (`#00ffcc`) serve as the high-intensity neon "energy" of the system.
- **Alert/Warning:** `tertiary_fixed_dim` (`#ffba26`) provides a warm, amber contrast to the cold teal, used for critical alerts and premium highlights.

### The "No-Line" Rule
Traditional 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined by:
1. **Background Color Shifts:** A `surface_container_low` section sitting on a `surface` base.
2. **Backdrop Blur:** Using `backdrop-blur-[40px]` to create a physical "refraction" zone that separates content.
3. **Ghost Borders:** If a boundary is required for accessibility, use a gradient-mapped stroke (see Borders below) rather than a solid color.

### Signature Textures & Glass
- **Surface Nesting:** Stack `surface_container_high` (`#1e2d2b`) on top of `surface_container` (`#132221`) to create "nested" depth.
- **Liquid Backgrounds:** Hero areas should utilize flowing, organic gradients moving between `surface` and `on_secondary_fixed_variant` (#2b4c4a), with a 2% "Liquid Grain" animated overlay to simulate a living atmosphere.

---

## 3. Typography
The typographic strategy balances "High-Tech Technicality" with "Editorial Precision."

- **Headlines (Space Grotesk):** Used for `display-lg` through `headline-sm`. The aggressive, geometric nature of Space Grotesk feels like a digital readout. Use tight tracking (-0.02em) for large headers to increase the premium feel.
- **Data & Body (Inter):** Used for all `title`, `body`, and `label` roles. Inter provides the "crisp data" necessary for readability. It acts as the functional anchor to the expressive headlines.
- **Visual Hierarchy:** Use `on_surface_variant` (`#b9cbc2`) for secondary metadata to create a natural receding effect, keeping the eye focused on `primary` (`#fdfffc`) content.

---

## 4. Elevation & Depth
Depth in this system is achieved through **Tonal Layering** and **Refraction**, not traditional heavy shadows.

- **The Layering Principle:** Treat the UI as a series of stacked frosted glass sheets. An inner card uses `surface_container_highest` (`#283836`) with 30% opacity and a `backdrop-blur-[40px]`.
- **Ambient Shadows:** Shadows are rare. When used, they must be extra-diffused. Use `on_secondary_fixed` (`#00201e`) at 8% opacity with a blur of `24` or higher. This mimics natural light passing through dark water.
- **The "Cyber-Glass" Border:** Cards must utilize a multi-layered 1px gradient border. 
    - *Top/Left:* Cyan (`#00ffcc`) at 30% opacity.
    - *Bottom/Right:* Transparent.
    - *Effect:* Add a subtle outer glow using `primary_container` at 20% opacity to simulate edge-lit glass.

---

## 5. Components

### Buttons
- **Primary:** Glass-filled with `primary_container` (`#00ffcc`) at 80% opacity. Label in `on_primary_fixed`. 1px cyan glow on hover.
- **Secondary:** Transparent background, `surface_variant` ghost border, Space Grotesk `label-md` text.
- **Tertiary:** No border or background. High-contrast Inter `label-md` with an arrow glyph for directional flow.

### Glass Cards
- **Construction:** `bg-[#0a2e2c]/30` with `backdrop-blur-[40px]`.
- **Padding:** Always use `spacing.6` (1.5rem) or `spacing.8` (2rem) for internal gutters to maintain the "Editorial" breathability.
- **Content:** Forbid divider lines. Use `spacing.4` vertical gaps or a `surface_container_low` background shift to separate data points.

### Input Fields
- **Base State:** `surface_container_lowest` with a subtle inner shadow to simulate an "etched" look.
- **Active State:** Border glows with `primary_fixed` (`#24ffcd`) and a 0.5px refraction line.
- **Typography:** Labels use `label-sm` in `on_surface_variant`.

### Interaction Accents (Chips & Alerts)
- **Chips:** Rounded `full` (9999px). Use `secondary_container` for inactive and `primary_container` for active states.
- **Alerts:** Use "Emergency Amber" (`#ffb700`) sparingly. It should be the only warm element in the interface, reserved for high-priority notifications.

---

## 6. Do's and Don'ts

### Do
- **DO** use significant negative space (spacing scale 12, 16, 20) to let the liquid background gradients "breathe" through the glass.
- **DO** use "Ghost Borders" for card containers—gradients that fade into transparency.
- **DO** overlap elements (e.g., a floating chip over a glass card edge) to enhance the 3D layering effect.

### Don't
- **DON'T** use 100% opaque, high-contrast white or grey borders. This destroys the glass illusion.
- **DON'T** use standard box shadows. If an element doesn't feel elevated, use a lighter `surface-container` tier or increase the `backdrop-blur`.
- **DON'T** clutter the UI with dividers. If you feel the need for a line, try a `spacing.10` gap instead.
- **DON'T** use rounded corners larger than `xl` (0.75rem) for main containers; keep the edges precise and architectural, reserving `full` roundedness only for chips and small buttons.