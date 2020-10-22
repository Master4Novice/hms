const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { 
	modules: [path.resolve('./src'), 'node_modules'], 
	extensions: ['*', '.js', '.jsx'] 
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/',
    filename: '[name].[hash].hms-bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 9000,
    publicPath: 'http://localhost:9000/hms/',
    hotOnly: true,
  },
  plugins: [
	new webpack.HotModuleReplacementPlugin(),
	new HtmlWebpackPlugin({
		template: 'public/index.html',
		chunksSortMode: 'auto'
	})
  ],
  optimization: {
	minimizer: [
		new UglifyJsPlugin({
			cache: true,
			parallel: true,
			sourceMap: true
		})
	]
}
};
