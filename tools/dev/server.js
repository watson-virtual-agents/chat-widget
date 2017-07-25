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
const selfsigned = require('selfsigned');
const config = require('../../webpack.config.js');
const devServers = {};

const HOST = process.env.HOST || '0.0.0.0';
const HOSTNAME = process.env.HOSTNAME || 'www.local.dev';
const PORT = process.env.PORT || 3100;

function run(conf) {
  conf = conf || {};

  const host = conf.host || HOST;
  const port = conf.port || PORT;
  const hostname = conf.hostname || HOSTNAME;

  if (!devServers[conf.index]) {
    const compiler = webpack( config );

    let https = false;
    if (conf.https) {
      console.log('Generating SSL Certificate');
      const attrs = [
        { name: 'commonName', value: HOSTNAME },
        { name: 'subjectAltName', value: HOSTNAME }
      ];
      const pem = selfsigned.generate(attrs, {
        algorithm: 'sha256',
        days: 30,
        keySize: 2048
      });
      https = {
        key: pem.private,
        cert: pem.cert
      };
    }

    const devServerConfig = {
      publicPath: '/',
      historyApiFallback: true,
      noInfo: true,
      hot: conf.hot || true,
      host: host,
      https: https,
      public: `${hostname}:${port}`,
    };
    devServers[conf.index] = (new WebpackDevServer( compiler, devServerConfig));

    devServers[conf.index].listen( port, host, err => {
      if ( err ) console.log( err );
      console.log(`Listening at ${hostname}:${port}`);
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
