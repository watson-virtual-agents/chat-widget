## Proxy Example

It's important to protect your WVA Client ID and Client Secret Key to prevent unwanted charges and modification.  This example allows you to keep them server-side.

###Node.js

**Installation**

This example uses [Express](http://expressjs.com/) and [request](https://github.com/request/request), install them in your project.

```js
npm install express --save
npm install request --save
```
**Server**

This creates a simple Express server that forwards any request to the local /WVA/ route to the IBM endpoint and returns the response.

```js
var express = require('express');
var request = require('request');

var app = express();

app.use(express.static('public'));

var options = {
    url: '',
    headers: {
        'X-IBM-Client-Id': 'YOUR_CLIENT_ID',
        'X-IBM-Client-Secret': 'YOUR_CLIENT_SECRET'
    }
};

app.all('/wva/*', function(req, res) {
    options.url = 'https://api.ibm.com/virtualagent/run/api/v1' + req.url.replace('/wva', '');
    req.pipe(request.post(options)).pipe(res);
});

app.listen(process.env.PORT || 3000);
```
**Client**

Remove XIBMClientID and XIBMClientSecret, if you're using them in client-side pages.  The widget <code>init</code> call can be as simple as:

```js
IBMChat.init({
        el: 'ibm_chat_root',
        botID: 'YOUR_BOT_ID',
        baseURL: 'http://localhost:3000/wva/'
    });
```
