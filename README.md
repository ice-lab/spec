# spec

eslint/stylelint/prettier config.

## Features

- [x] eslint
- [x] stylelint
- [ ] prettier
- [ ] eslint support TypeScript

## Install

```bash
$ npm i --save-dev @ice/spec eslint stylelint
```

## Usage

### eslint

Create a `.eslintrc.js`

```js
const { eslint } = require('@ice/spec');

module.exports = eslint;
```

### stylelint

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