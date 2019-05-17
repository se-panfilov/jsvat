const path = require('path')

module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'jsvat.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
    // globalObject: 'this',
    // // libraryExport: 'default',
    // library: 'jsvat'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  }
}
