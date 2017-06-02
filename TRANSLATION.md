### Language Bundles

The Chat Widget makes use of language bundles containing translated strings for 1 or more locales. The files are written as YAML (in `src/lang/`) and, during the build process, converted to JSON files (in `dist/lang/`). If you wish to add your own translation, follow the outline of the English translation (`src/lang/en.yaml`).

### Testing

In order to test your translations, you'll need to work with the chat widget so it can display the appropriate message. Run the i18n example (`examples/base-i18n-example`) and read the directions in the comments for each section of the English translation (`src/lang/en.yaml`).
