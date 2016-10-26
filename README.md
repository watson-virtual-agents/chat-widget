# IBM Watson Virtual Agent Chat Widget

![Chat Widget example screencap](https://github.com/najimovi/chat-widget/blob/dev/images/screencap-compressed.gif)

Lightweight chat widget for [Watson Virtual Agent](https://www.ibm.com/marketplace/cloud/cognitive-customer-engagement/). The widget is built on top of the [Client Bot SDK](https://github.com/watson-virtual-agents/client-sdk), which manages communications with a Watson Virtual Agent bot. 

It contains a configurable user interface and can be used as-is or customized. Alternatively, to have ultimate control you can use the [Client Bot SDK](https://github.com/watson-virtual-agents/client-sdk) to build a chat widget of your own.

## Getting Started

1. Clone this repository

    ```bash
        git clone https://github.com/watson-virtual-agents/chat-widget.git
    ```
  
2. (if you don't already have one) Get a set of Watson Virtual Agent API keys:
    1. Sign in for a Free Trial in https://www.ibm.com/marketplace/cloud/cognitive-customer-engagement/
    2. Log in to [/api explorer](https://developer.ibm.com/api/) with the same IBM ID that you used to sign up for the trial subscription
    3. Click the My APIs link, and look for the IBM Watson Virtual Agent tile. Click the key icon, and select the default key.
    4. Hover over the key fields, and then click SHOW to view the values. You must add these key values into the script later, so save them in a text file for now. The value from the first field is the client ID key. The value from the second field is the client secret token.

3. Get your bot ID.

    1. Click the IBM Watson Virtual Agent tile.
    2. Click **Keys**, and select the default key.
    3. Scroll down to the **Retrieve bot** call.
    4. Add '2016-09-16' as the version parameter value, and click **Test**.
    5. Copy the 32-digit alphanumeric code that is returned in the response and paste it in a text file because you will need it later.

4. Open `src/index.html` in your favorite text editor and set the values for the `botID`, `XIBMClientID` and `XIBMClientSecret` parameters:
    ```html
        <script>
            window.IBMChat.init({
                el: 'ibm_element',
                baseURL: 'https://api.ibm.com/virtualagent/run/api/v1/',
                botID: '',              // replace with Bot ID
                XIBMClientID: '',       // replace with Client ID
                XIBMClientSecret: ''    // replace with Client Secret
            }).then(function(){
                window.IBMChat.debug();
            });
        </script>
    ```

5. Save your changes.

    **Important**: Keep the values of the IBMClientID and IBMClientSecret as private as possible.

6. Run the following commands using [Node](https://nodejs.org/) 4.x or higher:

    ```bash
    npm install
    npm run watch
    ```

7. Navigate to `http://localhost:3100`.

## Questions and issues

Report bugs or feature requests to our [github issue tracker](https://github.com/watson-virtual-agents/chat-widget/issues). 
For questions please refer to [StackOverflow](http://stackoverflow.com/questions/tagged/watson-virtual-agent) under tag `watson-virtual-agent` or [DeveloperWorks Answers](https://developer.ibm.com/answers/topics/watson-virtual-agent).

## API

For detailed API Documentation please see [./docs/JSDOCS.md](./docs/JSDOCS.md)

## Watson Virtual Agent Documentation

Additional documentation related to Watson Virtual Agent can be found in [www.ibm.com/watson/developercloud/doc/virtual-agent/wva_overview.shtml](https://www.ibm.com/watson/developercloud/doc/virtual-agent/wva_overview.shtml)

## Customization

For more details about what you can do once the widget is up and running, see [./docs/DOCS.md](./docs/DOCS.md) and [./docs/JSDOCS.md](./docs/JSDOCS.md).

## License

This code is licensed under Apache 2.0. Full license text is available in [LICENSE](https://github.com/watson-virtual-agents/chat-widget/blob/master/LICENSE)