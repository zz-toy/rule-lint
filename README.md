# rule-lint
前端规范模板，存放各种lint

[npm package](https://www.npmjs.com/)
[husky npm](https://www.npmjs.com/package/husky)
[Eslint](https://eslint.org/)
[typescript-eslint](https://typescript-eslint.io/getting-started)

```shell
yarn add -D editorconfig prettier
```

```shell
yarn add -D eslint

yarn add -D stylelint

yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript

yarn add -D vue-eslint-parser vue

yarn add -D husky

```


# husky
- yarn add -D husky
- package.json文件中添加
```shell
npm pkg set scripts.prepare="husky install"
yarn prepare
npx husky add .husky/pre-commit "自定义命令"
```