import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs', // or 'dist'
  },
  base: './', // Base path for GitHub Pages
});
