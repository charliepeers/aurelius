# Aurelius

Minimalist Stoic morning journaling web app built with React 19 + Vite 7.

## Cursor Cloud specific instructions

### Service overview

Single frontend-only React SPA served by Vite dev server on port 5173. No backend, database, or external services required.

### Running the app

- **Dev server:** `npm run dev` (starts on `http://localhost:5173`)
- **Build:** `npm run build` (outputs to `dist/`)
- **Lint:** `npm run lint`
- See `package.json` `scripts` for all available commands.

### Known caveats

- `src/prompt.js` has a syntax error (extra closing paren on line 28) that causes `npm run lint` to report a parse error. This file is not imported by `App.jsx`, so the build and dev server work fine.
- `src/dateHash.js` uses `.char()` instead of `.charCodeAt()` — this will throw at runtime if `Prompt` component is wired in.
- Tailwind CSS is mentioned in `README.md` but is not installed; Tailwind utility classes in `App.jsx` will not apply styles.
- `main.jsx` imports `./index.css` which does not exist as a file; Vite handles this gracefully (produces empty CSS).
