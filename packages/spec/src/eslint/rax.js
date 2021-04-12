// https://www.npmjs.com/package/eslint-config-ali
// ESlint config for Rax project
module.exports = {
  extends: [
    require.resolve('eslint-config-ali/rax'),
    // For some ci and jest test env, we chose require.resolve instead 'plugin:@fed/best-practices/rax'
    require.resolve('@fed/eslint-plugin-best-practices/src/configs/rax'),
  ],
};
