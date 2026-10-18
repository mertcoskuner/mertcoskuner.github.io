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
- Publications: `publications` in `src/data/site.js` (shown on the home page and on
  `/publications`, with BibTeX).
- Blog: one Markdown file per post in `src/content/blog/`; copy `_template.md`, which
  shows the front matter (`title`, `description`, `date`, `tags`, `lang`, `draft`) and the
  supported syntax: code blocks, `$...$` / `$$...$$` math, footnotes, tables and images.
  The file name is the URL (`/blog/<file-name>/`). Drafts appear only in `npm run dev`;
  set `draft: false` and push to publish. Posts are also listed in `/rss.xml`.
- Project figures: `public/images/projects/`.
- Light and dark themes follow the system setting and can be switched in the header.

Code under the MIT License; text and figures © Mert Coşkuner.
