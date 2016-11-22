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

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
      arr2[i] = arr[i];
    return arr2;
  } else {
    return Array.from(arr);
  }
}

function checkEnvFlags() {
  if (process.argv.indexOf('-development') > -1)
    return 'development';
  if (process.argv.indexOf('-staging') > -1)
    return 'staging';
  if (process.argv.indexOf('-production') > -1)
    return 'production';
  return false;
}

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var RewirePlugin = require("rewire-webpack");
var version = require('./package.json').version;

var DefinePlugin = webpack.DefinePlugin;
var NoErrorsPlugin = webpack.NoErrorsPlugin;
var DedupePlugin = webpack.optimize.DedupePlugin;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;


var MAPS_SERVER = {
  'development': 'https://dd1-i-serve-maps.mybluemix.net',
  'staging': 'https://ds1-i-serve-maps.mybluemix.net',
  'production': 'https://dp1-i-serve-maps.mybluemix.net'
};

var env = checkEnvFlags() || process.env.NODE_ENV || 'development';
var minify = (process.argv.indexOf('-minify') > -1) ? true : false;
var mapsServer = MAPS_SERVER[env] || 'https://dd1-i-serve-maps.mybluemix.net';
var filename = (minify) ? 'chat.min.js' : 'chat.js';
var debug = env === 'development';

var paths = {
  'context': path.resolve(__dirname),
  'entry': path.resolve(__dirname, 'src', 'index.js'),
  'output': path.resolve(__dirname, 'dist')
};

if (debug)
  paths.template = path.resolve(__dirname, 'dev-tools', 'index.html');

var copyright = "\n* (C) Copyright IBM Corp. 2016. All Rights Reserved.\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except\n* in compliance with the License. You may obtain a copy of the License at\n*\n* http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License\n* is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\n* or implied. See the License for the specific language governing permissions and limitations under\n* the License.\n";

function conditionalPlugins() {
  var arr = [];
  if (minify) {
    arr = [
      new OccurenceOrderPlugin(),
      new UglifyJsPlugin({
        output: { comments: false }
      }),
      new webpack.BannerPlugin(copyright)
    ];
  } else {
    arr = (!debug) ? [
      new webpack.BannerPlugin(copyright)
    ] : [
      new HtmlWebpackPlugin({
        template: paths.template,
        inject: 'head',
        hash: true
      })
    ];
  }
  return _toConsumableArray(arr);
}

module.exports = {
  target: 'web',
  debug: debug,
  cache: debug,
  devtool: debug ? 'inline-sourcemap' : null,
  stats: { colors: true },
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      'sinon': 'sinon/pkg/sinon'
    }
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
  preLoaders: [{ test: /\.js$/,
    loader: 'eslint-loader',
    exclude: /node_modules/
  }].concat(_toConsumableArray(!debug ? [] : [{
    exclude: /src\//,
    loader: 'source-map'
  }])),
  module: {
    preLoaders: [{
      // instrument only testing sources with Istanbul
      test: /\.js$/,
      include: path.resolve('src/'),
      loader: 'istanbul-instrumenter'
    }],
    loaders: [{
      loader: 'raw',
      test: /\.html$/
    }, {
      loaders: ['style', 'raw'],
      test: /\.css$/
    }, {
      loader: 'json',
      test: /\.json$/
    }],
    noParse: [
      /node_modules\/sinon\//,
    ]
  },
  plugins: [ new NoErrorsPlugin(), new DedupePlugin(), new RewirePlugin(), new DefinePlugin({
    'process.env.DEBUG': JSON.stringify(debug),
    'process.env.MAPS_SERVER': JSON.stringify(mapsServer),
    'process.env.CHAT_VERSION': JSON.stringify(version)
  })].concat(conditionalPlugins()),
  devServer: {
    port: process.env.PORT || 3100,
    historyApiFallback: true
  }
};
