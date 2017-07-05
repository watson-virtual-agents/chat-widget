# Basic Internationalization Example

This example shows how initialize the chat widget so it will display text in different languages.

## Installing and Running Locally
  1. Set the `botID`, `XIBMClientID` and `XIBMClientSecret` parameters in [src/index.js](./src/index.js) (see [Getting Started](https://github.com/watson-virtual-agents/chat-widget/blob/master/README.md#getting-started) for further details on this):

  ```javascript
        IBMChat.init({
            el: 'ibm_el',
            baseURL: 'https://api.ibm.com/virtualagent/run/api/v1/',
            botID: '',              // replace with Bot ID
            XIBMClientID: '',       // replace with Client ID
            XIBMClientSecret: ''    // replace with Client Secret
        });
  ```
  2. Set the `locale` and `langBundle`, a JSON object containing the translated strings, indexed by locale.

  ```javascript
        var langs = ... // load language bundle JSON
        IBMChat.init({
            el: 'ibm_el',
            locale: 'es',
            langBundle: langs,
            baseURL: 'https://api.ibm.com/virtualagent/run/api/v1/',
            botID: '',              // replace with Bot ID
            XIBMClientID: '',       // replace with Client ID
            XIBMClientSecret: ''    // replace with Client Secret
        });
  ```
  3. `npm install`
  4. `npm start`
  5.  open `http://localhost:3030`

## Building and Running on a Server

  1. Complete steps 1-3 above.
  2. `npm run build`
  3. Upload `index.html` and `bundle.js`
