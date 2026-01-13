import eslint from '@ice/spec/eslint';

// script: eslint --ext .js,.jsx,.tsx,.ts ./ --resolve-plugins-relative-to ./packages/spec
export default eslint.getConfig();
