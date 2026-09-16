# Little Landmark

A personal portfolio site for selling custom website design to small businesses. Built with React, TypeScript, Vite, Tailwind CSS, and Lucide icons.

The site embeds two full, working demo builds so prospective clients can try a real site before hiring:

- **FORMA Studio** — a fictional LA hair salon, with a full appointment-booking flow.
- **Cielo Street Kitchen** — a fictional street-food restaurant, with a menu and online ordering flow.

Both demos live in `demos/forma` and `demos/cielo` (mirrored from the sibling `../src` and `../cielo-street-kitchen/src` projects) and are built as standalone static sites served at `/demos/forma/` and `/demos/cielo/`.

## Run

Use Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

`npm run dev` and `npm run build` both build the two demo sites first (`scripts/build-demos.mjs`) into `public/demos/`, then run Vite for the main site. Open the localhost URL Vite prints.

## Build and deploy

```sh
npm run build
npm run preview
```

Deploy `dist/` to a static host such as Netlify, Vercel, GitHub Pages, or Cloudflare Pages. Use the Vite preset, `npm run build` as the build command, and `dist` as the output directory. The demo builds are copied into `dist/demos/` automatically, so no extra configuration is needed.

## Updating a demo

If `../src` (FORMA) or `../cielo-street-kitchen/src` (Cielo) changes, copy the updated files into `demos/forma/src` or `demos/cielo/src` before rebuilding, so the embedded demo stays in sync.

## Source organization

- `src/main.tsx`: all page sections (hero, portfolio, services, process, about/FAQ, contact) and interactions.
- `src/data.ts`: portfolio case studies, services, process steps, and FAQ content.
- `src/styles.css`: layout, design tokens, and responsive rules.
- `public/images/`: portfolio screenshots for the two demo builds.
- `demos/`: standalone copies of the FORMA and Cielo source, built independently and served under `/demos/<name>/`.

## Contact

- Email: alleg8torr@gmail.com
- Phone: +1 (213) 755-7788

The contact form opens the visitor's email client with a prefilled message via a `mailto:` link — there is no backend or form submission service.
