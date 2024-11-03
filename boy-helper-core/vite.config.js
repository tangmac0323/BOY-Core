import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  // root: 'src',
  // publicDir: 'src/public',
  build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      input: '/index.html', // Path to your HTML file in the project root

      // external: [
      //   '@src/raw_data/formations.json',
      //   '@src/raw_data/heroes.json',
      // ],
    },
  },
  preview: {
    port: 4173,
  },
  server: {
    // historyApiFallback: true,
    port: 3000,
  },
  plugins: [
    react({
      include: '**/*.jsx',
    }),
    createHtmlPlugin({
      entry: '/src/index.jsx',
      template: '/index.html',
      minify: true,
    }),
    svgr(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', 'src'],
    alias: {
      '@src': path.resolve('./src'),
    },
  },
  base: '/',
});
