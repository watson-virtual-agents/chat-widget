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
