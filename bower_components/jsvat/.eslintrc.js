module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
  plugins: [],
  'rules': {
    'arrow-parens': 0,
    'curly': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
