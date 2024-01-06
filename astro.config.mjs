import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://steady-scone-f67e05.netlify.app',
  integrations: [preact()]
});