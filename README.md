<h3 align="center">Portfolio Website - Astro</h3>

<p align="center">
    <a href="https://github.com/MrOlivo/mrolivo.github.io/actions/workflows/deploy.yml"><img src="https://img.shields.io/github/actions/workflow/status/MrOlivo/mrolivo.github.io/deploy.yml?colorA=363a4f&colorB=b7bdf8&style=for-the-badge" alt="Deploy to GitHub Pages"></a>
    <a href="https://github.com/MrOlivo/mrolivo.github.io/issues"><img src="https://img.shields.io/github/issues/MrOlivo/mrolivo.github.io?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
    <a href="https://github.com/MrOlivo/mrolivo.github.io/contributors"><img src="https://img.shields.io/github/contributors/MrOlivo/mrolivo.github.io?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

## portfolio template for Developers!

![Feature Image](./public/assets/images/astro-portfolio.png)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   ├── assets
│   │   ├── fonts
|   |   └── images
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── home/
|   |   └── general/
|   |       ├── Header.astro
|   |       ├── Footer.astro
|   |       └── ...
│   ├── data/
│   ├── layouts/
│   |   |── Layout.astro
│   |   └── ...
│   ├── pages/
│   |   ├── peojects.astro
│   |   ├── index.astro
│   ├── styles/
│   |   |── custom-styles.css
│   |   |── fonts.css
│   |   └── styles.css
│   ├── types/
│   ├── utils/
├── package.json
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/assets` directory.

Your personal data would be go on `src/data` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`          | Installs dependencies                            |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`      |
| `pnpm run build`        | Build your production site to `./dist/`          |
| `pnpm run preview`      | Preview your build locally, before deploying     |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or jump into Astro [Discord server](https://astro.build/chat).
