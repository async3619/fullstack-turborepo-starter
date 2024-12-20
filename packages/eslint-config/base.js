import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import turboPlugin from 'eslint-plugin-turbo'
import tseslint from 'typescript-eslint'
import onlyWarn from 'eslint-plugin-only-warn'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import importPlugin from 'eslint-plugin-import'
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys'

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**'],
  },
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    rules: {
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  eslintPluginPrettierRecommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    files: ['**/*.{ts,mts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
          groups: [
            'external',
            'builtin',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '@repo/**',
              group: 'internal',
              position: 'before',
            },
          ],
        },
      ],
    },
  },
  {
    plugins: {
      'typescript-sort-keys': typescriptSortKeys,
    },
    rules: {
      'typescript-sort-keys/interface': 'warn',
      'typescript-sort-keys/string-enum': 'warn',
    },
  },
]
