## Quick Sample

You can copy this HTML code block into a file, give it an .html extension, and view it in a browser to see a quick and basic example. Replace the values of the botID, IBMClientID, and IBMClientSecretToken parameters.

```html
<html>
<head>
<title>IBM Watson Virtual Agent Chat Widget Sample</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
<style>
  html, body, iframe { width: 100%; height:100%; padding:0; margin:0; }
  #ibm_chat_root { position:fixed; bottom:0; right: 20px; height: 80%; min-height:400px; width:300px; background:#000; }
</style>
</head>
<body>
<div id="ibm_chat_root"></div>
<iframe style="width:100%; height:100%" src="http://www.ibm.com/en-us"></iframe>
<script src='https://dp1-bot-chat.mybluemix.net/IBMChat-latest.js'></script>
<script>
  IBMChat.init({
    el: 'ibm_chat_root',
    baseURL: 'https://api.ibm.com/virtualagent/run/api/v1',
    botID: 'YOUR_BOT_ID',
    IBMClientID: 'YOUR_IBM_CLIENT_ID',
    IBMClientSecret: 'YOUR_IBM_CLIENT_SECRET'
  });
</script>
</body>
</html>
```

## Advanced Configuration

To extend the basic setup, you can manipulate the theme and securely hide your IBMClientID and IBMClientSecret values.

In the following code example, the baseURL adds the IBMClientID and IBMClientSecretToken to the request headers before the request is passed to the bot, and the theme colors are lightened.

For a full breakdown of the options for the init function, see [./JSDOCS.md](./JSDOCS.md);

**Example**  
```js
IBMChat.init({
 el: 'my_element',
 botID: 'YOUR_BOT_ID',
 baseURL: 'https://example.com/botProxy',
 styles: {
	 background: '#ffffff',
	 accentBackground: '#31eaf1',
	 accentText: '#ffffff',
	 secondaryBackground: '#f7f7f7',
	 secondaryText: '#464646'
 }
});
```

## Moving to production

In your production environment, you should replace the baseURL with a server of your own. This server should add the `X-IBM-Client-Id` and `X-IBM-Client-Secret` headers to the request and forward them on to https://api.ibm.com/virtualagent/run/api/v1. `X-IBM-Client-Id` and `X-IBM-Client-Secret` are used for billing, so it is of utmost importance you keep them secret.

## Actions

Actions are included in the bot response when the UI is expected to take an action. Examples of actions include processing a credit card or updating an address. An action is thrown as an event and expects *success*, *failure* or *cancel* as a response.

```js
IBMChat.subscribe('action:update_address', function(data){
	//make an ajax call to update a user address using "data"
	IBMChat.sendSilently('success');
	// or IBMChat.sendSilently('failure'); or IBMChat.sendSilently('cancel');
});
```

*If an action is thrown and there is nothing subscribed to it, the user will be escalated to a human agent.*

## Layouts

Layouts are special non-text renderings inside the widget. For example, a layout might be a map that shows the nearest locations of a store or a credit card form. Consider the following example:

```js
{
	"message": {
		"layout": {
			"name": "my_layout"
		}
	}
}
```

A bot that contains this code as part of the response object renders the "my_layout" layout, if it is registered.

### Registering a Custom Layout

Add a custom layout by using the registerLayout function. The registerLayout function takes a layout name and an init function as its parameters. The init function subscribes to the 'layout: + layout name' event.

**Example**  
```js
var PlumberBrothers = require('../plumber-brothers-game');
var config = {};

function initGame() {
 IBMChat.subscribe('layout:plumber-brothers-game', function(obj) {
  var uuid = obj.uuid;
  var parentElement = obj.element;
  var layoutElement = obj.layoutElement;
  var msgElement = obj.msgElement;
  var message = obj.message;
  var data = obj.data;
  msgElement.textContent = 'Loading Plumber Brothers!';
  var brothers = new PlumberBrothers();
  brothers.render(layoutElement, data).then(function() {
    msgElement.textContent = 'Enjoy your game of Plumber Brothers!';
  });
 }
});

IBMChat.registerLayout('plumber-brothers-game', initGame);
IBMChat.init(config);
```

If you add a custom layout with the same name as a current layout, the custom layout overwrites the current layout.

## Private Identifiable Information (PII)

Do not send PII to the bot. Externally save PII by using functions subscribed to actions. To store PII for the chat widget to use, use the IBMChat.setProfile method.

**Example**

```js
IBMChat.setProfile({
	cc_number: '1234567812345678'
})
```

If the bot responds with `|&cc_number|` in its message response, the chat widget replaces that key with the stored PII to be rendered in the widget.

Access the profile information in your layouts and action handlers with the IBMChat.getProfile function.
