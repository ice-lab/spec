# spec

eslint/stylelint/...

## Install

```
$ npm i --save-dev @ice/spec
```

## Usage

### eslint

1. Install the correct versions of each package, which are listed by the command:

```bash
npm info @ice/spec peerDependencies
```

If using npm 5+, use this shortcut

```bash
npx install-peerdeps --dev @ice/spec
```

2. Create a `.eslintrc.js`

```js
const { eslint } = require('@ice/spec');

module.exports = eslint;
```

3. Enabling ESLint on TS files in VSCode (Optional)

by default the ESLint plugin only runs on javascript and javascriptreact files. To tell it to run on TS files, you need to update the eslint.validate setting to:

```json
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
]
```

### stylelint

in `.stylelint.js`

```js
const { stylelint } = require('@ice/spec');

module.exports = stylelint;
```

### prettier

in `.prettierrc.js`

```js
const { prettier } = require('@ice/spec');

module.exports = prettier;
```
