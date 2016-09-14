# Watson Virtual Agent Chat Widget

Use this JavaScript widget with a Watson Virtual Agent. It is framework-free and customizable, and you can embed it in any web site.

The widget is related to the [Watson Virtual Agent Client SDK](https://github.com/watson-virtual-agents/client-sdk), which manages communications with a Watson Virtual Agent bot, private variables, and incoming and outgoing message event handling. The widget is built on top of the Client SDK, and it contains a configurable user interface and a set of utilities. You can use it as-is, or you can customize it. Alternatively, if you want to have ultimate control of your very own chat widget, use the Client Bot SDK to build one.

## Getting started

1. Clone this repository.
2. Open `src/index.html` in your favorite text editor, and specify values for the following parameters:

* `botID`: The ID of your Virtual Agent
* `IBMClientID`: Your IBM Billing ID
* `IBMClientSecret`: Your IBM Billing Secret Key

**Remember**: Never expose the `IBMClientID` and `IBMClientSecret` values on a public site.

In order to retrieve the IBMClientID and IBMClientSecret, log into to the API Manager at [https://developer.ibm.com/api/](https://developer.ibm.com/api/). The first time you log into this site, you will be prompted to enter a username. After clicking 'Next',  a linked titled 'My APIs' will appear in the top right. Find the API called 'Watson Virtual Agent' and click on the key icon to the right. A menu should expand below revealing your automatically generated API key. These figures are hidden for security. Hover over the fields to find a 'SHOW' button. After clicking this button, the IBMClientID (top field) and IBMClientSecret (bottom field) will both be visible. These values can now be used in the widget.

Now, click on 'Watson Virtual Agent'. This page demonstrates the api calls that developers can use to interact with the bot. On the left sidebar, click 'Keys' and select the default key. Scroll down and find the 'Retrieve Bot' call. For the version parameter, enter '2016-09-16' then simply click 'Test' to retrieve your botID. This should be a 32 digit alphanumeric code following the format of '00000000-0000-0000-0000-000000000000'.

3. Run the following commands:

```console
npm install
npm run watch
```

4. Navigate to http://localhost:3100.

For more details about getting started, see [./docs/DOCS.md](./docs/DOCS.md), and for advanced documentation about using our JavaScript, see [./docs/JSDOCS.md](./docs/JSDOCS.md).
