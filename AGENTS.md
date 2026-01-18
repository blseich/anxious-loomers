# Repository Guidelines

## Project Structure & Module Organization

- `app/` contains the Next.js App Router pages, layouts, and route-level styles (`*.tsx`, `globals.css`).
- `components/` holds shared UI components used by pages.
- `public/` stores static assets like images and icons served at `/`.
- `hooks/` holds common custom React hooks that are used through the app.
- `docs/` holds informative files about different implementations and patterns within the codebase.
- Root config files include `next.config.ts`, `tsconfig.json`, `tailwind.config.js`, and `eslint.config.mjs`.

## Build, Test, and Development Commands

- `npm run dev`: start the local dev server at `http://localhost:3000` with hot reload.
- `npm run build`: create a production build.
- `npm run start`: run the production server from the build output.
- `npm run lint`: run ESLint using the Next.js config.

## Coding Style & Naming Conventions

- TypeScript + React (Next.js 16 App Router). Use `.tsx` for React components.
- Indentation: 2 spaces (follow existing file style).
- Tailwind CSS is configured; keep utility class ordering consistent within a component.
- File names are typically kebab-case for pages (e.g., `app/mental-health-matters.tsx`).

## Testing Guidelines

- No dedicated test framework is configured yet.
- Use `npm run lint` and `npm run build` as sanity checks before shipping.
- If you add tests later, align naming with the framework defaults (e.g., `*.test.tsx`).

## Commit & Pull Request Guidelines

- Git history uses short, descriptive, lowercase messages (e.g., “about us desktop layout”).
- PRs should include a brief summary, screenshots for UI changes, and links to related issues.

## Agent-Specific Instructions

- Running `npm test` is not necessary in this project (no test script configured).
- Ask for confirmation before adding new production dependencies.
