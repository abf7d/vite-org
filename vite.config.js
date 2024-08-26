import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { loadEnv } from 'vite'


export default ({ mode }) => {
const env = loadEnv(mode, process.cwd(), '')
return defineConfig({
  build: {
    outDir: 'docs', // or 'dist'
  },
  base: './', // Base path for GitHub Pages
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          baseUrl: env.APP_BASE_URL,
        },
      },
    }),
  ],
});

};