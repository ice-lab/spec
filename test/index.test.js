const { deepmerge, eslint } = require('../lib');

it('set one rule should be replaced', () => {
  const result = deepmerge(eslint, {
    rules: {
      'comma-dangle': [1, 'never'],
    },
  });

  expect(result.rules['comma-dangle']).toEqual([1, 'never']);
});

it('root should be replaced', () => {
  const result = deepmerge(eslint, {
    root: false,
  });

  expect(result.root).toEqual(false);
});

it('parserOptions should be merged', () => {
  const result = deepmerge(eslint, {
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

it('plugins should be merged', () => {
  const result = deepmerge(eslint, {
    plugins: ['react-xxx'],
  });
  expect(result.plugins[0]).toEqual('react-hooks');
  expect(result.plugins[1]).toEqual('react-xxx');
});

it('new attributes should be merged', () => {
  const result = deepmerge(eslint, {
    newAttribute1: ['xxxx-val1'],
    newAttribute2: { a: 'xxxx-val2' },
    newAttribute3: 'xxxx-val3'
  });
  expect(result.newAttribute1[0]).toEqual('xxxx-val1');
  expect(result.newAttribute2.a).toEqual('xxxx-val2');
  expect(result.newAttribute3).toEqual('xxxx-val3');
});
