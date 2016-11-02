<a name="IBMChat"></a>

## IBMChat : <code>object</code>
**Kind**: global namespace  

* [IBMChat](#IBMChat) : <code>object</code>
    * [.profile](#IBMChat.profile) : <code>object</code>
        * [.get(key)](#IBMChat.profile.get) ⇒ <code>Any</code>
        * [.set(key, value)](#IBMChat.profile.set) ⇒ <code>[profile](#IBMChat.profile)</code>
        * [.has(key)](#IBMChat.profile.has) ⇒ <code>Boolean</code>
        * [.clear()](#IBMChat.profile.clear) ⇒ <code>[profile](#IBMChat.profile)</code>
        * [.delete(key)](#IBMChat.profile.delete) ⇒ <code>[profile](#IBMChat.profile)</code>
        * [.forEach(callback, this)](#IBMChat.profile.forEach) ⇒ <code>[profile](#IBMChat.profile)</code>
    * [.init(config)](#IBMChat.init) ⇒ <code>Promise</code>
    * [.restart()](#IBMChat.restart) ⇒ <code>Promise</code>
    * [.destroy()](#IBMChat.destroy) ⇒ <code>Promise</code>
    * [.send(message)](#IBMChat.send) ⇒ <code>[IBMChat](#IBMChat)</code>
    * [.receive(message)](#IBMChat.receive) ⇒ <code>[IBMChat](#IBMChat)</code>
    * [.sendMock(message)](#IBMChat.sendMock) ⇒ <code>[IBMChat](#IBMChat)</code>
    * [.sendSilently(message)](#IBMChat.sendSilently) ⇒ <code>[IBMChat](#IBMChat)</code>
    * [.registerLayout(layout, init)](#IBMChat.registerLayout) ⇒ <code>[IBMChat](#IBMChat)</code>
    * [.enableCustomInputHandler(config)](#IBMChat.enableCustomInputHandler) ⇒ <code>[IBMChat](#IBMChat)</code>
    * [.disableCustomInputHandler()](#IBMChat.disableCustomInputHandler) ⇒ <code>[IBMChat](#IBMChat)</code>
    * [.focusInput()](#IBMChat.focusInput) ⇒ <code>[IBMChat](#IBMChat)</code>
    * [.disableInput()](#IBMChat.disableInput) ⇒ <code>[IBMChat](#IBMChat)</code>
    * [.enableInput()](#IBMChat.enableInput) ⇒ <code>[IBMChat](#IBMChat)</code>
    * [.subscribe(eventName, callback, context)](#IBMChat.subscribe) ⇒ <code>Object</code>
    * [.publish(eventName, data)](#IBMChat.publish) ⇒ <code>[IBMChat](#IBMChat)</code>
    * [.currentSubscriptions()](#IBMChat.currentSubscriptions) ⇒ <code>Array</code>
    * [.debug()](#IBMChat.debug) ⇒ <code>[IBMChat](#IBMChat)</code>

<a name="IBMChat.profile"></a>

### IBMChat.profile : <code>object</code>
**Kind**: static namespace of <code>[IBMChat](#IBMChat)</code>  

* [.profile](#IBMChat.profile) : <code>object</code>
    * [.get(key)](#IBMChat.profile.get) ⇒ <code>Any</code>
    * [.set(key, value)](#IBMChat.profile.set) ⇒ <code>[profile](#IBMChat.profile)</code>
    * [.has(key)](#IBMChat.profile.has) ⇒ <code>Boolean</code>
    * [.clear()](#IBMChat.profile.clear) ⇒ <code>[profile](#IBMChat.profile)</code>
    * [.delete(key)](#IBMChat.profile.delete) ⇒ <code>[profile](#IBMChat.profile)</code>
    * [.forEach(callback, this)](#IBMChat.profile.forEach) ⇒ <code>[profile](#IBMChat.profile)</code>

<a name="IBMChat.profile.get"></a>

#### profile.get(key) ⇒ <code>Any</code>
Get an item from the user profile based on key.

**Kind**: static method of <code>[profile](#IBMChat.profile)</code>  
**Returns**: <code>Any</code> - Returns: the value of the key in the profile map.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The named key of the value you are accessing. |

**Example**  
```js
IBMChat.profile.get('first_name');
```
<a name="IBMChat.profile.set"></a>

#### profile.set(key, value) ⇒ <code>[profile](#IBMChat.profile)</code>
Set an item from the user profile based on key.

**Kind**: static method of <code>[profile](#IBMChat.profile)</code>  
**Returns**: <code>[profile](#IBMChat.profile)</code> - - Returns IBMChat.profile for chaining.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The named key of the value you are setting. |
| value | <code>string</code> | The value you are setting. |

**Example**  
```js
IBMChat.profile.set('first_name', 'john');
```
<a name="IBMChat.profile.has"></a>

#### profile.has(key) ⇒ <code>Boolean</code>
See if an item from the user profile exists based on key.

**Kind**: static method of <code>[profile](#IBMChat.profile)</code>  
**Returns**: <code>Boolean</code> - - Boolean indicating if the key exists.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The named key of the value you are checking the existence of. |

**Example**  
```js
IBMChat.profile.has('first_name');
```
<a name="IBMChat.profile.clear"></a>

#### profile.clear() ⇒ <code>[profile](#IBMChat.profile)</code>
Clear the entire user profile.

**Kind**: static method of <code>[profile](#IBMChat.profile)</code>  
**Returns**: <code>[profile](#IBMChat.profile)</code> - - Returns IBMChat.profile for chaining.  
**Example**  
```js
IBMChat.profile.clear();
```
<a name="IBMChat.profile.delete"></a>

#### profile.delete(key) ⇒ <code>[profile](#IBMChat.profile)</code>
Delete an item from the user profile based on key.

**Kind**: static method of <code>[profile](#IBMChat.profile)</code>  
**Returns**: <code>[profile](#IBMChat.profile)</code> - - Returns IBMChat.profile for chaining.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The named key of the value you are deleting. |

**Example**  
```js
IBMChat.profile.delete('first_name');
```
<a name="IBMChat.profile.forEach"></a>

#### profile.forEach(callback, this) ⇒ <code>[profile](#IBMChat.profile)</code>
Iterate over the profile.

**Kind**: static method of <code>[profile](#IBMChat.profile)</code>  
**Returns**: <code>[profile](#IBMChat.profile)</code> - - Returns IBMChat.profile for chaining.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The function you are calling on each item in the profile object. This function is passed key as the first argument and value as the second argument. |
| this | <code>Object</code> | (optional) The context you wish to call the callback in. |

**Example**  
```js
IBMChat.profile.forEach(function(key, value) {
  console.log(key, value);
});
```
<a name="IBMChat.init"></a>

### IBMChat.init(config) ⇒ <code>Promise</code>
Generate the chat widget into an element.

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>Promise</code> - Returns: A promise so you can call functions after the widget has been initialized.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| config | <code>Object</code> |  |  |
| config.el | <code>string</code> |  | Takes a string representing the ID of an html element to be rendered to OR a selected element |
| config.botID | <code>string</code> |  | The unique identifier of your Virtual Agent. |
| config.userID | <code>string</code> |  | A hashed non-identifiable (e.g. not a users email address or public user id) unique ID used for tracking in the Engagement Metrics dashboard. |
| config.baseURL | <code>string</code> | <code>&quot;https://api.ibm.com/virtualagent/run/api/v1/&quot;</code> | optional: specifies a different bot hosting server. The most common use-case for this param is to point the widget to a server that will add X-IBM-Client-Id and X-IBM-Client-Secret headers to the request. |
| config.XIBMClientID | <code>string</code> |  | optional: Your IBMClientID... this should not be made public in a public environment. Including this will add X-IBM-Client-Id as a header to your request. |
| config.XIBMClientSecret | <code>string</code> |  | optional: Your IBMClientSecret... this should not be made public in a public environment. Including this will add X-IBM-Client-Secret as a header to your request. |
| config.errorHandler | <code>function</code> |  | optional: A function that takes an error object as a param if there is a problem with communicating with your Virtual Agent. By default, if an error is received, the user is escalated to a live agent. You may, however, want to handle some errors differently (401 for instance) |
| config.errorHandlerContext | <code>Object</code> |  | optional: A "this" value for the errorHandler. |
| config.styles | <code>Object</code> |  | optional: Override default styling. |
| config.styles.background | <code>string</code> | <code>&quot;rgba(61,61,61,1)&quot;</code> | optional: rgba(X, X, X, X) or hex code for background color |
| config.styles.text | <code>string</code> | <code>&quot;#ffffff&quot;</code> | optional: rgba(X, X, X, X) or hex code for main text color |
| config.styles.link | <code>string</code> | <code>&quot;#ffffff&quot;</code> | optional: rgba(X, X, X, X) or hex code for color of links in text |
| config.styles.secondaryBackground | <code>string</code> | <code>&quot;rgba(70,70,70,1)&quot;</code> | optional: rgba(X, X, X, X) or hex code for background color of chat bubbles and other secondary info |
| config.styles.secondaryText | <code>string</code> | <code>&quot;rgba(247,247,247,1)&quot;</code> | optional: rgba(X, X, X, X) or hex code for color of chat bubble text and other secondary info |
| config.styles.inputBackground | <code>string</code> | <code>&quot;rgba(70,70,70,1)&quot;</code> | optional: rgba(X, X, X, X) or hex code for background color of input elements in forms |
| config.styles.inputText | <code>string</code> | <code>&quot;rgba(247,247,247,1)&quot;</code> | optional: rgba(X, X, X, X) or hex code for color of input text in forms |
| config.styles.accentText | <code>string</code> | <code>&quot;#ffffff&quot;</code> | optional: rgba(X, X, X, X) or hex code for text colors to be used in conjunction with accentBackground e.g. button text |
| config.styles.accentBackground | <code>string</code> | <code>&quot;rgba(175,110,232,1)&quot;</code> | optional: rgba(X, X, X, X) or hex code for accent colors used by the chat application e.g. buttons |
| config.styles.errorText | <code>string</code> | <code>&quot;#ffffff&quot;</code> | optional: rgba(X, X, X, X) or hex code for text colors to be used in conjunction with errorBackground e.g. button text |
| config.styles.errorBackground | <code>string</code> | <code>&quot;rgba(239,62,58,1)&quot;</code> | optional: rgba(X, X, X, X) or hex code for error colors used by the chat application e.g. validation buttons |

**Example**  
```js
IBMChat.init({
 el: 'my_div',
 botID: 'xxxxxxxxxxxxxx'
 styles: {
   background: "#000000"
 }
}).then(function(){
    console.log('initialize');
});
//or
var el = document.querySelector('.my-widget-container');
IBMChat.init({
 el: el,
 botID: 'xxxxxxxxxxxxxx'
 styles: {
   background: "#000000"
 }
}).then(function(){
    console.log('initialize');
});
```
<a name="IBMChat.restart"></a>

### IBMChat.restart() ⇒ <code>Promise</code>
Restart the chat widget. The same chat widget is rendered in the same html element as was specified in the init method.

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>Promise</code> - Returns: A promise so you can call functions after the widget has been initialized.  
**Example**  
```js
IBMChat.restart().then(function(){
    console.log('restarted');
});
```
<a name="IBMChat.destroy"></a>

### IBMChat.destroy() ⇒ <code>Promise</code>
Destroy the chat widget and restore the original HTML content. Useful if the chat widget is displayed in a modal, for example, and you want it to go away when the modal is closed.

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>Promise</code> - Returns: A promise so you can call functions after the widget has been destroyed.  
**Example**  
```js
IBMChat.destroy().then(function(){
    console.log('destroyed');
});
```
<a name="IBMChat.send"></a>

### IBMChat.send(message) ⇒ <code>[IBMChat](#IBMChat)</code>
Send a message to the chat widget from outside the chat widget. This message will be displayed in the interface.

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>[IBMChat](#IBMChat)</code> - - Returns IBMChat for chaining.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | A message you want to send to the chat widget. |

**Example**  
```js
IBMChat.send('Hello world.');
```
<a name="IBMChat.receive"></a>

### IBMChat.receive(message) ⇒ <code>[IBMChat](#IBMChat)</code>
Mock receiving a message to the chat widget from outside the chat widget.

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>[IBMChat](#IBMChat)</code> - - Returns IBMChat for chaining.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | A message you want to show as received in the chat widget. |

**Example**  
```js
IBMChat.receive('Hello world.');
```
<a name="IBMChat.sendMock"></a>

### IBMChat.sendMock(message) ⇒ <code>[IBMChat](#IBMChat)</code>
Send a message to the chat widget from outside the chat widget. This message will be displayed in the interface, but will not actually get sent to the server.

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>[IBMChat](#IBMChat)</code> - - Returns IBMChat for chaining.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | A message you want to pretend to send to the chat widget. |

**Example**  
```js
IBMChat.sendMock('Hello world.');
```
<a name="IBMChat.sendSilently"></a>

### IBMChat.sendSilently(message) ⇒ <code>[IBMChat](#IBMChat)</code>
Send a message to the chat widget from outside the chat widget. This message will NOT be displayed in the interface.

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>[IBMChat](#IBMChat)</code> - - Returns IBMChat for chaining.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | A message you want to send to the chat widget, but not de displayed in the interface. |

**Example**  
```js
IBMChat.sendSilently('Hello world.');
```
<a name="IBMChat.registerLayout"></a>

### IBMChat.registerLayout(layout, init) ⇒ <code>[IBMChat](#IBMChat)</code>
Register a custom layout with the chat widget. Call registerLayout() before you call init().

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>[IBMChat](#IBMChat)</code> - - Returns IBMChat for chaining.  

| Param | Type | Description |
| --- | --- | --- |
| layout | <code>string</code> | The name of the layout your bot will provide when it is triggered to render a layout. |
| init | <code>function</code> | A function that runs one time, when the chat widget is bootstrapped. Be sure to subscribe to the "layout:YOUR_LAYOUT_NAME" event in this function. |

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
<a name="IBMChat.enableCustomInputHandler"></a>

### IBMChat.enableCustomInputHandler(config) ⇒ <code>[IBMChat](#IBMChat)</code>
Override how inputs into the chat text box are handled. e.g. you may wish to send messages to your live agent instead of to your virtual agent.

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>[IBMChat](#IBMChat)</code> - - Returns IBMChat for chaining.  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> |  |
| config.callback | <code>function</code> | A function that receives a message and resolve and reject functions as params |
| config.context | <code>boolean</code> | (optional) A value for "this" in your callback function |

**Example**  
```js
IBMChat.enableCustomInputHandler({
  callback: function(message, resolve, reject) {
    //do something like send the message to your live customer service rep
    IBMChat.receive('A message from your live customer service rep');
    resolve(); // gets rid of loading spinner and allows the chat text box to accept another message
    // reject(error);
 }
});
```
<a name="IBMChat.disableCustomInputHandler"></a>

### IBMChat.disableCustomInputHandler() ⇒ <code>[IBMChat](#IBMChat)</code>
Return chat input boxes handling to the default provided handler.

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>[IBMChat](#IBMChat)</code> - - Returns IBMChat for chaining.  
**Example**  
```js
IBMChat.disableCustomInputHandler();
```
<a name="IBMChat.focusInput"></a>

### IBMChat.focusInput() ⇒ <code>[IBMChat](#IBMChat)</code>
Set focus to the chat text box. Useful if you want users to be able to just start typing into the text box without having to click in the text box first to set focus.

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>[IBMChat](#IBMChat)</code> - - Returns IBMChat for chaining.  
**Example**  
```js
IBMChat.focusInput();
```
<a name="IBMChat.disableInput"></a>

### IBMChat.disableInput() ⇒ <code>[IBMChat](#IBMChat)</code>
Prevent users from submitting messages in the chat text box. Useful when you want the user to interact with a layout instead.

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>[IBMChat](#IBMChat)</code> - - Returns IBMChat for chaining.  
**Example**  
```js
IBMChat.disableInput();
```
<a name="IBMChat.enableInput"></a>

### IBMChat.enableInput() ⇒ <code>[IBMChat](#IBMChat)</code>
Enable users to submit messages in the chat text box. Useful when you want users to be able to return to adding messages to the chat text box after interacting with a layout.

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>[IBMChat](#IBMChat)</code> - - Returns IBMChat for chaining.  
**Example**  
```js
IBMChat.enableInput();
```
<a name="IBMChat.subscribe"></a>

### IBMChat.subscribe(eventName, callback, context) ⇒ <code>Object</code>
Subscribe to an IBMChat event. See [./EVENTS.md](./EVENTS.md) for more details.

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>Object</code> - - Returns object with a .remove function to destroy the subscription  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Takes a string representing the name of the event |
| callback | <code>function</code> | function to run when event is called |
| context |  | optional: value of "this" in the function |

**Example**  
```js
var mySubscription = IBMChat.subscribe('the-end-of-the-world', function(message) {
  console.log(message);
  mySubscription.remove(); // remove subscription
});
```
<a name="IBMChat.publish"></a>

### IBMChat.publish(eventName, data) ⇒ <code>[IBMChat](#IBMChat)</code>
Publish an IBMChat event. See [./EVENTS.md](./EVENTS.md) for more details.

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>[IBMChat](#IBMChat)</code> - - Returns IBMChat for chaining.  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | A string that represents the name of the event data |
| data |  | Data to pass to the callback function of any subscribed functions. Accepts any data type. |

**Example**  
```js
IBMChat.publish('the-end-of-the-world', 'panic!');
```
<a name="IBMChat.currentSubscriptions"></a>

### IBMChat.currentSubscriptions() ⇒ <code>Array</code>
See a list of current event subscriptions. See [./EVENTS.md](./EVENTS.md) for more details.

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>Array</code> - - Array of events and callbacks.  
**Example**  
```js
IBMChat.currentSubscriptions();
```
<a name="IBMChat.debug"></a>

### IBMChat.debug() ⇒ <code>[IBMChat](#IBMChat)</code>
Turns on a whole bunch of verbose console.log statements!

**Kind**: static method of <code>[IBMChat](#IBMChat)</code>  
**Returns**: <code>[IBMChat](#IBMChat)</code> - - Returns IBMChat for chaining.  
**Example**  
```js
IBMChat.debug()
```
