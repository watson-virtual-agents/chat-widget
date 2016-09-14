# Quick Start

1) Determine where on the web page you want the bot's chat window to be displayed. Associate the chat window with the `<div>` HTML element that defines the target area, and then add an ID attribute to the `<div>` element so you can refer to it later. Embed and initialize the Watson Virtual Agent Chat Widget by copying the following scripts and pasting them as close to the closing `</body>` tag as possible.

```html
<script src='https://dp1-bot-chat.mybluemix.net/IBMChat-v1.0.0.js'></script>
<script>
  IBMChat.init({
    el: 'ibm_chat_root',
    baseURL: 'https://dev.api.ibm.com/virtualagent/development/api/v1/',
    botID: 'YOUR_BOT_ID',
    IBMClientID: 'YOUR_IBM_CLIENT_ID',
    IBMClientSecret: 'YOUR_IBM_CLIENT_SECRET'
  });
</script>
```
In order to retrieve the IBMClientID and IBMClientSecret, log into to the API Manager at [https://developer.ibm.com/api/](https://developer.ibm.com/api/). The first time you log into this site, you will be prompted to enter a username. After clicking 'Next',  a linked titled 'My APIs' will appear in the top right. Find the API called 'Watson Virtual Agent' and click on the key icon to the right. A menu should expand below revealing your automatically generated API key. These figures are hidden for security. Hover over the fields to find a 'SHOW' button. After clicking this button, the IBMClientID (top field) and IBMClientSecret (bottom field) will both be visible. These values can now be used in the widget.

Now, click on 'Watson Virtual Agent'. This page demonstrates the api calls that developers can use to interact with the bot. On the left sidebar, click 'Keys' and select the default key. Scroll down and find the 'Retrieve Bot' call. For the version parameter, enter '2016-09-16' then simply click 'Test' to retrieve your botID. This should be a 32 digit alphanumeric code following the format of '00000000-0000-0000-0000-000000000000'.

2) Update the values of the following parameters in the second script:

- el: The ID of the element that you identified in Step 1.
- botID: This value is automatically populated with the unique ID of your bot.
- IBMClientID: Your IBM client ID.
- IBMClientSecretToken: Your IBM client secret token.

**Important:** Do not publicize the values of IBMClientID and IBMClientSecret. They are available to the Chat Widget as configuration options for development purposes. To safeguard the values, consider having a server between the Chat Widget and the bot that will add `X-IBM-Client-Id` and `X-IBM-Client-Secret` as headers to the request when you publish your widget on a public site.

After you paste the script, the Chat Widget is associated with and rendered to an HTML element that you can hide or show and position. The widget extends to the full height and width of the element. The maximum width is 768 pixels, and the minimum height is 300 pixels.

## Sample

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
<script src='https://dp1-bot-chat.mybluemix.net/IBMChat-v1.0.0.js'></script>
<script>
  IBMChat.init({
    el: 'ibm_chat_root',
    baseURL: 'https://dev.api.ibm.com/virtualagent/development/api/v1/',
    botID: 'YOUR_BOT_ID',
    IBMClientID: 'YOUR_IBM_CLIENT_ID',
    IBMClientSecret: 'YOUR_IBM_CLIENT_SECRET'
  });
</script>
</body>
</html>
```

## Moving to production

In your production environment, you should replace the baseURL with a server of your own. This server should add the `X-IBM-Client-Id` and `X-IBM-Client-Secret` headers to the request and forward them on to https://dev.api.ibm.com/virtualagent/development/api/v1/. `X-IBM-Client-Id` and `X-IBM-Client-Secret` are used for billing, so it is of utmost importance you keep them secret.

## Advanced Configuration

To extend the basic setup, you can manipulate the theme and securely hide your IBMClientID and IBMClientSecret values.

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> |  |
| config.el | <code>string</code> | Takes a string representing the ID of an html element to be rendered to OR a selected element |
| config.botID | <code>string</code> | the unique identifier of your Bot. |
| config.baseURL | <code>string</code> | (optional) Specifies a different bot hosting server. The most common use case for this param is to point the widget to a server that will add X-IBM-Client-Id and X-IBM-Client-Secret headers to the request. |
| config.XIBMClientID | <code>string</code> | (optional) Your IBMClientID... this should not be made public in a public environment. Including this will add X-IBM-Client-Id as a header to your request. |
| config.XIBMClientSecret | <code>string</code> | (optional) Your IBMClientSecret... this should not be made public in a public environment. Including this will add X-IBM-Client-Secret as a header to your request. |
| config.styles | <code>Object</code> | (optional) override default styling. |
| config.styles.background | <code>string</code> | (optional) hex code for background color |
| config.styles.text | <code>string</code> | (optional) hex code for main text color |
| config.styles.link | <code>string</code> | (optional) hex code for color of links in text |
| config.styles.secondaryBackground | <code>string</code> | (optional) hex code for background color of chat bubbles and other secondary info |
| config.styles.secondaryText | <code>string</code> | (optional) hex code for color of chat bubble text and other secondary info |
| config.styles.inputBackground | <code>string</code> | (optional) hex code for background color of input elements |
| config.styles.inputText | <code>string</code> | (optional) hex code for color of input text |
| config.styles.accentText | <code>string</code> | (optional) hex code for text colors to be used in conjunction with accentBackground i.e. button text |
| config.styles.accentBackground | <code>string</code> | (optional) hex code for accent colors used by the chat application i.e. buttons |

In the following code example, the baseURL adds the IBMClientID and IBMClientSecretToken to the request headers before the request is passed to the bot, and the theme colors are lightened.

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
