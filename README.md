# spec

eslint/stylelint/...

## Install

```
$ npm i --save-dev @ice/spec
```

## Usage

### eslint

in `.eslintrc.js`

```js
import { eslint } from '@ice/spec';

module.exports = eslint;
```

### stylelint

in `.stylelint.js`

```js
import { stylelint } from '@ice/spec';

module.exports = stylelint;
```

### prettier

in `.prettierrc.js`

```js
import { prettier } from '@ice/spec';

module.exports = prettier;
```