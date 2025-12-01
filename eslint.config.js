import { getConfig } from '@ice/spec/eslint';

// script: eslint --ext .js,.jsx,.tsx,.ts ./ --resolve-plugins-relative-to ./packages/spec
export default [
  ...getConfig({
    preset: 'pkg',
    prettier: false,
  }),
  {
    ignores: ['examples/**'],
  },
];
