'use strict'

const webpack 				  = require('webpack')
const autoprefixer 	 	 	  = require('autoprefixer')
const UglifyJs 				  = require('uglifyjs-webpack-plugin')
const path 					  = require('path')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

const paths = {
	src: path.resolve(__dirname, 'src/assets/'),
	view: path.resolve(__dirname, 'dist/view'),
	dist: path.resolve(__dirname, 'dist/assets'),
	styles: path.resolve(__dirname, 'src/assets/styles'),
	components: path.resolve(__dirname, 'src/assets/components'),
	services: path.resolve(__dirname, 'src/assets/services'),
	image: path.resolve(__dirname, 'src/assets/image')
}

const NODE_ENV = process.env.NODE_ENV || 'development'

if (NODE_ENV === 'production') {
	module.exports.optimization = {
		minimizer: [new UglifyJs()]
	}
}

module.exports = {
	mode: NODE_ENV,
	context: paths.src,
	entry: {
		app: 'app.js',
	},
	output: {
		path: paths.dist,
		filename: '[name].js'
	},
	devtool: NODE_ENV === 'development' ? 'source-map' : false,


	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV),
			LANG: JSON.stringify('ru')
		}),

		new webpack.ProvidePlugin({
		  'window.jQuery': 'jquery',
		  $: 'jquery',
		  jQuery: 'jquery'
		}),
	],

	module: {
		rules: [
		{
			test: /\.m?jsx?$/,
			exclude: '/node_modules/',
			use: [
				{
					loader: 'babel-loader',
				}
			]
		},
		{
			test: /\.sass$/,
			use: [
				{
					loader: 'style-loader'
				},
				{
					loader: 'css-loader',
					options: {
						sourceMap: true,
						importLoaders: 1, 
						modules: true,
						localsConvention: 'camelCase'
					}
				},
				{
 					loader: 'postcss-loader',
 					options: {
 						plugins: [
 							autoprefixer({
 								overrideBrowserslist: ['ie >= 8', 'last 4 version']
 							})
 						],
 						sourceMap: true
 					}
				},
				{
					loader: 'sass-loader',
				}
			]
		}, 
		]
	},

	resolve: {
		modules: ["node_modules", paths.src, paths.components, paths.styles],
		alias: {
			Styles: paths.styles,
			Components: paths.components,
			Services: paths.services,	
			Image: paths.image	
		}
	},

	watch: NODE_ENV === 'development',

	watchOptions: {
		aggregateTimeout: 50
	},

	devServer: {
    	contentBase: paths.view,
    	publicPath: '/',
    	port: 3000,
    	historyApiFallback: true
  }
}
	
