# Quick Start

1. Determine where on the web page you want the bot's chat window to be displayed. Associate the chat window with the `<div>` HTML element that defines the target area, and then add an ID attribute to the `<div>` element so you can refer to it later.

2. Get your API keys and Virtual Agent ID.

- To prove that you have permission to use the Watson Virtual Agent API services, the following keys must be associated with any API calls that are made to the service from the virtual agent user interface:
Client ID
Client secret token
a. Go to the IBM developerWorks API Explorer site (https://apiexplorer.rtp.raleigh.ibm.com/test/explorer/), and sign in with the same IBM ID that was used to sign up for the service subscription. Create a user name, and then click Next.
b. Click the My APIs link, and look for the IBM Watson Virtual Agent tile. Click the key icon, and select the default key.
c. Two keys are automatically generated. Hover over the key fields, and then click SHOW.
d. You must add these key values into the script later, so save them in a text file for now. The value from the first field is the client ID key. The value from the second field is the client secret token.

- Now, generate your bot.
a. Click the IBM Watson Virtual Agent tile, and then click Keys. Select the default key.
b. Scroll down to the Retrieve bot call.
c. Add '2016-09-16' as the version parameter value, and then click Test.
d. Copy the 32-digit alphanumeric code that is returned in the response. Save it because this is the bot ID that you will need later.

3. Return to this Configure page, and revise the second script:

```html
<script src='https://dp1-bot-chat.mybluemix.net/IBMChat-v1.0.1.js'></script>
<script>
  IBMChat.init({
    el: 'ibm_chat_root',
    baseURL: 'https://dev.api.ibm.com/virtualagent/run/api/v1/',
    botID: 'YOUR_BOT_ID',
    IBMClientID: 'YOUR_IBM_CLIENT_ID',
    IBMClientSecret: 'YOUR_IBM_CLIENT_SECRET'
  });
</script>
```

Replace all of the parameter values except the baseURL; use that value as-is.

- el: Specify the ID of the element that you chose to use in Step 1.
- botID: Add the bot ID you generated earlier.
- IBMClientID: Add the client ID key value that you copied earlier.
- IBMClientSecret: Add the Client secret token value that you copied earlier.

**Important: Keep the values of the IBMClientID and IBMClientSecret as private as possible.**

4. Embed and initialize the Watson Virtual Agent chat widget by pasting the revised scripts into your web page. Add them as close to the closing `</body>` tag as possible to prevent the script from blocking the rest of the page from rendering, and to ensure that whichever element you associated with the script will be fully rendered by the time the script is executed.

5. Refresh the web page and give the virtual agent a try!

The chat widget is associated with and rendered to the HTML element that you designated in step 1. You can hide or show and position that element. The widget extends to the full height and width of the element. The maximum width is 768 pixels, and the minimum height is 300 pixels.

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
<script src='https://dp1-bot-chat.mybluemix.net/IBMChat-v1.0.1.js'></script>
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
