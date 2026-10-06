import { defineConfig } from 'astro/config';

// Project repo (user.github.io/latent-notes): base must match the repo name.
// User site (user.github.io) or custom domain: remove base.
export default defineConfig({
  site: 'https://abinashstack.github.io',
  base: '/latent-notes',
});
