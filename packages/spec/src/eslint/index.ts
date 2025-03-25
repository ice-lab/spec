import { Linter } from 'eslint';
import tsconfig from 'typescript-eslint';
import reactConfig from './rules/react.js';
import commonConfig, { commonPresetLinterConfigs } from './rules/common.js';
import * as tsConfigs from './rules/typescript.js';
import importConfig from './rules/import.js';
import prettierConfig from './rules/prettier.js';
import { PresetLinterConfigs } from './types.js';

const configs = {};

const ignoreConfigsOfPreset: PresetLinterConfigs = {
  ice: {
    ignores: ['**/.ice/**', '**/build/**'],
  },
  pkg: {
    ignores: ['**/dist/**', '**/esm/**', '**/es2017/**', '**/cjs/**'],
  },
};

export interface ConfigOptions {
  /**
   * preset of framework
   * @default 'ice'
   */
  preset?: 'ice' | 'pkg' | 'spark-framework' | 'spark-child';
  files?: string[];
  /**
   * @default true
   */
  prettier?: boolean;

  /**
   * @default true
   */
  react?: boolean;

  tsconfigRootDir?: string;
}

function getConfig(options: ConfigOptions = {}) {
  const { preset = 'ice' } = options;
  const configArray: Linter.Config[] = [commonConfig];
  if (commonPresetLinterConfigs[preset]) {
    configArray.push(commonPresetLinterConfigs[preset]);
  }
  if (options?.react !== false) {
    configArray.push(reactConfig);
  }

  configArray.push(...tsConfigs.typescriptRecommendConfig);

  const ignoreConfig = ignoreConfigsOfPreset[preset];

  if (options.tsconfigRootDir) {
    configArray.push(...tsConfigs.typescriptTypeCheckedConfig);
    configArray.push({
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: options.tsconfigRootDir,
        },
      },
    });
  }

  configArray.push(...importConfig);

  return [
    ignoreConfig,
    ...tsconfig.config({
      files: options?.files ?? ['**/*.{ts,tsx,js,jsx}'],
      extends: configArray,
    }),
    options?.prettier !== false ? prettierConfig : {},
  ].filter(Boolean);
}

export default {
  configs,
  getConfig,
};
