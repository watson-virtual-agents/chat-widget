var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
	config.set({
		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// all files ending in '.spec.js'
		files: [
			'test/**/*.spec.js'
		],

		// frameworks to use
		frameworks: ['mocha'],

		preprocessors: {
			// only specify one entry point
			// and require all tests in there
			'test/**/*.spec.js': ['webpack']
		},
		
		reporters: ['spec', 'coverage'],

		coverageReporter: {
			type: 'html',
			dir: 'build/coverage/'
		},

		webpack: webpackConfig,

		plugins: [
			require("karma-webpack"),
			require("istanbul-instrumenter-loader"),
			require("karma-mocha"),
			require("karma-coverage"),
			require("karma-chrome-launcher"),
			require("karma-phantomjs-launcher"),
			require("karma-spec-reporter")
		],

		browsers: ['PhantomJS', 'Chrome']
	});
};
