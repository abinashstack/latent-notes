import { defineConfig } from 'astro/config';

// Defaults serve from the site root (Cloudflare Pages, custom domain).
// The GitHub Pages workflow sets BASE_PATH=/latent-notes and SITE_URL.
export default defineConfig({
  site: process.env.SITE_URL || 'https://latent-notes.abinash-gogoi55.workers.dev',
  base: process.env.BASE_PATH || '/',
});
