# @ice/spec

> `@iceworks/spec` is not maintained anymore and rename it back to `@ice/spec`.
> You can switch branch to [`iceworks-legacy`]() for view `@iceworks/spec`.

Easy to use **eslint**(support TypeScript) / **stylelint** / **prettier** / **commitlint** in [ice](https://v3.ice.work/) and react project. And spec means specification.

## Install

```bash
$ npm i -D @ice/spec eslint stylelint prettier @commitlint/cli
```

You don't need to install other eslint plugins and parsers.

## Usage

### ESLint

> From `2.0.0`, we only support flat config in eslint.

#### 1. Create configuration file

First create a `esling.config.mjs` file. Then edit your config.

#### 2. Update config

For `ice` project:

```javascript
import eslint from '@ice/spec/eslint';

export default eslint.getConfig({
  preset: 'ice',
});
```

For `@ice/pkg` project:

```javascript
import eslint from '@ice/spec/eslint';
export default eslint.getConfig({
  preset: 'ice-pkg',
});
```

### stylelint

#### 1. Create configuration file

First create a `.stylelintrc.js` file. Then edit your config.

#### 2. Update config

[rules](https://github.com/ice-lab/spec/tree/master/packages/spec/src/stylelint/react.js) base on [stylelint-config-ali](https://www.npmjs.com/package/stylelint-config-ali)

```js
// .stylelintrc.js
const { getStylelintConfig } = require('@ice/spec/stylelint');

// getStylelintConfig(rule: 'common'|'rax'|'react'|'vue', customConfig?);
module.exports = getStylelintConfig('react');
```

### prettier [rules](https://github.com/ice-lab/spec/tree/master/packages/spec/src/prettier/react.js)

#### 1. Create configuration file

First create a `.prettierrc.js` file. Then edit your config.

#### 2. Update config

```js
// .prettierrc.js
import { config } from '@ice/spec/prettier';

export default config;
```

### commitlint

#### 1. Create configuration file

First create a `.commitlintrc.js` file. Then edit your config.

#### 2. Update config

[rules](https://github.com/ice-lab/spec/tree/master/packages/spec/src/commitlint/react.js) base on [commitlint-config-ali](https://www.npmjs.com/package/commitlint-config-ali)

```js
// .commitlintrc.js
const { getCommitlintConfig } = require('@ice/spec/commitlint');

// getCommitlintConfig(rule: 'common'|'rax'|'react'|'vue', customConfig?);
module.exports = getCommitlintConfig('react');
```

## FAQ

### package.json scripts

Add `scripts` in your `package.json`, example:

```json
{
  "scripts": {
    "lint": "npm run eslint && npm run stylelint",
    "eslint": "eslint --cache --ext .js,.jsx,.ts,.tsx ./",
    "stylelint": "stylelint ./**/*.scss",
    "prettier": "prettier **/* --write"
  }
}
```

Then use `npm run lint` check your project, ues `npm run prettier` update your code.

### Git hooks

To lint commits before they are created you can use Husky's Git hook.

Install in your project `npm install husky --save-dev` or `yarn add -D husky`.

After that, we recommend you to see [husky docs](https://www.npmjs.com/package/husky), then create "`commit-msg`" and "`pre-commit`" config.

### Update from @ice/spec

If you are using [@ice/spec](https://www.npmjs.com/package/@ice/spec) in your project, we recommend use `@iceworks/spec` to get better maintainability and faster response to lint rules support.

Based on `@iceworks/spec`'s simple API you can quickly migrate your project, install and update your lint config file, the mission is completed 😁.

[CHANGELOG](https://github.com/ice-lab/spec/blob/master/CHANGELOG.md)

Enjoy!

### What the relation between linter and formatter

Linter is a tool that checks your code for potential errors.
Formatter is a tool that just formats your code.

In `@ice/spec`, We use eslint as linter and prettier as formatter.
We think it's a good choice compare with that only using eslint as linter and formatter.

And we choose eslint as the entry of linter and formatter.
