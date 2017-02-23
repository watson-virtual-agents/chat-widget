# Basic Custom Layout Example

This example shows how to create a simple custom layout for the chat widget.

In the example we'll override a built in layout (the `choose` layout ) so that we display a dropdown instead of buttons which is the default behavior.

## Installing and Running Locally
  1. set the `botID`, `XIBMClientID` and `XIBMClientSecret` parameters in [src/index.js](./src/index.js) (see [Getting Started](https://github.com/watson-virtual-agents/chat-widget/blob/master/README.md#getting-started) for further details on this):

  ```javascript
        IBMChat.init({
            el: 'ibm_el',
            baseURL: 'https://api.ibm.com/virtualagent/run/api/v1/',
            botID: '',              // replace with Bot ID
            XIBMClientID: '',       // replace with Client ID
            XIBMClientSecret: ''    // replace with Client Secret
        });
  ```
  2. `npm install`
  3. `npm start`
  4.  open `http://localhost:3030`

## Building and Running on a Server

  1. Complete step 1 above.
  2. Complete step 2 above.
  3. `npm run build`
  4. Upload `index.html` and `bundle.js`

## Additional Documentation
Please see [registering a custom layout](https://github.com/watson-virtual-agents/chat-widget/blob/master/docs/DOCS.md#registering-a-custom-layout) for additional information.
