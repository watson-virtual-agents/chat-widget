# Basic Custom Actions Example

This example shows how to use "actions" as part of your flow in the chat widget. We will be using actions to update a users address.

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
Please see [our actions documentation](https://github.com/watson-virtual-agents/chat-widget/blob/master/docs/DOCS.md#actions) for additional information.
