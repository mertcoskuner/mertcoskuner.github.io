# mertcoskuner.github.io

Personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages by
the workflow in `.github/workflows/deploy.yml` on every push to `main`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

- Profile, research interests, projects, experience, teaching and education:
  `src/data/site.js`.
- Writing: Markdown files in `src/content/writing/` with `title`, `description`, `date`
  and `draft` front matter. Drafts are not built; the Writing section appears once a
  post is published.
- Project figures: `public/images/projects/`.
- Light and dark themes follow the system setting and can be switched in the header.

Code under the MIT License; text and figures © Mert Coşkuner.
