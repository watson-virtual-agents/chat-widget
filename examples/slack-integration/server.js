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

/*eslint-env node*/
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
/*eslint-disable */
var http = require('http').Server(app);
/*eslint-enable */
var io = require('socket.io')(http);
var request = require('request');
var socket;
var keyword = process.env.KEYWORD;
var port = process.env.PORT || 3600;
var url = process.env.HOST || 'localhost';

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Serves the files out of ./public as our main files
app.use(express.static(__dirname + '/dist'));

http.listen(port, function() {
  console.log("server starting on " + url + ":" + port);
});

io.on("connection", function(s) {
  console.log('Connected');
  socket = s;
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//Get message from an agent
app.post('/agent', function(req, res) {
  var message = { text: req.body.text, attachments: [] };
  if (req.body.data) {
    for (var i in req.body.data) {
      var mes = req.body.data[i];
      if (mes.message && mes.message.length>0) {
        var color = (mes.author === 'Bot') ? '#9c27b0' :'#428ff4';
        message.attachments.push(
          {
            "fallback": req.body.text,
            "color": color,
            "author_name": mes.author,
            "text": mes.message
          }
        );
      }
    }
  }
  postToSlack(message);
  res.send('Done');
});

//Post message to Slack
app.post('/slack', function(req) {
  console.log('Message from slack!');
  if (req.body.token === process.env.SLACK_OUTGOING_TOKEN && req.body.user_name !== 'slackbot') {
    if (req.body.text === keyword)
      socket.compress(false).emit('slackMessage', { text: '!Q@W#E$R' });
    else
      socket.compress(false).emit('slackMessage', req.body);
  }
});

function postToSlack(message) {
  // Set the headers
  var headers = {
    'Content-Type': 'application/json'
  };
  // Configure the request
  var options = {
    url: process.env.SLACK_INCOMING_WEBHOOK,
    method: 'POST',
    headers: headers,
    json: message
  };
  // Start the request
  request(options, function(error, response) {
    if (!error && response.statusCode == 200) {
      // Success
    }
  });
}
