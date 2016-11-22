var state = require('../state');

function _attachStylesToDOM(styles) {
  var css = document.createElement('style');
  css.type = "text/css";
  if (css.styleSheet)
    css.styleSheet.cssText = styles;
  else
    css.appendChild(document.createTextNode(styles));
  document.getElementsByTagName("head")[0].appendChild(css);
}

function _getStyles(current) {
  var containerClass = ".chatID-" + current.chatID;
  var styles = containerClass + " .IBMChat-outer-container {\n  font-size: " + current.styles.fontSize + ";\n line-height: " + current.styles.fontSize + ";\n  font-family: " + current.styles.fontFamily + ";\n}\n" +
              containerClass + " .IBMChat-outer-container textarea {\n  font-size: " + current.styles.fontSize + ";\n  font-family: " + current.styles.fontFamily + ";\n}\n" +
              containerClass + " .IBMChat-default-colors {\n  background-color: " + current.styles.background + ";\n  color: " + current.styles.text + ";\n}\n" +
              containerClass + " .IBMChat-secondary-colors {\n  background-color: " + current.styles.secondaryBackground + ";\n  color: " + current.styles.secondaryText + ";\n}\n" +
              containerClass + " .IBMChat-secondary-colors-button {\n  background-color: transparent; border: 1px solid " + current.styles.secondaryBackground + ";\n  color: " + current.styles.secondaryBackground + ";\n}\n" +
              containerClass + " .IBMChat-accent-colors {\n  background-color: " + current.styles.accentBackground + ";\n  border: 1px solid " + current.styles.accentBackground + ";\n color: " + current.styles.accentText + ";\n}\n" +
              containerClass + " .IBMChat-accent-colors-button {\n  background-color: transparent; border: 1px solid " + current.styles.accentBackground + ";\n  color: " + current.styles.accentBackground + ";\n}\n" +
              containerClass + " .IBMChat-accent-colors-button:hover {\n  background-color: " + current.styles.accentBackground + ";\n border: 1px solid " + current.styles.accentBackground + ";\n  color: " + current.styles.accentText + ";\n}\n" +
              containerClass + " .IBMChat-accent-colors-button[disabled]:hover {\n  background-color: transparent; border: 1px solid " + current.styles.accentBackground + ";\n  color: " + current.styles.accentBackground + ";\n}\n" +
              containerClass + " .IBMChat-error-colors {\n  background-color: " + current.styles.errorBackground + ";\n  color: " + current.styles.errorText + ";\n}\n" +
              containerClass + " .IBMChat-input-colors {\n  background-color: " + current.styles.inputBackground + ";\n  color: " + current.styles.inputText + ";\n border-bottom: 1px solid " + current.styles.inputText + ";\n}\n" +
              containerClass + " .IBMChat-watson-message-line-theme {\n\tborder-left: 3px solid " + current.styles.accentBackground + ";\n}\n" +
              containerClass + " a,\n" +
              containerClass + " a:hover,\n" +
              containerClass + " a:visited,\n" +
              containerClass + " a:active {\n\tcolor: " + current.styles.link + ";\n\tfont-weight: normal;\n\ttext-decoration: underline;\n\tfont-size:1em;\n\n}\n" +
              containerClass + " .IBMChat-chat-textbox-theme {\n  border-bottom: solid 1px " + current.styles.text + ";\n}\n" +
              containerClass + " .IBMChat-chat-textbox-theme:focus {\n  border-bottom: solid 2px " + current.styles.accentBackground + ";\n}\n" +
              containerClass + " .IBMChat-ibm-spinner {\n\tstroke: " + current.styles.accentBackground + ";\n}";
  return styles;
}

function attachPlaybackStyles(chatID) {
  var current = state.getState()[chatID];
  var styles = _getStyles(current);
  _attachStylesToDOM(styles);
}

function attachStyles() {
  var current = state.getState();
  var styles = _getStyles(current);
  _attachStylesToDOM(styles);
}

module.exports = {
  attachStyles: attachStyles,
  attachPlaybackStyles: attachPlaybackStyles
};
