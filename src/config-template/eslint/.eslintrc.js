module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		parser: '@typescript-eslint/parser',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		es2021: true,
		es6: true,
		commonjs: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
		'plugin:prettier/recommended'
	],
	plugins: [],
	rules: {}
}
