import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import globals from 'globals'

// /** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'never'],

      'object-curly-spacing': ['error', 'always'],
      'operator-linebreak': ['error', 'after'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'eol-last': ['error', 'always'],

      'import/prefer-default-export': 'off',
      'import/no-unresolved': 'error',

      'no-param-reassign': ['error', { props: true }],

      'no-plusplus': 'off',

      'function-paren-newline': ['error', 'consistent'],
    },
    ignores: ['**/node_modules/**', '**/dist/**'],
  },
]
