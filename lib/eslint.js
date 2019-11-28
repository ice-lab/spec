module.exports = {
  root: true,
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    /** Airbnb JavaScript Style Guide https://github.com/airbnb/javascript#types */
    // Airbnb include react, react-a11y(include jsx-a11y)
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/react'),
  ],
  plugins: [
    'react-hooks',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    /** React Hooks Style Guide https://reactjs.org/docs/hooks-rules.html */
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    /** 无障碍相关 https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules */
    // label htmlFor 属性或者用 label 把表单组件包起来：警告
    "jsx-a11y/label-has-associated-control": 1,
    // 静态元素（div/span/...）不允许绑定事件，除非指定 role：取消
    "jsx-a11y/no-static-element-interactions": 0,
    // 静态元素（div/span/...）不允许绑定事件，除非指定 role：取消
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    // 支持 click 事件必须同时支持键盘事件：取消
    "jsx-a11y/click-events-have-key-events": 0,
    // 禁止不规则使用 a 标签：取消
    "jsx-a11y/anchor-is-valid": 0,
    // require that JSX labels use "htmlFor": 警告
    "jsx-a11y/label-has-for": 1,

    /** react相关 https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules */
    // index 不能作为 key：取消
    "react/no-array-index-key": 0,
    // 每行只能有一个jsx组件声明： 取消
    "react/jsx-one-expression-per-line": 0,
    // 必须声明 propTypes：取消
    "react/prop-types": 0,
    // 第一个props必须放在新的一行：取消 TBD
    "react/jsx-first-prop-new-line": 0,
    // 使用 props/state/context 必须解构：取消
    "react/destructuring-assignment": 0,
    // 禁止不具体的 propTypes 声明：取消
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"],
      },
    ],
    // 不允许使用 dangerous 属性：取消
    "react/no-danger": 0,

    /** import/export相关 https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules */
    // 必须写明文件类型：取消
    "import/extensions": 0,
    // 路径必须可以被本地文件系统解析：取消
    "import/no-unresolved": 0,
    // 只能引用package.json声明的依赖：取消 TBD
    "import/no-extraneous-dependencies": 0,
    // 优先使用 export default: 取消
    "import/prefer-default-export": 0,

    /** 基础语法规则 https://eslint.org/docs/rules/ */
    // 禁止 console.log：取消
    "no-console": 0,
    // 禁止变量声明与外层作用域的变量同名：警告
    "no-shadow": 1,
    // 禁止未使用过的表达式：警告
    "no-unused-expressions": 1,
    // 禁止变量定义前使用：警告, 函数除外
    "no-use-before-define": ["warn", { "functions": false }],
    // 禁止直接调用 Object.prototypes 的内置属性：警告
    "no-prototype-builtins": 1,
    // 禁止匿名函数：取消
    "func-names": 0,
    // 箭头函数必须使用大括号：取消
    "arrow-body-style": 0,
    // 优先使用解构：取消
    "prefer-destructuring": 0,
    // 禁止对函数参数进行重新赋值：警告
    "no-param-reassign": 1,
    // 强制一行的最大长度：取消
    "max-len": 0,
    // 函数必须有返回值：取消 TBD
    "consistent-return": 0,
    // 拖尾逗号：多行时必须每行有逗号
    "comma-dangle": ["error", "always-multiline"],
    // 对象声明是否换行：取消
    "object-curly-newline": 0,
    // 禁用特定的全局变量：取消
    "no-restricted-globals": 0,
    // 禁止 if 语句中 return 语句之后有 else 块：取消
    "no-else-return": 0,
    // 禁止在 return 语句中使用赋值语句：取消 TBD  ref={formRef => form = formRef}
    "no-return-assign": 0,
    // 禁止在return语句中使用await：取消
    "no-return-await": 0,
    // 禁止 ++ --: 取消
    "no-plusplus": 0,
    // 强制语句结尾必须加逗号：开启
    "semi": ["error", "always"],
  },
};
