import { getCollection } from "astro:content";

/** Published posts, newest first; drafts are included only in `astro dev`. */
export async function getPosts() {
  const posts = await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Minutes to read the Markdown body, code blocks excluded. */
export function readingTime(body = "") {
  const words = body.replace(/```[\s\S]*?```/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export const formatDate = (date, options = { day: "numeric", month: "short", year: "numeric" }) =>
  date.toLocaleDateString("en-GB", { ...options, timeZone: "UTC" });
