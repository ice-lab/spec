# spec

eslint/stylelint/...

## Features

- [x] eslint
- [x] stylelint
- [ ] prettier
- [ ] eslint support TypeScript

## Install

```bash
$ npm i --save-dev @ice/spec
```

You don't need dep eslint/stylelint/eslin-plugin-*/... in your project.

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