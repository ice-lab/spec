# @ice/spec

在 [ice](https://ice.work/) 和 React 项目中轻松使用 **eslint**（支持 TypeScript）、**stylelint**、**prettier** 和 **commitlint** 规范。

## 安装

```bash
$ npm i --save-dev @ice/spec eslint stylelint prettier @commitlint/cli
```

注意：你不需要安装其他 eslint 插件和解析器。

## 使用

### ESLint

> 注意：从 @ice/spec 2.0.0 开始，需要保证 eslint >= 8.21（支持扁平化配置）

#### 1. 创建配置文件

首先创建一个 `eslint.config.js` 文件。然后编辑你的配置。

#### 2. 更新配置

```js
// eslint.config.js
import { getConfig } from '@ice/spec/eslint';

export default getConfig({});
```

`getConfig` 支持各种参数，列表如下：

| 参数            | 类型                                                   | 默认值  | 描述                                              |
| --------------- | ------------------------------------------------------ | ------- | ------------------------------------------------- |
| preset          | `'ice' \| 'pkg' \| 'spark-framework' \| 'spark-child'` | `'ice'` | 框架预设                                          |
| files           | `string[]`                                             | -       | 文件匹配模式                                      |
| prettier        | `boolean`                                              | `true`  | 启用 prettier 规则                                |
| react           | `boolean`                                              | `true`  | 启用 react 规则                                   |
| tsconfigRootDir | `string`                                               | -       | tsconfig 项目目录，用于启用类型检查规则           |
| jsxPlus         | `boolean`                                              | `false` | 启用 jsx-plus eslint 规则，仅在 eslint 8.x 中可用 |

### stylelint

#### 1. 创建配置文件

首先创建一个 `.stylelintrc.js` 文件。然后编辑你的配置。

#### 2. 更新配置

[rules](https://github.com/ice-lab/spec/tree/master/packages/spec/src/stylelint/react.js) 基于 [stylelint-config-ali](https://www.npmjs.com/package/stylelint-config-ali)

```js
const { getConfig } = require('@ice/spec/stylelint');

module.exports = getConfig();
```

### prettier

#### 1. 创建配置文件

首先创建一个 `.prettierrc.js` 文件。然后编辑你的配置。

#### 2. 更新配置

```js
import { getConfig } from '@ice/spec/prettier';

export default getConfig();
```

### commitlint

#### 1. 创建配置文件

首先创建一个 `.commitlintrc.js` 文件。然后编辑你的配置。

#### 2. 更新配置

```js
import { getConfig } from '@ice/spec/stylelint';

export default getConfig();
```

## 常见问题

### package.json 脚本

在你的 `package.json` 中添加 `scripts`，示例：

```json
"scripts": {
  "lint": "npm run eslint && npm run stylelint",
  "eslint": "eslint --cache --ext .js,.jsx,.ts,.tsx ./",
  "stylelint": "stylelint ./**/*.scss",
  "prettier": "prettier **/* --write"
}
```

然后使用 `npm run lint` 检查你的项目，使用 `npm run prettier` 更新你的代码。

### 提交前自动格式化并检查

利用 [husky](https://www.npmjs.com/package/husky) 和 [lint-staged](https://www.npmjs.com/package/lint-staged) 分别实现 Git Hooks 代理以及变更文件列表。

安装 husky 及 lint-staged 依赖：

```bash
npm install --save-dev husky lint-staged
```

然后参考官网文档安装并配置 husky/lint-staged，主要是要修改 scripts 以及触发脚本的修改。

其中 lint-staged 的触发配置如下：

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix"],
    "*.{scss,less,css}": ["stylelint --fix", "prettier --write"],
    "*.{md,json}": ["prettier --write"]
  }
}
```

这样配置后，在每次提交时，lint-staged 会自动对暂存区的文件运行指定的检查和格式化命令。

> 当然如果你希望全量检查而不是仅仅针对变更文件变化，可以只使用 husky 而非 lint-staged
