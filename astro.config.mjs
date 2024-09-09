import { defineConfig } from "astro/config";
// import rss from "@astrojs/rss";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.delomai.cl",
  integrations: [sitemap()],
});
