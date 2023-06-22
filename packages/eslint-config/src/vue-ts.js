module.exports = {
  extends: [ './base', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended' ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: [ '*.vue' ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': [ 'error', 2 ],
  },
}
