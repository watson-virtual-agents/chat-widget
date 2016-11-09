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

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var RewirePlugin = require("rewire-webpack");

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
var env = process.env.NODE_ENV || 'development';
var mapsServer = MAPS_SERVER[env] || 'https://dd1-i-serve-maps.mybluemix.net';
var filename = 'IBMChatClient-latest.js';
var debug = env === 'development';

var paths = {
  'context': path.resolve(__dirname),
  'entry': path.resolve(__dirname, 'src', 'index.js'),
  'template': path.resolve(__dirname, 'src', 'index.html'),
  'output': path.resolve(__dirname, 'dist')
};

var copyright = "\n* (C) Copyright IBM Corp. 2016. All Rights Reserved.\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except\n* in compliance with the License. You may obtain a copy of the License at\n*\n* http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License\n* is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\n* or implied. See the License for the specific language governing permissions and limitations under\n* the License.\n";

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
    'process.env.MAPS_SERVER': JSON.stringify(mapsServer)
  })].concat(_toConsumableArray(!debug ? [new OccurenceOrderPlugin(), new UglifyJsPlugin({
    output: { comments: false }
  }), new webpack.BannerPlugin(copyright)] : [new HtmlWebpackPlugin({
    template: paths.template,
    inject: 'head',
    hash: true
  })])),
  devServer: {
    port: process.env.PORT || 3100,
    historyApiFallback: true
  }
};
