/*
 * @Date: 2020-05-31 21:56:54
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-07-04 16:39:08
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  // extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/prettier'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
