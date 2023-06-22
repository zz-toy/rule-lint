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
pnpm i -D editorconfig prettier
```

```shell
pnpm i -D eslint

pnpm i -D stylelint stylelint-config-standard-scss stylelint-config-recess-order

pnpm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript

pnpm i -D vue-eslint-parser vue

pnpm i -D husky

pnpm i -D lint-staged

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
pnpm pkg set scripts.prepare="husky install"
pnpm prepare
npx husky add .husky/pre-commit "自定义命令"
```

# lint-staged
只校验修改的代码

# stylelint