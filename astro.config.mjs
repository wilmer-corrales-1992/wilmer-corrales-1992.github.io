// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://wilmer-corrales-1992.github.io",
  base: "/",
  output: "static", 
  
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [react()]
});
