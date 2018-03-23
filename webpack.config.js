/**
 * @overview Webpack configuration.
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const OUTPUT_PATH = 'dist';

const config = {
	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, OUTPUT_PATH),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react'],
							plugins: [
								'transform-class-properties',
								'transform-object-rest-spread'
							]
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					}, {
						loader: 'css-loader'
					},{
						loader: 'sass-loader'
					}
				]
			},

			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['eslint-loader']
    }
		]
	},

	resolve: {
		extensions: [
			'.js', '.jsx'
		]
	},

	devServer: {
	    port: 3000,
	},

	// Webpack plugins:
	plugins: [
		new HtmlWebpackPlugin({template: './src/index.html'})
	]
};

module.exports = config;