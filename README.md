# Doughlish Wood-Fired Pizza

The standalone React/Vite website for Doughlish Wood-Fired Pizza, a mobile
wood-fired pizza catering business based in Tamworth, NSW.

## Requirements

- Node.js 20 or newer
- pnpm 10 or newer

## Local development

```bash
pnpm install
pnpm dev
```

The development server runs at `http://localhost:5173` by default. Set
`PORT` to use another port. Set `BASE_PATH` when serving the built site from a
subpath, such as `BASE_PATH=/doughlish/ pnpm build`.

## Checks and production build

```bash
pnpm typecheck
pnpm build
pnpm preview
```

The production files are written to `dist/`. `pnpm preview` serves that
directory locally after a build.

The enquiry form is currently a presentation flow: it validates the required
fields and shows a confirmation state, but it does not send submissions to an
inbox or other service. Connect a form endpoint before launch.