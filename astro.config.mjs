import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://driexperts.be',
  output: 'static',
  build: { assets: 'assets' },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'nl'],
    routing: { prefixDefaultLocale: false }
  }
});
