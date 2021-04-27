// https://www.npmjs.com/package/eslint-config-ali
// ESlint config for ice TypeScript and react TypeScript project
module.exports = {
  extends: [
    'plugin:prettier/recommended',
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-ali/typescript/react'),
    // For some ci and jest test env, we chose require.resolve instead 'plugin:@iceworks/best-practices/react-ts'
    require.resolve('@iceworks/eslint-plugin-best-practices/src/configs/react-ts'),
  ],
};
