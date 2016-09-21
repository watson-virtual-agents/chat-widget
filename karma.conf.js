// var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
	config.set({
		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// all files ending in "-test"
		// (recommended loading approach per https://github.com/webpack/karma-webpack)
		files: [
			'test/index.js'
		],

		// frameworks to use
		frameworks: ['mocha'],

		preprocessors: {
			// only specify one entry point
			// and require all tests in there
			'test/index.js': ['webpack']
		},

		reporters: ['spec', 'coverage'],

		coverageReporter: {
			type: 'html',
			dir: 'build/coverage/'
		},

		webpack: webpackConfig,
		/*
		webpack: {
			// webpack configuration
			module: {
				loaders: [{
					test: /\.css$/,
					loader: "style!css"
				}, {
					test: /\.less$/,
					loader: "style!css!less"
				}],
				postLoaders: [{
					test: /\.js/,
					exclude: /(test|node_modules)/,
					loader: 'istanbul-instrumenter'
				}]
			},
			resolve: {
				modulesDirectories: [
					"",
					"src",
					"node_modules"
				]
			}
		},
		*/
		
		// webpack-dev-middleware configuration
		webpackMiddleware: {
			noInfo: true
		},

		plugins: [
			require("karma-webpack"),
			require("istanbul-instrumenter-loader"),
			require("karma-mocha"),
			require("karma-coverage"),
			require("karma-chrome-launcher"),
			require("karma-phantomjs-launcher"),
			require("karma-spec-reporter")
		],

		// browsers: ['Chrome']
		browsers: ['PhantomJS']
	});
};