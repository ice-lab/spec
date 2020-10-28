# @iceworks/spec

Easy to use **eslint**(support TypeScript) / **stylelint** / **prettier** / **commitlint** in [rax](https://rax.js.org/), [ice](https://ice.work/) and react project. And spec means specification.

## Install

```bash
$ npm i --save-dev @iceworks/spec eslint stylelint prettier @commitlint/cli
```

PS: You don't need to install other eslint plugins and parsers.

## Usage

### ESLint

#### 1. Create configuration file

First create a `.eslintrc.js` file. Then edit your config.

#### 2. Update config

[rules](./src/eslint/react.js) base on [eslint-config-ali](https://www.npmjs.com/package/eslint-config-ali) and [@iceworks/eslint-plugin-best-practices](https://www.npmjs.com/package/@iceworks/eslint-plugin-best-practices).

```js
// .eslintrc.js
const { getESLintConfig } = require('@iceworks/spec');

// getESLintConfig(rule: 'rax'|'react', customConfig?);
module.exports = getESLintConfig('react');
```

### stylelint

#### 1. Create configuration file

First create a `.stylelintrc.js` file. Then edit your config.

#### 2. Update config

[rules](./src/stylelint/react.js) base on [stylelint-config-ali](https://www.npmjs.com/package/stylelint-config-ali)

```js
// .stylelintrc.js
const { getStylelintConfig } = require('@iceworks/spec');

// getStylelintConfig(rule: 'rax'|'react', customConfig?);
module.exports = getStylelintConfig('react');
```

### prettier [rules](./src/prettier/react.js)

#### 1. Create configuration file

First create a `.prettierrc.js` file. Then edit your config.

#### 2. Update config

```js
// .prettierrc.js
const { getPrettierConfig } = require('@iceworks/spec');

// getPrettierConfig(rule: 'rax'|'react', customConfig?);
module.exports = getPrettierConfig('react');
```

### commitlint

#### 1. Create configuration file

First create a `.commitlintrc.js` file. Then edit your config.

#### 2. Update config

[rules](./src/commitlint/react.js) base on [commitlint-config-ali](https://www.npmjs.com/package/commitlint-config-ali)

```js
// .commitlintrc.js
const { getCommitlintConfig } = require('@iceworks/spec');

// getCommitlintConfig(rule: 'rax'|'react', customConfig?);
module.exports = getCommitlintConfig('react');
```

## FAQ

### Custom config

```js
// .eslintrc.js
const { getESLintConfig } = require('@iceworks/spec');

// getESLintConfig(rule: 'rax'|'react', customConfig?);
module.exports = getESLintConfig('rax', {
  // custom config it will merge into main config
  rules: {
    // ...
  },
});
```

### package.json scripts

Add `scripts` in your `package.json`, example: 
```json
"scripts": {
  "lint": "npm run eslint && npm run stylelint",
  "eslint": "eslint --cache --ext .js,.jsx,ts,tsx ./",
  "stylelint": "stylelint ./**/*.scss",
  "prettier": "prettier **/* --write"
}
```

Then use `npm run lint` check your project, ues `npm run prettier` update your code.

### Git hooks

To lint commits before they are created you can use Husky's Git hook.

Install in your project `npm install husky --save-dev` or `yarn add -D husky`.

After that, you can add to your` package.json` the following code:

```json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
    "pre-push": "npm run lint"
  }
}
```

* `commit-msg`: check commit message
* `pre-push`: run scripts when push

### Update from @ice/spec

If you are using [@ice/spce](https://www.npmjs.com/package/@ice/spec) in your project, we recommend use `@iceworks/spec` to get better maintainability and faster response to lint rules support.

Based on `@iceworks/spec`'s simple API you can quickly migrate your project,  install and update your lint config file, the mission  is completed 😁.

## Run Test

```
npm run test
```

run test for specific component

```
npm run test -- packages/spec
```

## Run Prettier

```
npm run prettier
```

## Run Lint

```
npm run lint
```
