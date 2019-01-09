module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
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
