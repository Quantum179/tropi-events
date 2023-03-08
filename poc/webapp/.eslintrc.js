module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': 0,
    '@typescript-eslint/no-empty-function': 0,
    'class-methods-use-this': 0,
    'semi': 0,
    'max-len': 0,
    'lines-between-class-members': 0,
    '@typescript-eslint/no-inferrable-types': 0
  },
};
