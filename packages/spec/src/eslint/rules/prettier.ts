import { Linter } from 'eslint';
import prettier from 'eslint-plugin-prettier/recommended';

const config = {
  ...prettier,
  rules: {
    ...prettier.rules,
    // 将 prettier 的错误等级改为 warning，这样一方面不会飘红和其他真正的问题混淆，另一方面可以让 autofix 同样生效
    'prettier/prettier': 'warn',
  },
} satisfies Linter.Config;

export default config;
