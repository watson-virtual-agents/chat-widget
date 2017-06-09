### Language Bundles

The Chat Widget makes use of language bundles containing translated strings for 1 or more locales. The files are written as YAML (in `src/lang/`) and, during the build process, converted to JSON files (in `dist/lang/`). If you wish to add your own translation, follow the outline of the English translation (`src/lang/en.yaml`).

* The YAML file must be saved using UTF-8 encoding.
* The first line should contain the language identifier (i.e. "en", "es", "fr").
* If a string value contains a single quote ('), then wrap the string in double quotes (").
* Some string values support [ICU message syntax](http://userguide.icu-project.org/formatparse/messages), particularly for [dates, times](http://userguide.icu-project.org/formatparse/datetime) and [numbers](http://userguide.icu-project.org/formatparse/numbers).
    * For dates, in addition to the standard ICU formatting options (`short`, `medium`, `long`, `full`), we also support the custom option `weekday_short`. This outputs an abbreviated weekday name for the given Date; for example, in English, this could output 'Sat' or 'Sun'.

### Testing

In order to test your translations, you'll need to work with the chat widget so it can display the appropriate message. Run the i18n example (`examples/base-i18n-example`) and read the directions in the comments for each section of the English translation (`src/lang/en.yaml`).
