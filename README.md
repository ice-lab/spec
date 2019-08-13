# spec

eslint/stylelint/prettier config.

## Features

- [x] eslint
- [x] stylelint
- [ ] prettier
- [x] eslint support TypeScript

## Install

```bash
$ npm i --save-dev @ice/spec eslint stylelint
```

## Usage

### eslint [rules](/lib/eslint.js) 

Create a `.eslintrc.js`

```js
const { eslint } = require('@ice/spec');

module.exports = eslint;
```

### eslint support TypeScript [rules](/lib/eslintTS.js) 

Create a `.eslintrc.js`

```js
const { eslintTS } = require('@ice/spec');

module.exports = eslintTS;
```

### stylelint [rules](/lib/eslint.js) 

in `.stylelint.js`

```js
const { stylelint } = require('@ice/spec');

module.exports = stylelint;
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
