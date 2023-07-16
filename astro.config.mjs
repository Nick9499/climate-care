import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://Nick9499.github.io",
  base: "/climate-care",
  integrations: [tailwind()],
});
