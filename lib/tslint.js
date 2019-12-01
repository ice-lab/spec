const eslint = require('./eslint');
const deepmerge = require('./deepmerge');

module.exports = deepmerge(eslint, {
  parser: require.resolve("@typescript-eslint/parser"),
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    // 数组类型始终使用[]格式声明
    "@typescript-eslint/array-type": ["error", "array"],
    // 缩进固定为2空格
    "@typescript-eslint/indent": ["error", 2],
    // 禁止变量在声明前使用：取消
    "@typescript-eslint/no-use-before-define": 0,
    // interface的名称前缀必须为I
    "@typescript-eslint/interface-name-prefix": ["error", "always"],
    // class的方法必须声明public/private，constructors除外
    "@typescript-eslint/explicit-member-accessibility": ["error", {
      accessibility: 'explicit',
      overrides: {
        constructors: 'no-public',
      },
    }],
  },
});
