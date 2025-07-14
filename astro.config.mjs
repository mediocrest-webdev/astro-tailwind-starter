import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import astroIcon from 'astro-icon';
import autoImport from 'astro-auto-import';
import swup from '@swup/astro';

export default defineConfig({
  site: 'https://www.yourprojectdomain.com', // 🔁 Replace with your real domain
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt({
      policy: [{ userAgent: '*', allow: '/' }],
      sitemap: 'https://www.yourprojectdomain.com/sitemap-index.xml',
    }),
    astroIcon(),
    autoImport(),
    swup(),
  ],
});
