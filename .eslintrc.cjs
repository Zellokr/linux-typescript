/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'google',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'indent': ['error', 2, {'SwitchCase': 1}],
    'max-len': ['error', {'code': 100, 'comments': 100}],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-useless-constructor': 0,
    'require-jsdoc': 0,
    'semi': ['error', 'always'],
    'switch-colon-spacing': ['error', {'after': true, 'before': false}],
    'valid-jsdoc': 0,
    'vue/html-self-closing': 0,
    'vue/multi-word-component-names': 0,
  },
}
