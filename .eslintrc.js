module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: "module"
  },
  extends: 'standard',
  plugins: [],
  'rules': {
    'arrow-parens': 0,
    'curly': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-mixed-operators": 0
  }
}
