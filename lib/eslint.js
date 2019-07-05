module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  // extends other config
  extends: [
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  // use plugin for parse
  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y"
  ],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    /** react hooks https://reactjs.org/docs/hooks-rules.html */
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    /** 无障碍相关 https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules */
    // label htmlFor 属性或者用 label 把表单组件包起来：不强制
    "jsx-a11y/label-has-associated-control": 1,
    // 静态元素（div/span/...）不允许绑定事件，除非指定 role：允许
    "jsx-a11y/no-static-element-interactions": 0,
    // 静态元素（div/span/...）不允许绑定事件，除非指定 role：允许
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    // 支持 click 事件必须同时支持键盘事件：不要求
    "jsx-a11y/click-events-have-key-events": 0,
    // 禁止不规则使用 a 标签：先允许吧
    "jsx-a11y/anchor-is-valid": 0,

    /** react 相关 https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules */
    // index 不能作为 key
    "react/no-array-index-key": 0,
    // ???
    "react/jsx-one-expression-per-line": 0,
    // 必须声明 propTypes：做不到
    "react/prop-types": 0,
    // ???
    "react/jsx-first-prop-new-line": 0,
    // 使用 props/state/context 必须解构：不合理
    "react/destructuring-assignment": 0,
    // 禁止不具体的 propTypes 声明：有点难
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    // "react/require-extension": 0,
    // 不允许使用 dangerous 属性：允许
    "react/no-danger": 0,

    /** import/export https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules */
    // 必须写明文件类型：不需要
    "import/extensions": 0,
    // ???
    "import/no-unresolved": 0,
    // ???
    "import/no-extraneous-dependencies": 0,
    // 优先使用 export default: 不合理
    "import/prefer-default-export": 0,

    /** 基础语法规则 https://cn.eslint.org/docs/rules/ */
    // 禁止 console.log：允许
    "no-console": 0,
    // 禁止变量声明与外层作用域的变量同名：允许但不推荐
    "no-shadow": 1,
    // 禁止未使用过的表达式：允许但不推荐，callback && callback()
    "no-unused-expressions": 1,
    // 禁止定义前使用：允许但不推荐，styles 放在最后声明（有待商榷）
    "no-use-before-define": 1,
    // 禁止直接调用 Object.prototypes 的内置属性：允许但不推荐，obj.hasOwnProperty('key')
    "no-prototype-builtins": 1,
    // 禁止匿名函数：没必要
    "func-names": 0,
    // 箭头函数必须使用大括号：没必要
    "arrow-body-style": 0,
    // 优先使用解构：没必要
    "prefer-destructuring": 0,
    // 禁止对 function 的参数进行重新赋值：的确应该禁止???
    "no-param-reassign": 1,
    // 禁止在 return 语句中使用赋值语句：不确定???
    "no-return-assign": 0,
    // 强制一行的最大长度：没必要
    "max-len": 0,
    // 函数必须有返回值：不确定???
    "consistent-return": 0,
    // 拖尾逗号
    "comma-dangle": ["error", "always-multiline"],
    // ???
    "function-paren-newline": 0,
    // ???
    "object-curly-newline": 0,
    // 禁用特定的全局变量：没必要
    "no-restricted-globals": 0,
    // 禁止 if 语句中 return 语句之后有 else 块：???
    "no-else-return": 0,
  }
}
