# deps-no-router-library

It is not recommended to directly rely on routing libraries in [rax](https://rax.js.org/) and [ice](https://ice.work/) project, such as react-router-dom, react-router.

## Rule Details

Examples of **incorrect** code for this rule:

```json
{
  "dependencies": {
    "react-router": "^5.2.0"
  }
}
```
