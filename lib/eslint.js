module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "react-hooks"],
  "extends": ["airbnb", "plugin:@typescript-eslint/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "jest": true,
    "mocha": true,
    "node": true,
    "commonjs": true
  },
  "rules": {
    "arrow-parens": [2, "always"],
    "no-console": 0,
    "no-use-before-define": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-has-content": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/no-array-index-key": 0,
    "func-names": 0,
    "arrow-body-style": 0,
    "react/sort-comp": 0,
    "react/prop-types": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "prefer-destructuring": 0,
    "no-param-reassign": 0,
    "no-return-assign": 0,
    "max-len": 0,
    "consistent-return": 0,
    "no-redeclare": 0,
    "react/require-extension": 0,
    "react/no-danger": 0,
    "comma-dangle": ["error", "always-multiline"],
    "function-paren-newline": 0,
    "object-curly-newline": 0,
    "no-restricted-globals": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-no-bind": 0,
    "no-plusplus": 0,
    "global-require": 0,
    "class-methods-use-this": 0,

    "react-hooks/rules-of-hooks": 'error',
    "react-hooks/exhaustive-deps": 'warn',

    "@typescript-eslint/array-type": ["error", "array"],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-use-before-define": 0
  }
}
