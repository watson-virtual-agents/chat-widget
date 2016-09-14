# IBM Watson Virtual Agent Chat Widget

The widget is related to the [Client Bot SDK](https://github.ibm.com/watson-industry-apps/bot-client-sdk), which manages communications with a Watson Virtual Agent bot, private variables, and incoming and outgoing message event handling. The widget is built on top of the Client Bot SDK, and it contains a configurable user interface and a set of utilities. You can use it as-is, or you can customize it. Alternatively, if you want to have ultimate control of your very own chat widget, use the Client Bot SDK to build one.

## Getting started

1. Clone this repository.
2. Get your API keys. To prove that you have permission to use the Watson Virtual Agent API services as a trial user, the following keys must be associated with any API calls that are made to the service from the virtual agent user interface: Client ID and Client secret token.
    1. Log in to [/api explorer](https://developer.ibm.com/api/) with the same IBM ID that you used to sign up for the trial subscription.
    2. Create a user name, and click **Next**.
    3. Click the **My APIs** link, and look for the IBM Watson Virtual Agent tile.
    4. Click the key icon, and select the default key. Two keys are automatically generated.
    5. Hover over the key fields, and click **Show**.
    6. Copy these key values and paste them in a text file for now so that you can add them to a file later. The value from the first field is the client ID key. The value from the second field is the client secret token.
3. Get your bot ID.
    1. Click the IBM Watson Virtual Agent tile.
    2. Click **Keys**, and select the default key.
    3. Scroll down to the **Retrieve bot** call.
    4. Add '2016-09-16' as the version parameter value, and click **Test**.
    5. Copy the 32-digit alphanumeric code that is returned in the response and paste it in a text file because you will need it later.
3. Open `src/index.html` in your favorite text editor so that you can paste values for the `botID`, `XIBMClientID`, and `XIBMClientSecret` parameters.
4. Locate the botID, XIBMClientID, and XIBMClientSecret parameters, and paste their values that you saved in a text file.
5. Save your changes.

**Important**: Keep the values of the IBMClientID and IBMClientSecret as private as possible.

6. Run the following commands:

```console
npm install
npm run watch
```
7. Navigate to http://localhost:3100.

For more details about getting started, see [./docs/DOCS.md](./docs/DOCS.md), and for advanced documentation about using our JavaScript, see [./docs/JSDOCS.md](./docs/JSDOCS.md).
