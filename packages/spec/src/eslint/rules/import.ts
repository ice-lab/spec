import { Linter } from 'eslint';
import importPlugin from 'eslint-plugin-import';

const config = [
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    rules: {
      /**
       * 模块无法解析的问题依赖 TypeScript 或者 Webpack 进行处理，此插件无需处理
       */
      'import/no-unresolved': 'off',
    },
  },
] satisfies Linter.Config[];

export default config;
