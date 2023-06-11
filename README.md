# rule-lint
前端规范模板，存放各种lint

[npm package](https://www.npmjs.com/)

[husky](https://www.npmjs.com/package/husky)

[stylelint npm](https://www.npmjs.com/package/stylelint)

[stylelint](https://stylelint.io/)

[lint-staged](https://www.npmjs.com/package/lint-staged)

[Eslint](https://eslint.org/)

[typescript-eslint](https://typescript-eslint.io/getting-started)

```shell
yarn add -D editorconfig prettier
```

```shell
yarn add -D eslint

yarn add -D stylelint stylelint-config-standard-scss stylelint-config-recess-order

yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript

yarn add -D vue-eslint-parser vue

yarn add -D husky

yarn add -D lint-staged

```
# editorconfig

# prettier

# eslint
校验代码

# husky
提交代码前校验
- yarn add -D husky
- package.json文件中添加
```shell
npm pkg set scripts.prepare="husky install"
yarn prepare
npx husky add .husky/pre-commit "自定义命令"
```

# lint-staged
只校验修改的代码

# stylelint