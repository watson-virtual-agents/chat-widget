/**
* (C) Copyright IBM Corp. 2017. All Rights Reserved.
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
      'test/**/*.spec.js': ['webpack'],
      'src/**/*.js': ['coverage']
    },

    reporters: ['spec', 'progress', 'coverage'],

    coverageReporter: {
      type: 'lcov',
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
