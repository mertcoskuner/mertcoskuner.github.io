import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { rehypeExternalLinks } from "./src/lib/links.js";

export default defineConfig({
  site: "https://mertcoskuner.github.io",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeExternalLinks],
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
    },
  },
});
