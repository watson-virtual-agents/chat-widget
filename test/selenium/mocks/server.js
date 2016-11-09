var http = require("http");
var url = require("url");
var PORT = 3201;
var botID = '77', chatID = '42', message;

function router(handle, pathname, req, res) {
  if (typeof handle[pathname] === 'function') {
    handle[pathname](req, res);
  } else {
    res.writeHead(404);
    res.end();
  }
}

function onRequest(req, res) {
  var pathname = url.parse(req.url).pathname;
  router(handle, pathname, req, res);
}

function init(req, res) {
  var response = JSON.stringify({
    "bot_id": "77",
    "dialog_id": "42",
    "message": {
      "text": ["Hi my name is Virtual Agent. I am here to answer questions about our company. What can I help you with?"]
    }
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(response);
}

function receive(req, res) {
  var string = JSON.stringify(message);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(string);
}

function setMessage(req, res) {
  res.writeHead(200);
  res.end();
}

var handle = {};
handle['/bots/'+ botID + '/dialogs'] = init;
handle['/bots/'+ botID +'/dialogs/'+ chatID +'/messages'] = receive;
handle['/setmessage'] = setMessage;

http.createServer(onRequest).listen(PORT, function() {
  console.log("Server has started and listening on "+ PORT );
});
