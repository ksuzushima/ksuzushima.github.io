# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro + TypeScript の静的サイト。GitHub Pages (https://ksuzushima.github.io) にデプロイされるポートフォリオページ。ブラウザ上でHTMLソースコードをシンタックスハイライト付きで表示するデザイン。

## Commands

- **Install:** `pnpm i` (Node 24, pnpm 10.12.1 — バージョンは mise.toml で管理)
- **Dev server:** `pnpm dev`
- **Build:** `pnpm build` (outputs to `dist/`)
- **Preview:** `pnpm preview`
- **Lint:** `pnpm lint` (ESLint flat config with Astro + TS)
- **Format:** `pnpm format` (Prettier + prettier-plugin-astro)
- **Typecheck:** `pnpm exec tsc -p tsconfig.json --noEmit`
- **Test:** テストフレームワーク未設定。追加する場合は Vitest を使用: `pnpm vitest run path/to/file.test.ts -t "name"`

## Architecture

- `src/pages/index.astro` — 唯一のページ。テーブルレイアウトでHTMLコードを表示
- `src/components/` — 小さく純粋な .astro コンポーネント群（HtmlTag, LineNumber, LineContent など）。HTMLシンタックスハイライトの各要素を担当
- `src/js/` — クライアントサイドTS。`lineNumber.ts` が動的に行番号を付与（最終行は🐈）
- `src/css/app.css` — グローバルスタイル。CSS nesting、ダークモード対応
- `.github/workflows/deploy.yml` — GitHub Actions で main push 時に自動デプロイ

## Conventions (from CRUSH.md)

- **TypeScript:** public boundaries では明示的な型、内部では推論を活用。`import type` を積極的に使用
- **ESM only:** CommonJS は使わない
- **Path alias:** `@/*` → `src/*` (tsconfig.json)
- **Imports:** std libs → deps → internal の順にグループ化。未使用インポート禁止
- **Naming:** camelCase (変数/関数), PascalCase (コンポーネント/型), UPPER_SNAKE_CASE (定数)
- **Styling:** `src/css/app.css` にグローバルスタイル。utility classes とセマンティック名を優先。インラインスタイル回避
- **Formatting:** Prettier (2 spaces, semicolons, singleQuote)。コミット前に `pnpm format` を実行
- **DOM:** null チェックを行い防御的にアクセス
- **Errors:** 明確なメッセージ付きで Error を throw。shipped code での console 使用を避ける
- **CI:** push 前にローカルでビルドが通ることを確認
