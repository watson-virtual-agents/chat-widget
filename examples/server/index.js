const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

var AssistantV2 = require('watson-developer-cloud/assistant/v2');

var assistant = new AssistantV2({
  version: '2018-07-10',
  //iam_apikey: '{apikey}',
  username: '{username}',
  password: '{password',
  url: 'https://gateway.watsonplatform.net/assistant/api'
});

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.route('/:assistant_id/:session_id')
  .options(function (req, res) {
    res.header('Access-Control-Allow-Methods', 'POST');
    return res.sendStatus(200);
  })
  .post((req, res) => {
    assistant.message({
      assistant_id: req.params.assistant_id,
      session_id : req.params.session_id,
      input: Object.assign({}, { message_type : 'text', text : '' }, req.body)
    }, function(err, response) {
      if (err) {
        console.error(err);
        return res.json(err);
      }
      return res.json(response);
    });
  });

app.route('/:assistant_id/')
  .options(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'POST');
    return res.sendStatus(200);
  })
  .post((req, res) => {
    assistant.createSession({
      assistant_id: req.params.assistant_id
    }, function(err, response) {
      if (err) {
        console.error(err);
        return res.json(err);
      }
      res.json(response);
    });
  });

app.use('/*', (req, res) => {
  return res.status(404).json({ message : 'not found' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));