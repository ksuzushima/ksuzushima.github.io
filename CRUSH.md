# CRUSH.md

Project: Astro + TypeScript static site

Build/Test/Lint
- Install: pnpm i (Node 24, pnpm as defined in package.json)
- Dev server: pnpm dev
- Build: pnpm build (outputs to dist/)
- Preview build: pnpm preview
- Lint all: pnpm lint (ESLint flat config with Astro + TS)
- Format: pnpm format (Prettier + prettier-plugin-astro)
- Typecheck: pnpm exec tsc -p tsconfig.json --noEmit
- Single-test: No test framework configured. If adding vitest, prefer: pnpm vitest run path/to/file.test.ts -t "name"

Conventions
- Language: TypeScript (tsconfig.json). Use explicit types at public boundaries; allow inference internally.
- Modules: ESM only. Use type-only imports when possible (import type {...}).
- Imports: Absolute from project root when configured; otherwise relative. Group: std libs, deps, internal. No unused imports.
- Astro/Components: .astro components in src/components; colocate simple TS in src/js. Keep components small and pure.
- Styling: src/css/app.css; prefer utility classes and semantic names. Avoid inline styles.
- Formatting: Prettier config in .prettierrc.mjs (2 spaces, semicolons, singleQuote). Run pnpm format before commits.
- Linting: eslint.config.mjs (Astro + TS recommended). Disable no-undef for TS files. Fix warnings or justify locally.
- Naming: camelCase for vars/functions, PascalCase for components/types, UPPER_SNAKE_CASE for constants.
- Errors: Throw Error with clear messages; avoid console in shipped code except necessary warnings. Narrow error types when catching.
- DOM/Browser: Globals provided via eslint globals. Access DOM defensively; check for null.
- Files/Dirs: Keep code in src/; avoid creating runtime files in repo root. No secrets.

CI/CD
- GitHub Actions deploy via .github/workflows/deploy.yml. Ensure build passes locally before pushing.

Editor/Tools
- VS Code: enable format on save. Prefer pnpm scripts. If adding tests, use Vitest and @testing-library for DOM.
