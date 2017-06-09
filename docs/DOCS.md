## Quick Sample

You can copy this HTML code block into a file, give it an .html extension, and view it in a browser to see a quick and basic example. Replace the values of the botID, XIBMClientID, and XIBMClientSecret parameters.

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
<!--
https://unpkg.com/@watson-virtual-agent/chat-widget@X.X.X/dist/chat.min.js for a specific version, where X.X.X is the semantic version of the chat widget.
NOTE: unpkg.com is not affiliated with IBM and not recommended for production.
NOTE: In your production environment, we recommend locking down your widget version.
-->
<script src='https://unpkg.com/@watson-virtual-agent/chat-widget/dist/chat.min.js'></script>
<script>
  var config = {
    el: 'ibm_chat_root',
    baseURL: 'https://api.ibm.com/virtualagent/run/api/v1',
    botID: 'YOUR_BOT_ID',
    XIBMClientID: 'YOUR_IBM_CLIENT_ID',
    XIBMClientSecret: 'YOUR_IBM_CLIENT_SECRET'
  };
  window.IBMChat.init(config);
</script>
</body>
</html>
```

You can also install this package from npm with `npm install @watson-virtual-agent/chat-widget` and include it as part of your own scripts and build process.

```js
var IBMChat = require('@watson-virtual-agent/chat-widget');
var config = {
  el: 'ibm_chat_root',
  baseURL: 'https://api.ibm.com/virtualagent/run/api/v1',
  botID: 'YOUR_BOT_ID',
  XIBMClientID: 'YOUR_IBM_CLIENT_ID',
  XIBMClientSecret: 'YOUR_IBM_CLIENT_SECRET'
};
IBMChat.init(config);
```

## Advanced Configuration

To extend the basic setup, you can manipulate the theme and securely hide your XIBMClientID and XIBMClientSecret values.

In the following code example, the baseURL adds the `X-IBM-Client-Id` and `X-IBM-Client-Secret` to the request headers before the request is passed to the bot ([./PROXY.md](./PROXY.md)), and the theme colors are lightened.

For a full breakdown of the options for the init function, see [./JSDOCS.md](./JSDOCS.md);

**Example**  
```js

var IBMChat = require('@watson-virtual-agent/chat-widget');

IBMChat.init({
 el: 'my_element',
 botID: 'YOUR_BOT_ID',
 baseURL: 'https://example.com/botProxy', //this would be your own server
 styles: {
	 background: 'rgba(255, 255, 255, 0.8)', //use rgba
	 text: 'rgba(0, 0, 0, 1)',
	 accentBackground: '#31eaf1', //or a hex code
	 accentText: '#ffffff',
	 secondaryBackground: '#f7f7f7',
	 secondaryText: '#464646',
	 link: '#ffffff'
 }
});
```
You would then send an HTTP response to the POST from the Chat Widget with a JSON object returning the data received as is.


## Moving to production

In your production environment, you should replace the baseURL with a server of your own. This server should add the `X-IBM-Client-Id` and `X-IBM-Client-Secret` headers to the request and forward them on to https://api.ibm.com/virtualagent/run/api/v1. `X-IBM-Client-Id` and `X-IBM-Client-Secret` are used for billing, so it is of utmost importance you keep them secret.[./PROXY.md](./PROXY.md).

## Events

The Chat UI is written in a PubSub architecture and exposes many events that you may wish to subscribe to when creating your own custom layouts. For a list of events provided by default, see [./EVENTS.md](./EVENTS.md). You can subscribe to events using `IBMChat.subscribe(event, cb)` and publish an event using `IBMChat.publish(event, data)`. `Action` and `Layout` events are published with the `action:ACTION_NAME` and `layout:LAYOUT_NAME` format.


## Actions

Actions are included in the bot response when the UI is expected to take an action. Examples of actions include processing a credit card or updating an address. An action is thrown as an event and expects *success*, *failure* or *cancel* as a response.

```js
IBMChat.subscribe('action:updateAddress', function(data){
	//make an ajax call to update a user address using "data"
	IBMChat.sendSilently('success');
	// or IBMChat.sendSilently('failure'); or IBMChat.sendSilently('cancel');
});
```

The one exception is `action:agent`, which does not expect a response.

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
var IBMChat = require('@watson-virtual-agent/chat-widget');
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

For a simple example of creating a custom layout please see `/examples/basic-custom-layout`

## Private Identifiable Information (PII)

Do not send PII to the bot. Externally save PII by using functions subscribed to actions. To store PII for the chat widget to use, use the IBMChat.profile.set method.

**Example**

```js
IBMChat.profile.set({
	cc_number: '1234567812345678'
})
```

If the bot responds with `|&cc_number|` in its message response, the chat widget replaces that key with the stored PII to be rendered in the widget.

Access the profile information in your layouts and action handlers with the IBMChat.profile.get function.
