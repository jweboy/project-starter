/*
 * @Author: jweboy
 * @Date: 2019-12-03 16:18:35
 * @LastEditors: jweboy
 * @LastEditTime: 2019-12-03 16:24:34
 */
/**
 * @description 规则数值含义
 * "off" 或 0 - 关闭规则
 * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
 * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */

// react rules 模板

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module'
    // ecmaFeatures: {
    //   jsx: true, // for react
    // },
  },
  rules: {
    'no-console': 1,
    'prettier/prettier': ['error']
  }
};
