      var ns = 'IBMChat-choose';
      var activeClassName = 'IBMChat-accent-colors';
      var inactiveClassName = 'IBMChat-accent-colors-button';
      var widgets = [];
      var templates = {
        button: '<button style="background-color: yellow;" class="IBMChat-accent-colors-button" data-input="${text}" data-custom-layout=true>${text}</button>'
      };

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
        this.drawButtons();
        this.subscribeSend = IBMChat.subscribe('send', this.removeAllEventListeners.bind(this));
      };

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
