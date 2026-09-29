// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://Shubh2018.github.io",
  base: "/dev-portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
