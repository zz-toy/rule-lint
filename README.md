# rule-lint
前端规范模板，存放各种lint
[npm package](https://www.npmjs.com/)

# editorconfig
```shell
pnpm i -D editorconfig
```
# prettier
```shell
pnpm i -D prettier
```

# eslint
[Eslint](https://eslint.org/)

[typescript-eslint](https://typescript-eslint.io/getting-started)

```shell
pnpm i -D eslint
pnpm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript
pnpm i -D vue-eslint-parser vue
```

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
[stylelint npm](https://www.npmjs.com/package/stylelint)

[stylelint](https://stylelint.io/)
```shell
pnpm i -D stylelint stylelint-config-standard-scss stylelint-config-recess-order

```
# commitlint
[commitlint](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)
```shell
pnpm i --save-dev @commitlint/{config-conventional,cli}
```
# release-it
```shell
pnpm i -D release-it

pnpm i @release-it/conventional-changelog -D
```
# husky
[husky](https://www.npmjs.com/package/husky)
```shell
pnpm i -D husky
```

# lint-staged
[lint-staged](https://www.npmjs.com/package/lint-staged)
```shell
pnpm i -D lint-staged
```