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

  // inject Psogres ENV
  const injectedEnv = {};

  injectedEnv[`process.env.POSTGRES_DATABASE`] = JSON.stringify(
    env.POSTGRES_DATABASE
  );

  injectedEnv[`process.env.POSTGRES_HOST`] = JSON.stringify(env.POSTGRES_HOST);
  injectedEnv[`process.env.POSTGRES_PASSWORD`] = JSON.stringify(
    env.POSTGRES_PASSWORD
  );
  injectedEnv[`process.env.POSTGRES_USER`] = JSON.stringify(env.POSTGRES_USER);
  injectedEnv[`process.env.POSTGRES_PRISMA_URL`] = JSON.stringify(
    env.POSTGRES_PRISMA_URL
  );
  injectedEnv[`process.env.POSTGRES_URL_NO_SSL`] = JSON.stringify(
    env.POSTGRES_URL_NO_SSL
  );
  injectedEnv[`process.env.POSTGRES_URL_NON_POOLING`] = JSON.stringify(
    env.POSTGRES_URL_NON_POOLING
  );
  injectedEnv[`process.env.POSTGRES_UR`] = JSON.stringify(env.POSTGRES_UR);

  const config = {
    // root: 'src',
    // publicDir: 'src/public',
    build: {
      define: injectedEnv,
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

  return config;
});
