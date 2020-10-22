const { getESLintConfig, getStylelintConfig, getPrettierConfig } = require('../src');

it('getESLintConfig set one rule should be replaced', () => {
  const result = getESLintConfig('ice', {
    rules: {
      'comma-dangle': [1, 'never'],
    },
  });

  expect(result.rules['comma-dangle']).toEqual([1, 'never']);
});

it('getESLintConfig parserOptions should be merged', () => {
  const result = getESLintConfig('rax', {
    parserOptions: {
      ecmaVersion: 2017,
      ecmaFeatures: {
        js: true,
      },
    },
  });

  expect(result.parserOptions.ecmaVersion).toEqual(2017);
  expect(result.parserOptions.ecmaFeatures).toEqual({
    js: true,
  });
  expect(result.parserOptions.ecmaFeatures.jsx).toEqual(undefined);
});

it('getStylelintConfig rules should be merged', () => {
  const result = getStylelintConfig('ice', {
    rules: {
      'block-no-empty': null,
    },
  });

  expect(result.rules['block-no-empty']).toEqual(null);
});

it('getPrettierConfig tabWidth should be replaced', () => {
  const result = getPrettierConfig('ice', {
    tabWidth: 4,
  });

  expect(result.tabWidth).toEqual(4);
});
