# spec

[![NPM version](https://img.shields.io/npm/v/@ice/spec.svg?style=flat)](https://npmjs.org/package/@ice/spec) [![Package Quality](https://npm.packagequality.com/shield/@ice%2Fspec.svg)](https://packagequality.com/#?package=@ice%2Fspec) [![build status](https://img.shields.io/travis/ice-lab/icespec.svg?style=flat-square)](https://travis-ci.com/ice-lab/spec) [![Test coverage](https://img.shields.io/codecov/c/github/ice-lab/spec.svg?style=flat-square)](https://codecov.io/gh/ice-lab/spec) [![NPM downloads](http://img.shields.io/npm/dm/@ice/spec.svg?style=flat)](https://npmjs.org/package/@ice/spec) [![David deps](https://img.shields.io/david/ice-lab/spec.svg?style=flat-square)](https://david-dm.org/ice-lab/spec)

Easy to use eslint/stylelint/prettier. And spec means specification.

## Features

- [x] eslint
- [x] stylelint
- [x] eslint support TypeScript
- [x] commitlint
- [ ] prettier

## Install

```bash
$ npm i --save-dev @ice/spec eslint stylelint @commitlint/cli
```

## Usage

### eslint [rules](/lib/eslint.js)

Create a `.eslintrc.js`

```js
const { eslint } = require('@ice/spec');

module.exports = eslint;
```

### eslint support TypeScript [rules](/lib/tslint.js)

Create a `.eslintrc.js`

```js
const { tslint } = require('@ice/spec');

module.exports = tslint;
```

### stylelint [rules](/lib/eslint.js)

in `.stylelint.js`

```js
const { stylelint } = require('@ice/spec');

module.exports = stylelint;
```

### commitlint [rules](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)

in `.commitlintrc.js`

```js
const { commitlint } = require('@ice/spec');

module.exports = commitlint;
```

## FAQ

### Custom config

```js
const { eslint, deepmerge } = require('@ice/spec');

module.exports = deepmerge(eslint, {
  rules: {
    // custom config
  },
});
```

### Error: Cannot find module 'eslint-plugin-foo'

Eslint is not yet supported having plugins as dependencies in shareable config. [issue](https://github.com/eslint/eslint/issues/3458). As a temporary solution, you need add the plugin to devDependencies in your project, like `npm i --save-dev eslint-plugin-jsx-a11y`.
