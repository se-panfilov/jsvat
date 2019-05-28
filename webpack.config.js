const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // mode: 'production',
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.ts',
  output: {
    filename: 'jsvat.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: 'this',
    // // libraryExport: 'default',
    library: 'jsvat'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
