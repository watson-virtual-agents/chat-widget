require('./styles.css');
var IBMChat = require('@watson-virtual-agent/chat-widget');

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
  option:
  '<input id="${optionId}" class="selectopt" name="test" type="radio"> <label for="${optionId}" class="option">${label}</label>'
};

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
  // main div container
  this.el = document.createElement('div');
  this.el.classList.add('dropdown');
  this.el.setAttribute('data-isopen', false);
  this.el.addEventListener('click', function(){
    var isOpen = (this.el.dataset.isopen === 'true') ? true : false;
    if(!isOpen){
      this.showOptions();
    } else {
      this.hideOptions();
    }
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
    liEl.addEventListener('click', this.handleOptionClick.bind(this));
    if (i === 0)
      liEl.setAttribute('data-selected', true);
    else
      liEl.setAttribute('data-selected', false);
    ulEl.append(liEl);
  }
  this.el.append(ulEl);


  this.layoutElement.append(this.el);

  this.hideOptions();
  // this(addListeners)
};


Choose.prototype.handleOptionClick = function(e) {
  this.hideOptions();
  // remove current selection
  var current = document.querySelector('[data-selected="true"]');
  current.dataset.selected = false;
  // set new selected option
  var target = e.target;
  target.setAttribute('data-selected', true);
  var span = document.querySelector('.selected-option');
  span.innerHTML = target.innerHTML;

  IBMChat.publish('scroll-to-bottom');

  this.submit();
};

Choose.prototype.hideOptions = function() {
  var ul = document.querySelector('.options-container');
  ul.style.display = 'none';
};

Choose.prototype.showOptions = function() {
  var ul = document.querySelector('.options-container');
  ul.style.display = '';
};

Choose.prototype.submit = function() {

};


IBMChat.registerLayout('choose', layoutInit);

IBMChat.init({
  el: 'ibm_el',
  baseURL: 'https://api.ibm.com/virtualagent/run/api/v1/',
  botID: '',              // replace with Bot ID
  XIBMClientID: '',       // replace with Client ID
  XIBMClientSecret: ''    // replace with Client Secret
});
