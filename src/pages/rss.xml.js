import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("writing", ({ data }) => !data.draft);
  return rss({
    title: "Mert Coşkuner · Writing",
    description: "Notes on machine learning research.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/writing/${post.id}/`,
    })),
  });
}
