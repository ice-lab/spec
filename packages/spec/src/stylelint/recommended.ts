import miniappTags from './miniapp-tags.js';

export default {
  defaultSeverity: 'error',

  plugins: ['stylelint-scss', 'stylelint-less'],

  extends: ['stylelint-config-recommended', 'stylelint-config-tailwindcss'],

  rules: {
    /**
     * Possible errors
     * @link https://stylelint.io/user-guide/rules/list#possible-errors
     */

    // 小程序场景下选择器
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
        ignoreTypes: miniappTags,
      },
    ],

    // 不允许属性存在冗余值
    'shorthand-property-no-redundant-values': true,

    // 类型选择器使用小写字母
    'selector-type-case': 'lower',

    // 函数名是小写字母
    'function-name-case': 'lower',

    // 指定 CSS 属性值为小写
    'value-keyword-case': 'lower',

    // 指定 16 进制颜色为简写
    'color-hex-length': 'short',

    /**
     * stylelint-scss rules
     * @link https://www.npmjs.com/package/stylelint-scss
     */
    'scss/double-slash-comment-whitespace-inside': 'always',

    // 支持自定义的伪类
    "selector-pseudo-class-no-unknown": [
      true,
      { "ignorePseudoClasses": ["global"] }
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  // stylelint 14 require postcss-less and postcss-scss
  customSyntax: 'postcss-scss',
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],
};
