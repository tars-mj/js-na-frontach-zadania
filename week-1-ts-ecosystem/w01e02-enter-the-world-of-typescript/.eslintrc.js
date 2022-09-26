module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.d.ts'],
      },
    },
  },
  env: {
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    'import/prefer-default-export': 0,
  },
};
