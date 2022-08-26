const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV
const isProd = mode === 'production'

const target = isProd ? "browserslist" : "web"

const plugins = []

if(!isProd) {
  plugins.push(new HtmlWebpackPlugin({
    template: './public/index.html',
  }))
}

module.exports = {
  mode,
  entry: './src/index.ts',
  target,
  plugins,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 3000,
  },
  module: {
  	rules: [
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}