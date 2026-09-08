import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  site: 'https://webdevmy.com',
  i18n: {
    defaultLocale: 'ms',
    locales: ['ms', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
