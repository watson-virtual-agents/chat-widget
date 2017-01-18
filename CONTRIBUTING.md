# Issues

Report bugs or feature requests to our [github issue tracker](https://github.com/watson-virtual-agents/chat-widget/issues). Before that, please search for similar issues as it's possible that somebody has already run into it. If you want to contribute to the WVA Chat Widget, **please be sure to open an issue beforehand!**

# Pull Requests

**We accept pull requests to the "dev" branch and not to "master".** This enabled us combine changes into a single version bump and keep the code (and docs) in master pristine.

If you want to contribute to the repository, here's a quick guide:

1. Fork the repo.
2. Install locally: `npm install`.
3. Develop your code changes.
4. Test your changes: `npm run test`.
5. Follow the instructions at [./DCO.txt](./DCO.txt).
6. Commit your changes. When writing the commit message, please follow [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines), but using past tense, for example:
    - feat(intents): added link in messages to the corresponding intent in admin-ui
    - bug(ie): fixed scrolling issue in IE11/Edge
7. Push to your fork and submit a pull request **to the "dev" branch**.

# Running Locally

1. Clone this repository

    ```bash
        git clone https://github.com/watson-virtual-agents/chat-widget
    ```

2. Open `/index.html` in your favorite text editor and set the values for the `botID`, `XIBMClientID` and `XIBMClientSecret` parameters:
    ```html
        <script>
            window.IBMChat.init({
                el: 'ibm_el',
                baseURL: 'https://api.ibm.com/virtualagent/run/api/v1/',
                botID: '',              // replace with Bot ID
                XIBMClientID: '',       // replace with Client ID
                XIBMClientSecret: ''    // replace with Client Secret
            });
        </script>
    ```
3. Save your changes.

  **Important**: Keep the values of the IBMClientID and IBMClientSecret as private as possible. *And certainly don't make your private keys part of your PR!*.


4. Run the following commands using [Node 4.2.1](https://nodejs.org/) or higher:

    ```bash
    npm install
    npm run watch
    ```

5. Navigate to `http://localhost:3100`.


# Questions

For questions please refer to [StackOverflow](http://stackoverflow.com/questions/tagged/watson-virtual-agent) under tag `watson-virtual-agent` or [DeveloperWorks Answers](https://developer.ibm.com/answers/topics/watson-virtual-agent).
