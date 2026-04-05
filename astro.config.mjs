import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://chaoswithclarity.com',
  integrations: [tailwind()],
  output: 'static',
  adapter: cloudflare(),
});
