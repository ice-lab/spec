import { Linter } from 'eslint';
import tslint from 'typescript-eslint';

export const typescriptRecommendConfig = tslint.config(...tslint.configs.recommended, {
  name: '@ice/spec/eslint/typescript/recommend',
  rules: {

    /**
     * 【强制】将重载的函数写在一起以增加代码可读性
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
     */
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    /**
     * 【关闭】要求使用模板字面量而不是字符串连接
     */
    '@typescript-eslint/prefer-template': 'off',

    /**
     * 【关闭】禁止空的构造函数
     */
    '@typescript-eslint/no-useless-empty-export': 'off',

    /**
     * 【推荐】简单类型请使用 T[] 或 readonly T[]
     * 对于所有其他类型（联合类型，交集类型，对象类型，函数类型等），请使用 Array<T> 或 ReadonlyArray<T>
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
     */
    '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],


    /**
     * 【强制】使用 @ts-expect-error/@ts-ignore/@ts-nocheck/@ts-check 等指令时需跟随注释描述
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
     */
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
      },
    ],

    /**
     * 【强制】禁止使用 tslint:<rule-flag> 等相关注释
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
     * @reason tslint 已经被废弃
     */
    '@typescript-eslint/ban-tslint-comment': 'error',

    /**
     * 【关闭】禁止使用指定的类型
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
     */
    '@typescript-eslint/ban-types': 'off',

    /**
     * 【推荐】类的属性如果是字面量，则必须是只读属性而不能用 getter
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
     */
    '@typescript-eslint/class-literal-property-style': ['warn', 'fields'],

    /**
     * 【强制】类型断言必须使用 as Type 而非 <T> 容易与 JSX 语法混淆.
     * 对象字面量允许使用 as 或者 const x:T 的方式，因为大部分情况下 const x:T 是无法赋值才会采用 as 的方式
     * 数组仅允许在参数中使用 as，其他情况必须使用 const x:T
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
     */
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        arrayLiteralTypeAssertions: 'allow',
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow',
      },
    ],

    /**
     * 【推荐】优先使用 interface 而不是 type 定义对象类型
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
     */
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],

    /**
     * 【关闭】有默认值或可选的参数必须放到最后
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
     */
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'off',

    /**
     * 【关闭】函数返回值必须与声明的类型一致
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
     */
    '@typescript-eslint/explicit-function-return-type': 'off',

    /**
     * 【推荐】设置类的成员的可访问性，public 可省略
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
     */
    '@typescript-eslint/explicit-member-accessibility': ['warn', { accessibility: 'no-public' }],

    /**
     * 【关闭】导出的函数或类中的 public 方法必须定义输入输出参数的类型
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    /**
     * 【关闭】变量必须在定义的时候赋值
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
     * @extend
     */
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'off',

    /**
     * 【关闭】类成员之间保留一个空行
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
     * @extend
     */
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',

    /**
     * 【推荐】类成员的遵循一定的排序规则
     * 1. 类的静态方法/属性(static)优先于实例的方法/属性(instance)
     * 2. 属性(field)优先于构造函数(constructor)，优先于方法(method)
     * 3. 公开的项(public)优先于受保护的(protected)，优先于私有的(private)
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
     */
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'static-field',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'static-method',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-field',
          'protected-field',
          'private-field',
          'instance-field',
          'field',
          'constructor',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-method',
          'protected-method',
          'private-method',
          'instance-method',
          'method',
        ],
      },
    ],

    /**
     * 【推荐】interface 中的方法用属性的方式定义
     * A method and a function property of the same type behave differently.
     * Methods are always bivariant in their argument, while function properties
     * are contravariant in their argument under strictFunctionTypes.
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
     */
    '@typescript-eslint/method-signature-style': ['warn', 'property'],

    /**
     * 【关闭】限制各种变量或类型的命名规则
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
     */
    camelcase: 'off',
    '@typescript-eslint/naming-convention': 'off',

    /**
     * 【强制】禁止使用 Array 构造函数创建数组
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
     * @extend
     */
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    /**
     * 【强制】禁止出现空函数，普通函数（非 async/await/generator）、箭头函数、类上的方法除外
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
     * @extend
     */
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],

    /**
     * 【推荐】禁止出现空的 interface
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
     */
    '@typescript-eslint/no-empty-interface': 'warn',

    /**
     * 【关闭】禁止使用 any
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
     */
    '@typescript-eslint/no-explicit-any': 'warn',

    /**
     * 【关闭】禁止不必要的小括号
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
     */
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': 'off',

    /**
     * 【关闭】禁止在 class 外使用 this
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
     * @extend
     */
    'no-invalid-this': 'off',

    /**
     * 【关闭】禁止使用 magic numbers
     * @extend
     */
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',

    /**
     * 【强制】禁止使用 namespace 来定义命名空间，但允许使用 declare namespace 定义外部命名空间
     */
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
        allowDefinitionFiles: true,
      },
    ],

    /**
     * 【推荐】不建议使用 require 引入模块，使用 import
     */
    '@typescript-eslint/no-require-imports': 'warn',

    /**
     * 【推荐】不建议将 this 赋值给其他变量，解构赋值除外
     */
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
      },
    ],

    /**
     * 【强制】禁止无用的表达式
     * @extend
     */
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        // enforceForJSX: true,
        // ignoreDirectives: true
      },
    ],

    /**
     * 【强制】声明的变量必须被使用
     * @extend
     */
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],

    /**
     * 【强制】禁止在定义变量之前就使用它
     * @extend
     */
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: false }],

    /**
     * 【强制】禁止出现没必要的 constructor
     * @extend
     */
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    /**
     * 【关闭】禁止使用 require 来引入模块，被 no-require-imports 规则包含
     */
    '@typescript-eslint/no-var-requires': 'off',

    /**
     * 【关闭】如果索引仅用于访问正在迭代的数组，则建议首选 for of 循环，而不是标准 for 循环
     */
    '@typescript-eslint/prefer-for-of': 'off',

    /**
     * 【关闭】可以简写为函数类型的接口或对象字面类型的话，则必须简写
     */
    '@typescript-eslint/prefer-function-type': 'off',

    /**
     * 【关闭】使用 includes 而不是 indexOf
     */
    '@typescript-eslint/prefer-includes': 'off',

    /**
     * 【强制】禁止使用 module 来定义命名空间，declare module 是允许的
     */
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    /**
     * 【推荐】使用 ?? 替代 ||，仅在开启类型检查启用
     */
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    /**
     * 【推荐】使用 optional chaining 替代 &&，仅在开启类型检查启用
     */
    '@typescript-eslint/prefer-optional-chain': 'off',

    /**
     * 【关闭】使用 RegExp#exec 而不是 String#match
     */
    '@typescript-eslint/prefer-regexp-exec': 'off',

    /**
     * 【关闭】使用 String#startsWith 而不是其他方式
     */
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',

    /**
     * 【关闭】当需要忽略下一行的 ts 错误时，必须使用 @ts-expect-error 而不是 @ts-ignore
     */
    '@typescript-eslint/prefer-ts-expect-error': 'off',

    /**
     * 【关闭】async 函数的返回值必须是 Promise
     */
    '@typescript-eslint/promise-function-async': 'off',

    /**
     * 【关闭】async 函数中必须存在 await 语句
     */
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',

    /**
     * 【强制】禁止在 return 语句里使用 await
     * @extend
     */
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'off',

    /**
     * 【强制】三斜杠导入语法已废弃，在非 dts 文件中禁止使用
     */
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'never',
        types: 'always',
        lib: 'always',
      },
    ],

    /**
     * 不允许重复申明
     * no-redeclare 会导致 typescript 的函数重载报错，详见：
     * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-redeclare.md
     */
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    /**
     * 【推荐】禁止使用容易混淆的非空断言
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
     */
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',

    /**
     * 【关闭】禁止在 class 外使用 this
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
     * @extend
     */
    '@typescript-eslint/no-invalid-this': 'off',

    /**
     * 【关闭】禁止给类的构造函数的参数添加修饰符
     */
    '@typescript-eslint/no-parameter-properties': 'off',

    /**
     * 【关闭】禁止使用类型别名
     */
    '@typescript-eslint/no-type-alias': 'off',

    /**
     * 【关闭】禁止使用 arguments.callee
     */
    '@typescript-eslint/no-restricted-types': 'off',

    /**
     * 【强制】interface 和 type 定义时必须声明成员的类型
     */
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: false,
        propertyDeclaration: true,
        variableDeclaration: false,
      },
    ],

    /**
     * 【推荐】不推荐直接写空对象，但在很多业务场景下，空对象的使用频率比较高，所以这里仅仅给予告警
     * @link https://typescript-eslint.io/rules/no-empty-object-type
     */
    '@typescript-eslint/no-empty-object-type': 'warn',

    /**
     * 【推荐】禁止变量声明与外层作用域的变量同名
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
     */
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',

    /**
     * 【强制】禁止多余的 non-null 断言，非类型相关
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
     */
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    /**
     * 【强制】禁止在接口中定义 constructor，或在类中定义 new
     * @link https://typescript-eslint.io/rules/no-misused-new
     */
    '@typescript-eslint/no-misused-new': 'error',

    /**
     * 【自修复】禁止使用 Function 类型
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-wrapper-object-types.md
     */
    '@typescript-eslint/no-wrapper-object-types': 'warn',

    /**
     * 【强制】禁止使用无意义的 void 类型，void 只能用在函数的返回值中
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
     */
    '@typescript-eslint/no-invalid-void-type': 'error',

    /**
     * 【强制】禁止不安全的声明合并
     * @link https://typescript-eslint.io/rules/no-unsafe-declaration-merging
     */
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',

    /**
     * 【自修复】前端领域内，通常需要强制使用 ?. 来保证服务端下发的数据的正确性，暂时允许此类防御性规则
     * @link https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',

    /**
     * 【推荐】当设定当前值为当前类型时，推荐使用 as const 替代 as 'bar'
     * @link https://typescript-eslint.io/rules/prefer-as-const
     */
    '@typescript-eslint/prefer-as-const': 'error',

    /**
     * 【强制】禁止重复的枚举成员值
     * @link https://typescript-eslint.io/rules/no-duplicate-enum-values
     */
    '@typescript-eslint/no-duplicate-enum-values': 'error',

    /**
     * 【关闭】禁止使用 non-null 断言（感叹号）
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion
     */
    '@typescript-eslint/no-non-null-assertion': 'off',

    /**
     * 【推荐】禁止定义没必要的类，比如只有静态方法的类
     * @link https://typescript-eslint.io/rules/no-extraneous-class
     */
    '@typescript-eslint/no-extraneous-class': 'warn',
  },
}) as Linter.Config[];

