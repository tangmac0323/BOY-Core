/* eslint-disable no-undef */
import path from 'path';
// import dotenvExpand from 'dotenv-expand';
import { loadEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let env;
  if (mode === 'development') {
    env = loadEnv(mode, process.cwd(), '');
  }
  const config = {
    // define: {
    //   __APP_ENV__: process.env.VITE_VERCEL_ENV,
    // },
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
  };

  if (mode === 'development') {
    config['define'] = {
      'process.env': env ? JSON.stringify(env) : null,
    };
  }

  console.log('env', process.env);

  return config;
});
