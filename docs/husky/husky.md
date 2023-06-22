# husky
提交代码前校验
- yarn add -D husky
- package.json文件中添加
```shell
pnpm pkg set scripts.prepare="husky install"
pnpm prepare
npx husky add .husky/pre-commit "自定义命令"
```
# husky
[husky](https://www.npmjs.com/package/husky)
```shell
pnpm i -D husky
```
