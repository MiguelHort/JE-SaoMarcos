import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      globals: globals.browser,
    },
    plugins: {
      js,
      prettier: pluginPrettier,
    },
    rules: {
      semi: ['error', 'always'], // ⚠️ Requer ; no final
      'prettier/prettier': ['error', { semi: true }],
    },
    extends: [
      'js/recommended',
      ...tseslint.configs.recommended,
      ...prettierConfig, // Desativa regras conflitantes com Prettier
    ],
  },
  pluginReact.configs.flat.recommended,
]);
