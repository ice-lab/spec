# @iceworks/eslint-plugin-best-practices

Iceworks best practices eslint plugin.

## Installation

Install [esLint](http://eslint.org), `@iceworks/eslint-plugin-best-practices`:

```shell
$ npm install --save-dev eslint @iceworks/eslint-plugin-best-practices
```

## Usage

Recommend use [@iceworks/spec](https://www.npmjs.com/package/@iceworks/spec)

Then configure the rules you want to use under the rules section.

```js
// .eslintrc.js
const { getESLintConfig } = require('@iceworks/spec');

// getESLintConfig(rule: 'rax'|'rax-ts'|'react'|'react-ts', customConfig?);
module.exports = getESLintConfig('rax', {
  // custom config it will merge into main config
  rules: {
    '@iceworks/best-practices/rule-name': 'off',
  },
});
```

## Supported Rules

- [`deps-no-ice-scripts`](https://github.com/ice-lab/spec/tree/master/packages/eslint-plugin-best-practices/docs/rules/deps-no-ice-scripts.md) It is not recommended to use ice-scripts, the new version is ice.js.
- [`deps-no-resolutions`](https://github.com/ice-lab/spec/tree/master/packages/eslint-plugin-best-practices/docs/rules/deps-no-resolutions.md) It is not recommended to use resolutions to lock the version.
- [`deps-no-router-library`](https://github.com/ice-lab/spec/tree/master/packages/eslint-plugin-best-practices/docs/rules/deps-no-router-library.md) It is not recommended to directly rely on routing libraries, such as react-router-dom, react-router.
- [`no-broad-semantic-versioning`](https://github.com/ice-lab/spec/tree/master/packages/eslint-plugin-best-practices/docs/rules/no-broad-semantic-versioning.md) Recommended the semantic versioning include everything greater than a particular version in the same major range.
- [`no-http-url`](https://github.com/ice-lab/spec/tree/master/packages/eslint-plugin-best-practices/docs/rules/no-http-url.md) Recommended the http url switch to HTTPS.
- [`no-js-in-ts-project`](https://github.com/ice-lab/spec/tree/master/packages/eslint-plugin-best-practices/docs/rules/no-js-in-ts-project.md) It is not recommended to use js and ts files at the same time.
- [`no-lowercase-component-name`](https://github.com/ice-lab/spec/tree/master/packages/eslint-plugin-best-practices/docs/rules/no-lowercase-component-name.md) It is not recommended to name components in lower case.
- [`no-secret-info`](https://github.com/ice-lab/spec/tree/master/packages/eslint-plugin-best-practices/docs/rules/no-secret-info.md) Don't show `password` `token` and `secret` in plain text.
- [`recommend-add-line-height-unit`](https://github.com/ice-lab/spec/tree/master/packages/eslint-plugin-best-practices/docs/rules/recommend-add-line-height-unit.md) Recommended to add unit for line-height which is more than 5.
- [`recommend-functional-component`](https://github.com/ice-lab/spec/tree/master/packages/eslint-plugin-best-practices/docs/rules/recommend-functional-component.md) It is not recommended to use class component.
- [`recommend-polyfill`](https://github.com/ice-lab/spec/tree/master/packages/eslint-plugin-best-practices/docs/rules/recommend-polyfill.md) Recommend API which not supported in iOS 9 to add polyfill file.
- [`recommend-update-rax`](https://github.com/ice-lab/spec/tree/master/packages/eslint-plugin-best-practices/docs/rules/recommend-update-rax.md) Rax version < 1.0 , recommend to update Rax.
