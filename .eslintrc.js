module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'arrow-parens': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'import/order': 'error',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
