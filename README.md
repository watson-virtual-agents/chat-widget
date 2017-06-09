# IBM Watson Virtual Agent Chat Widget


| Service  | Master  | Dev |
|----------|---------|-----|
| CI Status | [![Build Status](https://travis-ci.org/watson-virtual-agents/chat-widget.svg?branch=master)](https://travis-ci.org/watson-virtual-agents/chat-widget) | [![Build Status](https://travis-ci.org/watson-virtual-agents/chat-widget.svg?branch=dev)](https://travis-ci.org/watson-virtual-agents/chat-widget) |
| Code Coverage | [![codecov](https://codecov.io/gh/watson-virtual-agents/chat-widget/branch/master/graph/badge.svg)](https://codecov.io/gh/watson-virtual-agents/chat-widget)| [![codecov](https://codecov.io/gh/watson-virtual-agents/chat-widget/branch/dev/graph/badge.svg)](https://codecov.io/gh/watson-virtual-agents/chat-widget)


<p align="center">
  <img src="https://raw.githubusercontent.com/watson-virtual-agents/chat-widget/master/images/screencap.gif" alt="Chat Widget demo"/>
</p>

Lightweight chat widget for [Watson Virtual Agent](https://www.ibm.com/marketplace/cloud/cognitive-customer-engagement/). The widget is built on top of the [Client Bot SDK](https://github.com/watson-virtual-agents/client-sdk), which manages communications with a Watson Virtual Agent bot.

It contains a configurable user interface and can be used as-is or customized. Alternatively, to have ultimate control you can use the [Client Bot SDK](https://github.com/watson-virtual-agents/client-sdk) to build a chat widget of your own.

## Getting Started

### Get API keys

1. (if you don't already have one) Get a set of Watson Virtual Agent API keys:
    1. Sign in for a Free Trial in https://www.ibm.com/marketplace/cloud/cognitive-customer-engagement/
    2. Log in to [/api explorer](https://developer.ibm.com/api/) with the same IBM ID that you used to sign up for the trial subscription
    3. Click the **My APIs** link in the top right, and look for the IBM Watson Virtual Agent tile. Click the key icon, and select the default key.
    <p align="center">
      <img src="https://raw.githubusercontent.com/watson-virtual-agents/chat-widget/dev/images/api_keys_a.png" width="75%" height="auto" />
    </p>
    4. Hover over the key fields, and then click **SHOW** to view the values. You must add these key values into the script later, so save them in a text file for now. The value from the first field is the client ID key. The value from the second field is the client secret token.
    <p align="center">
      <img src="https://raw.githubusercontent.com/watson-virtual-agents/chat-widget/dev/images/api_keys_b.png" width="75%" height="auto" />
    </p>

2. Get your bot ID.

    Your bot ID is assigned when you create the Watson Virtual Agent instance, and is provided in the bot ID parameter of the code snippet that is displayed in the Publish page. You can use the value that is provided there as-is.
    If, for some reason, you want to retrieve the bot ID yourself, follow these steps. The order is important.
    1. Back in the [/api explorer](https://developer.ibm.com/api/), click on the title for the Watson Virtual Agent tile (not the key icon, as above). This will take you to the introduction page.
    2. Click on **Documentation** on the left hand side. It should automatically select the **Runtime API > New Dialog** page.
    3. In the section on the right, click on the **USE** button (will change to "VIEW") and scroll down to the **Retrieve Bot** section (or click "Retrieve Bot" on the right hand side).
    4. From the dropdown labels **Keys**, select **#1 - Key1**.
    <p align="center">
      <img src="https://raw.githubusercontent.com/watson-virtual-agents/chat-widget/dev/images/api_keys_c2.png" width="70%" height="auto" />
    </p>
    The key you selected is now displayed.
    5. Click the `TEST` button. Your bot ID will be listed in the **Response body**.
    <p align="center">
      <img src="https://raw.githubusercontent.com/watson-virtual-agents/chat-widget/dev/images/api_keys_d.png" width="50%" height="auto" />
    </p>

### Using the WVA Chat Widget on Your Site

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

Or in ES6+ syntax...

```js
import IBMChat from '@watson-virtual-agent/chat-widget';
const config = {
  el: 'ibm_chat_root',
  baseURL: 'https://api.ibm.com/virtualagent/run/api/v1',
  botID: 'YOUR_BOT_ID',
  XIBMClientID: 'YOUR_IBM_CLIENT_ID',
  XIBMClientSecret: 'YOUR_IBM_CLIENT_SECRET'
};
IBMChat.init(config);
```

## API

For more details about what you can do once the widget is up and running, see:
- [DOCS.md](https://github.com/watson-virtual-agents/chat-widget/blob/master/docs/DOCS.md)
- [JSDOCS.md](https://github.com/watson-virtual-agents/chat-widget/blob/master/docs/JSDOCS.md)
- [EVENTS.md](https://github.com/watson-virtual-agents/chat-widget/blob/master/docs/EVENTS.md)


## Watson Virtual Agent Documentation

Additional documentation related to Watson Virtual Agent can be found in [www.ibm.com/watson/developercloud/doc/virtual-agent/wva_overview.shtml](https://www.ibm.com/watson/developercloud/doc/virtual-agent/wva_overview.shtml).

## Questions and issues

Report bugs or feature requests to our [github issue tracker](https://github.com/watson-virtual-agents/chat-widget/issues).
For questions please refer to [StackOverflow](http://stackoverflow.com/questions/tagged/watson-virtual-agent) under tag `watson-virtual-agent` or [DeveloperWorks Answers](https://developer.ibm.com/answers/topics/watson-virtual-agent).


## Contributing

See [CONTRIBUTING.md](https://github.com/watson-virtual-agents/chat-widget/blob/master/CONTRIBUTING.md).

## License

This code is licensed under Apache 2.0. Full license text is available in [LICENSE](https://github.com/watson-virtual-agents/chat-widget/blob/master/LICENSE).
