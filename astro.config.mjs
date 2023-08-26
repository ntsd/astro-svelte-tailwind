import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import serviceWorker from "astrojs-service-worker";

// https://astro.build/config
export default defineConfig({
  site: "https://ntsd.github.io",
  base: "/astro-svelte-tailwind",
  output: "static",
  compressHTML: true,
  integrations: [
    tailwind(),
    svelte(),
    serviceWorker({
      registration: { autoRegister: false },
    }),
  ],
  vite: {
    plugins: [],
  },
});
