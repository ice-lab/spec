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

##### JavaScript + [rax](https://rax.js.org/), [ice](https://ice.work/) and react

[rules](https://github.com/ice-lab/spec/tree/master/packages/spec/src/eslint/react.js) base on [eslint-config-ali](https://www.npmjs.com/package/eslint-config-ali) and [@iceworks/eslint-plugin-best-practices](https://www.npmjs.com/package/@iceworks/eslint-plugin-best-practices).

```js
// .eslintrc.js
const { getESLintConfig } = require('@iceworks/spec');

// getESLintConfig(rule: 'common'|'rax'|'react'|'vue' , customConfig?);
module.exports = getESLintConfig('common');
```

##### TypeScript + [rax](https://rax.js.org/), [ice](https://ice.work/) and react

[rules](https://github.com/ice-lab/spec/tree/master/packages/spec/src/eslint/react-ts.js) base on [eslint-config-ali](https://www.npmjs.com/package/eslint-config-ali) and [@iceworks/eslint-plugin-best-practices](https://www.npmjs.com/package/@iceworks/eslint-plugin-best-practices).

```js
// .eslintrc.js
const { getESLintConfig } = require('@iceworks/spec');

// getESLintConfig(rule: 'common-ts'|'rax-ts'|'react-ts'|'vue-ts', customConfig?);
module.exports = getESLintConfig('common-ts');
```

### stylelint

#### 1. Create configuration file

First create a `.stylelintrc.js` file. Then edit your config.

#### 2. Update config

[rules](https://github.com/ice-lab/spec/tree/master/packages/spec/src/stylelint/react.js) base on [stylelint-config-ali](https://www.npmjs.com/package/stylelint-config-ali)

```js
// .stylelintrc.js
const { getStylelintConfig } = require('@iceworks/spec');

// getStylelintConfig(rule: 'common'|'rax'|'react'|'vue', customConfig?);
module.exports = getStylelintConfig('react');
```

### prettier [rules](https://github.com/ice-lab/spec/tree/master/packages/spec/src/prettier/react.js)

#### 1. Create configuration file

First create a `.prettierrc.js` file. Then edit your config.

#### 2. Update config

```js
// .prettierrc.js
const { getPrettierConfig } = require('@iceworks/spec');

// getPrettierConfig(rule: 'common'|'rax'|'react'|'vue', customConfig?);
module.exports = getPrettierConfig('react');
```

### commitlint

#### 1. Create configuration file

First create a `.commitlintrc.js` file. Then edit your config.

#### 2. Update config

[rules](https://github.com/ice-lab/spec/tree/master/packages/spec/src/commitlint/react.js) base on [commitlint-config-ali](https://www.npmjs.com/package/commitlint-config-ali)

```js
// .commitlintrc.js
const { getCommitlintConfig } = require('@iceworks/spec');

// getCommitlintConfig(rule: 'common'|'rax'|'react'|'vue', customConfig?);
module.exports = getCommitlintConfig('react');
```

## FAQ

### Custom config

```js
// .eslintrc.js
const { getESLintConfig } = require('@iceworks/spec');

// getESLintConfig(rule: 'common'|'rax'|'react'|'vue', customConfig?);
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
  "eslint": "eslint --cache --ext .js,.jsx,.ts,.tsx ./",
  "stylelint": "stylelint ./**/*.scss",
  "prettier": "prettier **/* --write"
}
```

Then use `npm run lint` check your project, ues `npm run prettier` update your code.

### Git hooks

To lint commits before they are created you can use Husky's Git hook.

Install in your project `npm install husky --save-dev` or `yarn add -D husky`.

After that, we recommend you to see [husky docs](https://www.npmjs.com/package/husky), then create "`commit-msg`" and "`pre-commit`" config.

### Update from @ice/spec

If you are using [@ice/spce](https://www.npmjs.com/package/@ice/spec) in your project, we recommend use `@iceworks/spec` to get better maintainability and faster response to lint rules support.

Based on `@iceworks/spec`'s simple API you can quickly migrate your project, install and update your lint config file, the mission is completed 😁.

### Error: Cannot find module 'eslint-plugin-foo'

Eslint is not yet supported having plugins as dependencies in shareable config. [issue](https://github.com/eslint/eslint/issues/3458). As a temporary solution, you need add the plugin to devDependencies in your project, like `npm i --save-dev eslint-plugin-jsx-a11y`.

### Error: The file does not match your project config

TypeScript project run lint file when see this error, you can update your `tsconfig.json`.

update `src/*` to `src/**/*`:

```json
{
  "include": ["src/**/*"]
}
```

[CHANGELOG](https://github.com/ice-lab/spec/blob/master/CHANGELOG.md)

Enjoy!
