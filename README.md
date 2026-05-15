# Site

Astro-based marketing site with a “PNW overcast” brand system (graphite, fog neutrals, rainy-blue accent).

## 🚀 Project Structure

Key folders:

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Section.astro
│   │   └── CapabilityGrid.astro
│   ├── content/
│   │   └── site.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Edit content in `src/content/site.ts`. The homepage composes sections in `src/pages/index.astro`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`    | Get help using the Astro CLI                     |
