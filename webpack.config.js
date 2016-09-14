/**
* (C) Copyright IBM Corp. 2016. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
* in compliance with the License. You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under the License
* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
* or implied. See the License for the specific language governing permissions and limitations under
* the License.
*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { DefinePlugin, NoErrorsPlugin } = webpack;
const {
	DedupePlugin,
	UglifyJsPlugin,
	OccurenceOrderPlugin } = webpack.optimize;
const MAPS_SERVER = {
	'development': 'https://dd1-i-serve-maps.mybluemix.net',
	'staging': 'https://ds1-i-serve-maps.mybluemix.net',
	'production': 'https://dp1-i-serve-maps.mybluemix.net'
};
const env = process.env.NODE_ENV || 'development';
const mapsServer = MAPS_SERVER[env] || 'https://dd1-i-serve-maps.mybluemix.net';
const filename = `IBMChatClient-latest.js`;
const debug = (env === 'development');

const paths = {
	'context': path.resolve( __dirname ),
	'entry': path.resolve( __dirname, 'src', 'index.js' ),
	'template': path.resolve( __dirname, 'src', 'index.html' ),
	'output': path.resolve( __dirname, 'dist' )
};

module.exports = {
	target: 'web',
	debug: debug,
	cache: debug,
	devtool: debug ? 'inline-sourcemap' : null,
	stats: { colors: true },
	resolve: {
		extensions: ['', '.js', '.json']
	},

	env: env,
	context: paths.context,
	entry: paths.entry,
	output: {
		path: paths.output,
		filename: filename,
		libraryTarget: 'umd',
		library: 'IBMChat',
		umdNamedDefine: true
	},
	preLoaders: [
		{	test: /\.js$/,
			loader: "eslint-loader",
			exclude: /node_modules/
		},
		...(!debug
			? [ ]
			: [ {
				exclude: /src\//,
				loader: 'source-map'
			} ])
	],
	module: {
		loaders: [{
			loader: 'raw',
			test: /\.html$/
		}, {
			loaders: ['style', 'raw'],
			test: /\.css$/
		}, {
			loader: 'json',
			test: /\.json$/
		}]
	},
	plugins: [
		new NoErrorsPlugin(),
		new DedupePlugin(),
		new DefinePlugin({
			'process.env.DEBUG': JSON.stringify( debug ),
			'process.env.MAPS_SERVER': JSON.stringify( mapsServer )
		}),
		...(!debug
			? [
				new OccurenceOrderPlugin(),
				new UglifyJsPlugin({
					output: { comments: false }
				})
			]
			: [ new HtmlWebpackPlugin({
				template: paths.template,
				inject: 'head',
				hash: true
			})
		])
	],
	devServer: {
		port: process.env.PORT || 3100,
		historyApiFallback: true
	}
};
