# Quick Start

1. Determine where on the web page you want the bot's chat window to be displayed. Associate the chat window with the `<div>` HTML element that defines the target area, and then add an ID attribute to the `<div>` element so you can refer to it later.

2. Get your API keys and Virtual Agent ID.

- To prove that you have permission to use the Watson Virtual Agent API services, the following keys must be associated with any API calls that are made to the service from the virtual agent user interface:
Client ID
Client secret token
a. Go to the IBM developerWorks API Explorer site (https://developer.ibm.com/api/)[https://developer.ibm.com/api/], and sign in with the same IBM ID that was used to sign up for the service subscription. Create a user name, and then click Next.
b. Click the My APIs link, and look for the IBM Watson Virtual Agent tile. Click the key icon, and select the default key.
c. Two keys are automatically generated. Hover over the key fields, and then click SHOW.
d. You must add these key values into the script later, so save them in a text file for now. The value from the first field is the client ID key. The value from the second field is the client secret token.

- Now, generate your bot.
a. Click the IBM Watson Virtual Agent tile, and then click Keys. Select the default key.
b. Scroll down to the Retrieve bot call.
c. Add '2016-09-16' as the version parameter value, and then click Test.
d. Copy the 32-digit alphanumeric code that is returned in the response. Save it because this is the bot ID that you will need later.

3. Return to this Configure page, and revise the second script:

```html
<script src='https://dp1-bot-chat.mybluemix.net/IBMChat-v1.0.10.js'></script>
<script>
  IBMChat.init({
    el: 'ibm_chat_root',
    baseURL: 'https://api.ibm.com/virtualagent/run/api/v1',
    botID: 'YOUR_BOT_ID',
    XIBMClientID: 'YOUR_IBM_CLIENT_ID',
    XIBMClientSecret: 'YOUR_IBM_CLIENT_SECRET'
  });
</script>

```

Replace all of the parameter values except the baseURL; use that value as-is.

- el: Specify the ID of the element that you chose to use in Step 1.
- botID: Add the bot ID you generated earlier.
- XIBMClientID: Add the client ID key value that you copied earlier.
- XIBMClientSecret: Add the Client secret token value that you copied earlier.

**Important: Keep the values of the IBMClientID and IBMClientSecret as private as possible.**

4. Embed and initialize the Watson Virtual Agent chat widget by pasting the revised scripts into your web page. Add them as close to the closing `</body>` tag as possible to prevent the script from blocking the rest of the page from rendering, and to ensure that whichever element you associated with the script will be fully rendered by the time the script is executed.

5. Refresh the web page and give the virtual agent a try!

The chat widget is associated with and rendered to the HTML element that you designated in step 1. You can hide or show and position that element. The widget extends to the full height and width of the element. The maximum width is 768 pixels, and the minimum height is 300 pixels.
