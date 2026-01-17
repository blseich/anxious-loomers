# Spacing System

This repository uses a shared spacing rhythm to keep sections aligned and
consistent across mobile and desktop.

## Global Rules
- Section vertical spacing: `my-12` on mobile, `lg:my-28` on desktop via
  `components/section.tsx`.
- Content container: use `.section-container` for consistent horizontal gutters
  and max width.
- Text width: prefer `max-w-prose` for paragraphs and `max-w-5xl`/`max-w-6xl`
  for layout blocks.

## Container Utility
`.section-container` provides:
- Mobile: `max-width: 72rem`, `padding-left/right: 1.5rem`.
- Desktop (>=1024px): `padding-left/right: 3rem`.

## Recommended Spacing Scale
- Section header padding: `py-6` (mobile), `lg:py-8` (desktop).
- Section content separation: `mt-8` to `mt-10`.
- Card/internal padding: `p-4` (mobile), `lg:p-6`.
- Grid gaps: `gap-6` (mobile), `lg:gap-8`.

## Usage
- Wrap section contents with `.section-container` unless a full-bleed background
  or image is required.
- Keep per-section overrides minimal; align to the scale above.
