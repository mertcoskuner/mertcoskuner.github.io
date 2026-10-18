/** Attributes that open off-site links in a new tab. */
export const external = (href) =>
  /^https?:\/\//.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};

/** Rehype plugin: off-site links in Markdown open in a new tab. */
export function rehypeExternalLinks() {
  const visit = (node) => {
    if (node.type === "element" && node.tagName === "a") {
      Object.assign(node.properties, external(String(node.properties?.href ?? "")));
    }
    node.children?.forEach(visit);
  };
  return visit;
}
