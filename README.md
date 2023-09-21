<h1 align="center">Portfolio Website - Made with Astro</h1>

<p align="center">
    <a href="https://github.com/MrOlivo/mrolivo.github.io/actions/workflows/deploy.yml">
        <img src="https://img.shields.io/github/actions/workflow/status/MrOlivo/mrolivo.github.io/deploy.yml?style=for-the-badge&labelColor=363a4f&color=b7bdf8" alt="Deploy to GitHub Pages">
    </a>
    <a href="https://github.com/MrOlivo/mrolivo.github.io/issues">
        <img src="https://img.shields.io/github/issues/MrOlivo/mrolivo.github.io?style=for-the-badge&labelColor=363a4f&color=f5a97f">
    </a>
    <a href="https://github.com/MrOlivo/mrolivo.github.io/contributors">
        <img src="https://img.shields.io/github/contributors/MrOlivo/mrolivo.github.io?style=for-the-badge&labelColor=363a4f&color=a6da95">
    </a>
</p>

## Portfolio template for developers!

![Feature Image](./public/assets/images/astro-portfolio.png)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── .devcontainer
│  └── devcontainer.json
├── .github
│  └── workflows
│    └── deploy.yml
├── .gitignore
├── .npmrc
├── .vscode
│  ├── extensions.json
│  └── launch.json
├── astro.config.mjs
├── LICENSE
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── public
│  ├── android-chrome-192x192.png
│  ├── android-chrome-384x384.png
│  ├── apple-touch-icon.png
│  ├── assets
│  │  └── images
│  │    ├── astro-portfolio.avif
│  │    ├── astro-portfolio.png
│  │    ├── astro-portfolio.webp
│  │    ├── brutalism.avif
│  │    ├── brutalism.png
│  │    ├── brutalism.webp
│  │    ├── manga-calendar.avif
│  │    ├── manga-calendar.png
│  │    ├── manga-calendar.webp
│  │    └── profile.png
│  ├── browserconfig.xml
│  ├── favicon-16x16.png
│  ├── favicon-32x32.png
│  ├── favicon.ico
│  ├── mstile-150x150.png
│  ├── safari-pinned-tab.svg
│  └── site.webmanifest
├── README.md
├── src
│  ├── assets
│  │  ├── bento.svg
│  │  ├── email.svg
│  │  ├── github.svg
│  │  ├── index.ts
│  │  ├── link.svg
│  │  ├── moon.svg
│  │  └── sun.svg
│  ├── components
│  │  ├── Footer.astro
│  │  ├── home
│  │  │  ├── Experience.astro
│  │  │  └── Hero.astro
│  │  ├── LinkItem.astro
│  │  ├── MetaHead.astro
│  │  ├── Navbar.astro
│  │  ├── NavItem.astro
│  │  ├── ProjectCard.astro
│  │  ├── Projects.astro
│  │  ├── Section.astro
│  │  └── Skills.astro
│  ├── data
│  │  ├── data.json
│  │  └── index.ts
│  ├── env.d.ts
│  ├── layouts
│  │  └── Layout.astro
│  ├── pages
│  │  └── index.astro
│  ├── styles
│  │  ├── gradient.css
│  │  └── style.css
│  ├── types
│  │  └── index.ts
│  └── utils
│    └── index.ts
├── tailwind.config.cjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/assets` directory.

Your personal data would be go on `src/data` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                           |
| :---------------------- | :----------------------------------------------- |
| `pnpm install`          | Installs dependencies                            |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`      |
| `pnpm run build`        | Build your production site to `./dist/`          |
| `pnpm run preview`      | Preview your build locally, before deploying     |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or jump into Astro [Discord server](https://astro.build/chat).
