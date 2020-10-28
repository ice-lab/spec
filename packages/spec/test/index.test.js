const { getESLintConfig, getStylelintConfig, getPrettierConfig } = require('../src');

it('getESLintConfig set one rule should be replaced', () => {
  const result = getESLintConfig('react', {
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
  const result = getStylelintConfig('react', {
    rules: {
      'block-no-empty': null,
    },
  });

  expect(result.rules['block-no-empty']).toEqual(null);
});

it('getPrettierConfig tabWidth should be replaced', () => {
  const result = getPrettierConfig('react', {
    tabWidth: 4,
  });

  expect(result.tabWidth).toEqual(4);
});

it('new attributes should be merged', () => {
  const result = getESLintConfig('react', {
    newAttribute1: ['xxxx-val1'],
    newAttribute2: { a: 'xxxx-val2' },
    newAttribute3: 'xxxx-val3',
  });

  expect(result.newAttribute1[0]).toEqual('xxxx-val1');
  expect(result.newAttribute2.a).toEqual('xxxx-val2');
  expect(result.newAttribute3).toEqual('xxxx-val3');
});
