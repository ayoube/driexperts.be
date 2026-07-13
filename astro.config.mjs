import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://driexperts.be',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
