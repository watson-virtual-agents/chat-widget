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

var http = require("http");
var url = require("url");
var PORT = 3201;
var botID = '77', chatID = '42', message = false;
var AccessControlAllowHeaders = 'X-Request-ID, Content-Type, X-IBM-Client-ID, X-IBM-Client-Secret';
var headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': AccessControlAllowHeaders };

function router(handle, pathname, req, res) {
  if (typeof handle[pathname] === 'function') {
    handle[pathname](req, res);
  } else {
    res.writeHead(404);
    res.end();
  }
}

function onRequest(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(201, headers);
    res.end();
  } else {
    var pathname = url.parse(req.url).pathname;
    router(handle, pathname, req, res);
  }
}

function init(req, res) {
  var response = JSON.stringify({
    "bot_id": "77",
    "dialog_id": "42",
    "message": {
      "text": ["Hi my name is Virtual Agent. I am here to answer questions about our company. What can I help you with?"]
    }
  });
  res.writeHead(200, headers);
  res.end(response);
}

function receive(req, res) {
  var string;
  if (message) {
    string = JSON.stringify(message);
  } else {
    var queryData = url.parse(req.url, true).query;
    string = JSON.stringify({
      "message": {
        "text": ['You sent: ' + queryData.message]
      }
    });
  }
  message = false;
  res.writeHead(200, headers);
  res.end(string);
}

function setMessage(req, res) {
  var body = '';
  req.on('data', function(data) {
    body += data;
  });
  req.on('end', function() {
    body = JSON.parse(body);
    if(typeof body.message === 'string') {
      message = {
        "message": {
          "text": [body.message]
        }
      };
    } else {
      message = body.message;
    }
    res.writeHead(200, headers);
    res.end(JSON.stringify(message));
  });
}

var handle = {};
handle['/bots/'+ botID + '/dialogs'] = init;
handle['/bots/'+ botID +'/dialogs/'+ chatID +'/messages'] = receive;
handle['/setmessage'] = setMessage;

http.createServer(onRequest).listen(PORT, function() {
  console.log("Server has started and listening on "+ PORT );
});
