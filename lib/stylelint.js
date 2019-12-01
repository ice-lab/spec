module.exports = {
  extends: [
    require.resolve("stylelint-config-standard"),
    require.resolve("stylelint-config-css-modules"),
    require.resolve("stylelint-scss"),
    require.resolve("stylelint-config-rational-order"),
    require.resolve("stylelint-config-prettier"),
  ],
  plugins: [
    "stylelint-order",
  ],
  rules: {
    "no-empty-source": null,
  },
};
