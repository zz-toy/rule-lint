module.exports = {
  extends: [ './base', 'plugin:@typescript-eslint/recommended' ],
  plugins: [ '@typescript-eslint' ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
