module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: [
    'svelte3',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    semi: ['error', 'always'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'space-before-blocks': ['error', 'always'],
    'arrow-spacing': 'error',
    'max-len': ['error', { code: 100, ignoreComments: true, ignoreStrings: true }],
    'no-trailing-spaces': 'error',

    'no-const-assign': 'error',
    'no-class-assign': 'error',
    'no-this-before-super': 'error',
    'no-unreachable': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', { destructuring: 'all' }],
    'one-var': ['error', 'never'],
    'no-inner-declarations': 'off',
  },
};
