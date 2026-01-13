import { Linter } from 'eslint';
import tsconfig from 'typescript-eslint';
import reactConfig from './rules/react.js';
import commonConfig, { commonPresetLinterConfigs } from './rules/common.js';
import * as tsConfigs from './rules/typescript.js';
import importConfig from './rules/import.js';
import prettierConfig from './rules/prettier.js';
import { PresetLinterConfigs } from './types.js';
import jsxPlusPlugin from 'eslint-plugin-jsx-plus'
import type {} from 'eslint-plugin-react'

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

  /**
   * The tsconfig project dir, use it to enable type-checked lint rules
   */
  tsconfigRootDir?: string;

  /**
   * Enable jsx-plus eslint rules, only works in eslint 8.x limited by plugin
   * @default false
   */
  jsxPlus?: boolean
}

export function getConfig(options: ConfigOptions = {}) {
  const { preset = 'ice', react = true, prettier = true, jsxPlus = false } = options;
  const configArray: Linter.Config[] = [commonConfig];
  if (commonPresetLinterConfigs[preset]) {
    configArray.push(commonPresetLinterConfigs[preset]);
  }
  if (react) {
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

  if (jsxPlus) {
    configArray.push({
      plugins: {'jsx-plus': jsxPlusPlugin},
      rules: jsxPlusPlugin.configs.recommended.rules
    })
  }

  return [
    ignoreConfig,
    ...tsconfig.config({
      files: options?.files ?? ['**/*.{ts,tsx,js,jsx}'],
      extends: configArray,
    }),
    prettier ? prettierConfig : {},
  ].filter(Boolean);
}

export default {
  configs,
  getConfig,
};
