import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  publicDir: 'src/public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.jsx',
    },
  },
  server: {
    port: 3000,
  },
  plugins: [
    react({
      include: '**/*.jsx',
    }),
    createHtmlPlugin({
      entry: '/index.jsx',
      template: '/public/index.html',
      minify: true,
    }),
    svgr(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', 'src'],
    alias: {
      '@src': path.resolve(__dirname, './src'),
      // '@FormationHelper': './src/formation_helper',
      // '@Shared': './src/shared',
    },
  },
});
