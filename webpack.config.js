const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = (env, argv) => {
	console.log('argv', argv.mode);
	return {
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'main.js',
			publicPath: '/',
		},
		devServer: {
			static: path.resolve(__dirname, 'build'),
			compress: true,
			port: 3000,
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					type: 'asset/resource',
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(__dirname, './public/index.html'),
				filename: 'index.html',
				inject: 'body',
				favicon: path.join(__dirname, '/src/assets/images/favicon-32x32.png'),
			}),
		],
	};
};
module.exports = config;
