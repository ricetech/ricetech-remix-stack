module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "prettier",
  ],
  rules: {
    "prefer-template": "warn",
    "require-await": "error",
  },
};
