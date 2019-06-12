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
