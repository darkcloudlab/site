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
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
