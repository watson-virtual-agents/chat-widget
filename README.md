# IBM Watson Virtual Agent Chat Widget


| Service  | Master  | Dev |
|----------|---------|-----|
| CI Status | [![Build Status](https://travis-ci.org/watson-virtual-agents/chat-widget.svg?branch=master)](https://travis-ci.org/watson-virtual-agents/chat-widget) | [![Build Status](https://travis-ci.org/watson-virtual-agents/chat-widget.svg?branch=dev)](https://travis-ci.org/watson-virtual-agents/chat-widget) |
| Code Coverage | [![codecov](https://codecov.io/gh/watson-virtual-agents/chat-widget/branch/master/graph/badge.svg)](https://codecov.io/gh/watson-virtual-agents/chat-widget)| [![codecov](https://codecov.io/gh/watson-virtual-agents/chat-widget/branch/dev/graph/badge.svg)](https://codecov.io/gh/watson-virtual-agents/chat-widget)


### Using the WVA Chat Widget on Your Site

In order for the WVA widget to work with Watson Assistant, you must use a server in between to deal with the differences in contracts. See examples/server for a NON PRODUCTION READY example.

You can copy this HTML code block into a file, give it an .html extension, and view it in a browser to see a quick and basic example. Replace the value of baseURL with http://youdomain.com/:assistant_id.

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
<script src='chat.min.js'></script>
<script>
  var config = {
    el: 'ibm_chat_root',
    baseURL: 'https://examples.com/:assistant_id'
  };
  window.IBMChat.init(config);
</script>
</body>
</html>
```

### Changes for Watson Assistant

Layouts no longer exist. Use "response_types". The text, image and option response_types are implemented for you at src/events/handlers/receive.js.

Watson Assistant does not support WVA's concept of client side "actions". You must use callouts from dialog to achieve that functionality.

## API

For more details about what you can do once the widget is up and running, see:
- [JSDOCS.md](https://github.com/watson-virtual-agents/chat-widget/blob/master/docs/JSDOCS.md)
- [EVENTS.md](https://github.com/watson-virtual-agents/chat-widget/blob/master/docs/EVENTS.md)


## License

This code is licensed under Apache 2.0. Full license text is available in [LICENSE](https://github.com/watson-virtual-agents/chat-widget/blob/master/LICENSE).
