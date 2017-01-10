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

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../../webpack.config.js');
const devServers = {};

function run(conf) {
  conf = conf || {};
  if (!devServers[conf.index]) {
    const compiler = webpack( config );
    const devServerConfig = {
      publicPath: '/',
      historyApiFallback: true,
      noInfo: true,
      hot: conf.hot || true,
      https: conf.https || false
    };
    devServers[conf.index] = (new WebpackDevServer( compiler, devServerConfig));

    const host = '127.0.0.1';
    const port = conf.port || process.env.PORT || 3100;

    devServers[conf.index].listen( port, host, err => {
      if ( err ) console.log( err );
      console.log(`Listening at ${host}:${port}`);
    });
  } else {
    console.log('You already have a webpack-dev-server for ' + conf.index + ' running.');
  }
}

function stop(index) {
  devServers[index].close();
}

module.exports = {
  run: run,
  stop: stop,
  devServers: devServers
};
