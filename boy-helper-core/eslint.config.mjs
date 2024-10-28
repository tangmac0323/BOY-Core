import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  // {
  //   rules: {
  //     'react/prop-types': 'off', // If you aren't using prop types
  //     'prettier/prettier': 'error', // Ensures Prettier formatting is enforced
  //     'import/no-unresolved': 'error',
  //     'react/react-in-jsx-scope': 'off',
  //     'react/jsx-uses-react': 'off',
  //   },
  // },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off', // If you aren't using prop types
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@rc', './src']],
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add more if needed
      },
    },
    pluginS: ['import'],
  },

  // {
  //   extends: ['plugin:react/jsx-runtime'],
  // },
];
