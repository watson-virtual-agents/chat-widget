require('./styles.css');
var IBMChat = require('@watson-virtual-agent/chat-widget');


/*
  Helpers
*/

function compile(str, options) {
  if (options && Object.keys(options).length > 0) {
    Object.keys(options).forEach(function(key) {
      str = str.split('${' + key + '}').join(options[key]);
    });
  }
  return str;
}

function hasClass(element, className) {
  var thatClass = " " + className + " ";
  return ( (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(thatClass) > -1 );
}


/*
  Custom Choose Layout
*/

var ns = 'IBMChat-choose';
var activeClassName = 'IBMChat-accent-colors';
var inactiveClassName = 'IBMChat-accent-colors-button';
var widgets = [];
var templates = {
  button: '<button style="background-color: yellow;" class="IBMChat-accent-colors-button" data-input="${text}" data-custom-layout=true>${text}</button>',
  dropdown: '<div class="select" tabindex="1"></div>',
  // first one have to add the checked attriubte
  option:
  '<input id="${optionId}" class="selectopt" name="test" type="radio"> <label for="${optionId}" class="option">${label}</label>'
  // <input id="opt1" class="selectopt" name="test" type="radio" checked>
  // <label for="opt1" class="option">Oranges</label>
};


/*
            <!-- content language selector -->
                <div id="qa--language-dropdown"
                    class="language-dropdown"
                    init="ctrl.isOpen = false"
                    class="{'open': ctrl.isOpen}"
                    click="ctrl.isOpen = !ctrl.isOpen">
                    <button class="btn btn-default dropdown-toggle qa--dropdown-toggle"
                            type="button"
                            class="{'qa--dropdown-toggle-rtl': ctrl.isUiRtl()}"
                            dir="{{ctrl.contentDirection()}}">
                        <span class="dropdown-text qa--dropdown-text" model="ctrl.selectedLanguage">
                            {{ctrl.selectedLanguage.description}}
                        </span>
                    </button>
                    <ul class="dropdown-menu qa--dropdown-menu">
                        <li class="qa--lang-dropdown-option" repeat="lang in ctrl.languages" >
                            <a class="qa--lang-dropdown-option-text"
                                click="ctrl.changeLanguage(lang)">
                                {{lang.description}}
                            </a>
                        </li>
                    </ul>
                </div>

 */

function layoutInit() {
  IBMChat.subscribe('layout:choose', function(data) {
    var widget = new Choose(data);
    widgets[data.uuid] = widget;
  });
  IBMChat.subscribe('layout:confirm', function(data) {
    var widget = new Choose(data);
    widgets[data.uuid] = widget;
  });
}

function Choose(data) {
  this.init(data);
}

Choose.prototype.init = function(data) {
  this.allowMultiple = (data.message.inputvalidation.someOf !== undefined);
  this.values = [];
  this.data = (this.allowMultiple) ? data.message.inputvalidation.someOf : data.message.inputvalidation.oneOf;
  this.uuid = data.uuid;
  this.parentElement = data.element;
  this.layoutElement = data.layoutElement;
  this.msgElement = data.msgElement;

  this.drawDropdown();
  this.subscribeSend = IBMChat.subscribe('send', this.removeAllEventListeners.bind(this));
};


Choose.prototype.drawDropdown = function(){
  var selectTmpl = templates.dropdown;

  // main div container
  this.el = document.createElement('div');
  this.el.classList.add('dropdown');
  this.el.setAttribute('data-isopen', false);
  this.el.addEventListener('click', function(){
    var isOpen = (this.el.dataset.isopen === 'true') ? true : false;
    this.el.setAttribute('data-isopen', !isOpen);
  }.bind(this));

  // span that shows current selected value
  var spanEl = document.createElement('span');
  spanEl.classList.add('selected-option');
  spanEl.innerHTML = this.data[0];
  this.el.append(spanEl);

  // options inside select
  var ulEl = document.createElement('ul');
  ulEl.classList.add('options-container');
  for (var i = 0; i < this.data.length; i++){
    var liEl = document.createElement('li');
    liEl.classList.add('option');
    liEl.innerHTML = this.data[i];
    this.el.append(liEl);
  }


  this.layoutElement.append(this.el);

  // this(addListeners)
}



















Choose.prototype.eventListeners = [];

Choose.prototype.drawButtons = function() {
  var tmpl = templates.button;
  this.el = document.createElement('div');
  this.el.classList.add(ns + '-container');

  for (var i = 0; i < this.data.length; i++) {
    var text = this.data[i];
    var buttonHolder = document.createElement('div');
    buttonHolder.classList.add(ns + '-option');
    var parsed = compile(tmpl, {
      text: text
    });
    var button;
    buttonHolder.innerHTML = parsed;
    this.el.appendChild(buttonHolder);
    button = buttonHolder.querySelector('button');
    button.setAttribute('data-uuid', this.uuid);
    button.classList.add(inactiveClassName);
    this.addListener(button);
  }

  if (this.allowMultiple) {
    var submit = document.createElement('div');
    var submitBtn = compile(templates.field, {
      text: 'Submit'
    });
    submit.className = ns + '-submit';
    submit.innerHTML = submitBtn;
    this.submitButton = submit.querySelector('button');
    this.submitButton.classList.add(activeClassName);
    this.submitButton.setAttribute('disabled', true);
    this.el.appendChild(submit);
    this.addSubmitListener(this.submitButton);
  }

  this.layoutElement.appendChild(this.el);
};

Choose.prototype.handleClick = function() {
  var data = {
    silent: true,
    text: null
  };
  data.text = this.dataset.input;
  this.className = activeClassName + ' IBMChat-accent-colors';
  IBMChat.publish('send', data);
};

Choose.prototype.handleMultiClick = function() {
  var buttons;
  var instance = widgets[this.dataset.uuid];
  if (hasClass(this, activeClassName)) {
    this.classList.add(inactiveClassName);
    this.classList.remove(activeClassName);
  } else {
    this.classList.add(activeClassName);
    this.classList.remove(inactiveClassName);
  }
  buttons = instance.el.querySelectorAll('.' + ns + '-option .' + activeClassName);
  if (buttons.length > 0)
    instance.submitButton.removeAttribute('disabled');
  else
          instance.submitButton.setAttribute('disabled', true);
};

Choose.prototype.handleSubmit = function() {
  var buttons = this.el.querySelectorAll('.' + activeClassName);
  for (var i = 0; i < buttons.length; i++)
    this.values.push(buttons[i].dataset.input);
  IBMChat.publish('send', {
    silent: true,
    text: this.values.toString()
  });
};

Choose.prototype.addListener = function(el) {
  if (this.allowMultiple)
    el.addEventListener('click', this.handleMultiClick);
  else
          el.addEventListener('click', this.handleClick);
  this.eventListeners.push({ el: el, cb: (this.allowMultiple) ? this.handleMultiClick: this.handleClick });
};

Choose.prototype.addSubmitListener = function(el) {
  el.addEventListener('click', this.handleSubmit.bind(this));
  this.eventListeners.push({ el: el, cb: this.handleSubmit.bind(this) });
};

Choose.prototype.removeAllEventListeners = function() {
  if (this.eventListeners.length > 0) {
    for (var i = 0; i < this.eventListeners.length; i++) {
      this.eventListeners[i].el.removeEventListener('click', this.eventListeners[i].cb);
      this.eventListeners[i].el.setAttribute('disabled', true);
    }
    this.eventListeners = [];
    this.subscribeSend.remove();
  }
};

IBMChat.registerLayout('choose', layoutInit);

IBMChat.init({
  el: 'ibm_el',
  baseURL: 'https://api.ibm.com/virtualagent/run/api/v1/',
  botID: 'ab6b87d9-ec6b-448a-be3b-037edf36e3e1',
  XIBMClientID: 'a9020123-6dd1-4894-bfd2-45d69ad5b1cd',
  XIBMClientSecret: 'X1sJ7uR0lI4gM8wV3iS1hK7jI2kC3hU5jE8nO2oY8kB1oW5cG1'
});