export const typescriptTypeCheckedConfig = tslint.config(...tslint.configs.recommendedTypeCheckedOnly, {
  name: '@ice/spec/eslint/typescript/type-checked',
  rules: {
    /**
     * 【强制】优先使用 . 访问对象的属性
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
     * @extend
     */
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

    /**
     * 【推荐】使用加号时，两者必须同为数字或同为字符串
     */
    '@typescript-eslint/restrict-plus-operands': 'warn',

    /**
     * 【推荐】使用 ?? 替代 ||，仅在开启类型检查启用
     */
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',

    /**
     * 【推荐】使用 optional chaining 替代 &&，仅在开启类型检查启用
     */
    '@typescript-eslint/prefer-optional-chain': 'warn',

    /**
     * 【推荐】禁止在类型联合中使用冗余的类型组成部分
     * @link https://typescript-eslint.io/rules/no-redundant-type-constituents
     */
    '@typescript-eslint/no-redundant-type-constituents': 'warn',

    /**
     * 【关闭】禁止调用 Promise 时没有处理异常情况
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
     */
    '@typescript-eslint/no-floating-promises': 'off',

    /**
     * 【关闭】禁止对 array 使用 for in 循环
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
     */
    '@typescript-eslint/no-for-in-array': 'off',

    /**
     * 【强制】避免错误的使用 Promise
     */
    '@typescript-eslint/no-misused-promises': 'error',

    /**
     * 【推荐】禁止无用的类型断言
     */
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',

    /**
     * 【关闭】禁止不必要的类型参数
     */
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',

    /**
     * 【推荐】禁止将 any 类型的值传递给参数
     * @link https://typescript-eslint.io/rules/no-unsafe-argument
     */
    '@typescript-eslint/no-unsafe-argument': 'warn',


    /**
     * 【关闭】禁止将变量或属性的类型设置为 any
     */
    '@typescript-eslint/no-unsafe-assignment': 'warn',


    /**
     * 【关闭】禁止调用 any 类型的变量上的方法
     */
    '@typescript-eslint/no-unsafe-call': 'warn',


    /**
     * 【关闭】禁止不安全的枚举比较
     */
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',


    /**
     * 【关闭】禁止函数的返回值的类型是 any
     */
    '@typescript-eslint/no-unsafe-return': 'warn',


    /**
     * 【关闭】禁止在模块范围内使用 this
     */
    '@typescript-eslint/no-unsafe-unary-minus': 'warn',

    /**
     * 【关闭】禁止使用类似 eval() 的方法
     */
    "no-implied-eval": "off",
    '@typescript-eslint/no-implied-eval': 'error',

    /**
     * 【推荐】只允许抛出 Error 对象和 ExtendsError的对象
     * @link https://typescript-eslint.io/rules/only-throw-error
     */
    "no-throw-literal": "off",
    '@typescript-eslint/only-throw-error': 'warn',

    /**
     * 【关闭】禁止获取 any 类型的变量中的属性
     */
    '@typescript-eslint/no-unsafe-member-access': 'warn',

    /**
     * 【关闭】模版字符串中的变量类型必须是字符串
     */
    '@typescript-eslint/restrict-template-expressions': 'warn',

    /**
     * 【推荐】禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
     */
    '@typescript-eslint/no-inferrable-types': 'warn',

    /**
     * 【推荐】禁止使用不安全的函数类型
     * @link https://typescript-eslint.io/rules/no-unsafe-function-type
     */
    '@typescript-eslint/no-unsafe-function-type': 'warn',

    /**
     * 【推荐】定义函数时，优先使用参数的联合类型而不是函数的类型重载
     * @link https://typescript-eslint.io/rules/unified-signatures
     */
    '@typescript-eslint/unified-signatures': 'warn',

    /**
     * 【推荐】禁止使用 delete 操作符删除数组元素，这将创建稀疏数组
     * @link https://typescript-eslint.io/rules/no-array-delete
     */
    '@typescript-eslint/no-array-delete': 'warn',

    /**
     * 【关闭】禁止混合的参数顺序
     */
    '@typescript-eslint/no-mixed-enums': 'error',

    /**
     * 【关闭】禁止使用非空断言的 postfix 表达式
     */
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',

    /**
     * 【关闭】要求导入声明按字母顺序排列
     */
    '@typescript-eslint/sort-type-constituents': 'off',

    /**
     * 【关闭】要求 switch 语句有 default case
     */
    '@typescript-eslint/switch-exhaustiveness-check': 'off',


    /**
     * 【关闭】禁止对没有 then 方法的对象使用 await
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
     */
    '@typescript-eslint/await-thenable': 'off',

    /**
     * 【关闭】限制 toString 方法的使用
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
     */
    '@typescript-eslint/no-base-to-string': 'off',


    /**
     * 【关闭】delete 时传入的 key 必须是静态的字面量
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
     */
    '@typescript-eslint/no-dynamic-delete': 'off',

    /**
     * 【关闭】测试表达式中的布尔类型禁止与 true 或 false 直接比较
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

    /**
     * 【关闭】条件表达式禁止是永远为真（或永远为假）的
     */
    '@typescript-eslint/no-unnecessary-condition': 'off',

    /**
     * 【关闭】在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'off',

    /**
     * 【关闭】禁止范型的类型有默认值时，将范型设置为该默认值
     */
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',


    /**
     * 【关闭】私有变量如果没有在构造函数外被赋值，则必须设为 readonly
     */
    '@typescript-eslint/prefer-readonly': 'off',

    /**
     * 【关闭】函数的参数必须设置为 readonly
     */
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    /**
     * 【关闭】使用 reduce 方法时，必须传入范型，而不是对第二个参数使用 as
     */
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',

    /**
     * 【关闭】条件判断必须传入布尔值
     */
    '@typescript-eslint/strict-boolean-expressions': 'off',

    /**
     * 【关闭】方法调用时需要绑定到正确的 this 上
     */
    '@typescript-eslint/unbound-method': 'off',

  },
}) as Linter.Config[];
