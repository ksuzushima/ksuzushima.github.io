// @ts-check

import eslint from '@eslint/js';
import gitignore from 'eslint-config-flat-gitignore';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  gitignore(),
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,mts,cts,astro}'],
    rules: {
      'no-undef': 'off',
    },
  },
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
);
