/** @type {import('eslint').Linter.Config} */
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  globals: {
    process: true,
    React: true,
    JSX: true,
    global: true,
    Action: true,
    setImmediate: true,
    Buffer: true,
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  ignorePatterns: ['dist'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
        parser: 'typescript',
        tabWidth: 2,
        printWidth: 90,
      },
    ],
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-explicit-any': 'error',
    'no-console': 1,
    'react-hooks/exhaustive-deps': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-undef': 'error',
    'no-empty': 'error',
    'no-var': 'error',
    'react/display-name': 'off',
  },
  settings: {
    react: {
      fragment: 'Fragment',
      version: 'detect',
    },
  },
};
