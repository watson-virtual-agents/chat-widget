## Events

<dl>
<dt><a href="#event_resize">"resize"</a></dt>
<dd><p>Resize event. Forces a resize of the Chat UI elements to current parent element.</p>
</dd>
<dt><a href="#event_send">"send"</a></dt>
<dd><p>Send event. Sends a message.</p>
</dd>
<dt><a href="#event_sendMock">"sendMock"</a></dt>
<dd><p>sendMock event. Displays a message in the UI, but does not send it to the Watson Virtual Agent.</p>
</dd>
<dt><a href="#event_receive">"receive"</a></dt>
<dd><p>Receive event.</p>
</dd>
<dt><a href="#event_disable-loading">"disable-loading"</a></dt>
<dd><p>Disable loading event. Hide loading state.</p>
</dd>
<dt><a href="#event_enable-input">"enable-input"</a></dt>
<dd><p>Enable Input event. Allows submitting from input field when it has been disabled.</p>
</dd>
<dt><a href="#event_disable-input">"disable-input"</a></dt>
<dd><p>Disable Input event. Disallows submitting from input field.</p>
</dd>
<dt><a href="#event_enable-loading">"enable-loading"</a></dt>
<dd><p>Enable Loading event. Shows loading state.</p>
</dd>
<dt><a href="#event_error">"error"</a></dt>
<dd><p>Error event.</p>
</dd>
<dt><a href="#event_scroll-to-bottom">"scroll-to-bottom"</a></dt>
<dd><p>Scroll to bottom event. Scrolls chat content into correct positioning.</p>
</dd>
</dl>

## "resize"
Resize event. Forces a resize of the Chat UI elements to fix current parent element.

**Kind**: event emitted  
**Example**  
```js
IBMChat.publish('resize');
IBMChat.subscribe('resize', function(){

});
```
<a name="event_send"></a>

## "send"
Send event. Sends a message.

**Kind**: event emitted  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> |  |
| data.text | <code>string</code> | Text to send to Watson Virtual Agent |
| data.sendSilently | <code>boolean</code> | whether or not to show in UI, defaults to true |

**Example**  
```js
IBMChat.publish('send', data);
IBMChat.subscribe('send', function(data){

});
```
<a name="event_sendMock"></a>

## "sendMock"
sendMock event. Displays a message in the UI, but does not send it to the Watson Virtual Agent.

**Kind**: event emitted  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> |  |
| data.text | <code>string</code> | Text to send to Watson Virtual Agent |
| data.sendSilently | <code>boolean</code> | whether or not to show in UI, defaults to true |

**Example**  
```js
IBMChat.publish('sendMock', data);
IBMChat.subscribe('sendMock', function(data){

});
```
<a name="event_receive"></a>

## "receive"
Receive event.

**Kind**: event emitted  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| message | <code>Object</code> | A message object. |

**Example**  
```js
IBMChat.publish('receive', message);
IBMChat.subscribe('receive', function(message){

});
```
<a name="event_disable-loading"></a>

## "disable-loading"
Disable loading event. Hides loading state.

**Kind**: event emitted  
**Example**  
```js
IBMChat.publish('disable-loading');
IBMChat.subscribe('disable-loading', function(){

});
```
<a name="event_enable-input"></a>

## "enable-input"
Enable Input event. Allows submitting from input field when it has been disabled.

**Kind**: event emitted  
**Example**  
```js
IBMChat.publish('enable-input');
IBMChat.subscribe('enable-input', function(){

});
```
<a name="event_disable-input"></a>

## "disable-input"
Disable Input event. Disallows submitting from input field.

**Kind**: event emitted  
**Example**  
```js
IBMChat.publish('disable-input');
IBMChat.subscribe('disable-input', function(){

});
```
<a name="event_enable-loading"></a>

## "enable-loading"
Enable Loading event. Shows loading state.

**Kind**: event emitted  
**Example**  
```js
IBMChat.publish('enable-loading', 'string to display');
IBMChat.subscribe('enable-loading', function(){

});
```
<a name="event_error"></a>

## "error"
Error event.

**Kind**: event emitted  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| error | <code>Object</code> | Error object. |

**Example**  
```js
IBMChat.publish('error', error);
IBMChat.subscribe('error', function(error){

});
```
<a name="event_scroll-to-bottom"></a>

## "scroll-to-bottom"
Scroll to bottom event. Scrolls chat content into correct positioning.

**Kind**: event emitted  
**Example**  
```js
IBMChat.publish('scroll-to-bottom');
IBMChat.subscribe('scroll-to-bottom', function(){

});
```
