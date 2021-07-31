module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-shadow': "off",
    '@typescript-eslint/no-shadow': ["error"],
    'import/prefer-default-export': "off",
    "object-shorthand": 0,
    "prefer-template": "off",
    'arrow-body-style': "off",
  },
};
