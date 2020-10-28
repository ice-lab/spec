# recommend-polyfill

With the updating of operating systems and browsers, more and more new features are beginning to be supported.
While bringing convenience to front-end development and technical solution design, some compatibility issues will also arise.

Recommend API which not supported in iOS 9 to add polyfill file.

## Rule Details

Examples of **incorrect** code for this rule:

```js
navigator.sendBeacon('xxxx');
```

navigator.sendBeacon is not support in iOS 9.

Examples of **correct** code for this rule:

```js
Array.from('xxx');
```
