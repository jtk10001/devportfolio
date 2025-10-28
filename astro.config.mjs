// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Set 'output' to 'static' for GitHub Pages
  output: 'static', 

  // Set 'site' to your custom domain
  site: 'https://jon-kaplan.com',
});
