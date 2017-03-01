/*
* (C) Copyright IBM Corp. 2017. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
* in compliance with the License. You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under the License
* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
* or implied. See the License for the specific language governing permissions and limitations under
* the License.
*/

function writeMessage(el, text) {
  new ParseContent(el, text);
}

function ParseContent(el, text) {
  this.init(el, text);
}

function validLink(link) {
  if (link.startsWith('http://') || link.startsWith('https://'))
    return link;
  else
    return 'http://' + link;
}

function isValidURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
}

ParseContent.prototype.init = function(el, text) {
  if (text) {
    var cls = this;
    var content = [
      {
        type: 'span',
        content: text
      }
    ];
    this.addLineEndings(content)
      .then(cls.addUrls)
      .then(cls.addEmails)
      .then(function(content) {
        cls.writeMessage(el, content);
      })
      .catch(function(e) {
        console.error(e);
      });
  }
};

ParseContent.prototype.writeMessage = function(el, content) {
  content.map(function(item) {
    var s = document.createElement(item.type);
    if (item.content)
      s.textContent = item.content;
    if (item.attributes) {
      Object.keys(item.attributes).map(function(key) {
        s.setAttribute(key, item.attributes[key]);
      });
    }
    el.appendChild(s);
  });
};

ParseContent.prototype.addLineEndings = function(content) {
  return new window.Promise(function(resolve, reject) {
    try {
      var newContent = [];
      for (var i = 0; i < content.length; i++) {
        var arr = content[i].content.split('\n');
        arr.map(function(value, index) {
          if (value) {
            newContent.push({
              content: value,
              type: 'span'
            });
          }
          if (arr.length != index + 1) {
            newContent.push({
              type: 'br'
            });
          }
        });
      }
      resolve(newContent);
    } catch (e) {
      reject(e);
    }
  });
};

ParseContent.prototype.addUrls = function(content) {
  return new window.Promise(function(resolve, reject) {
    try {
      var newContent = [];
      for (var i = 0; i < content.length; i++) {
        content[i].content = content[i].content || '';
        var exp = /(\b((https?:\/\/)|(www\.))[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var splitter = '|^|%|^|';
        var linked = content[i].content.replace(exp, splitter + '$1' + splitter);
        var arr = linked.split(splitter);
        arr.map(function(value) {
          if (value.search(exp) != -1 && isValidURL(value)) {
            var link = validLink(value);
            newContent.push({
              content: value,
              type: 'a',
              attributes: {
                href: link,
                target: '_blank'
              }
            });
          } else {
            newContent.push({
              content: value,
              type: content[i].type,
              attributes: content[i].attributes
            });
          }
        });
      }
      resolve(newContent);
    } catch (e) {
      reject(e);
    }
  });
};

ParseContent.prototype.addEmails = function(content) {
  return new window.Promise(function(resolve, reject) {
    try {
      var newContent = [];
      for (var i = 0; i < content.length; i++) {
        if (content[i].content) {
          var exp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
          var linked = content[i].content.replace(exp,'|||$1|||');
          var arr = linked.split('|||');
          arr.map(function(value) {
            var newtext = value.replace(exp, '<a href="mailto:$1" target="_blank">$1</a>');
            if (newtext === value) {
              newContent.push({
                content: value,
                type: content[i].type,
                attributes: content[i].attributes
              });
            } else {
              newContent.push({
                content: value,
                type: 'a',
                attributes: {
                  href: 'mailto:' + value,
                  target: '_blank'
                }
              });
            }
          });
        } else {
          newContent.push({
            type: content[i].type,
            content: content[i].content,
            attributes: content[i].attributes
          });
        }
      }
      resolve(newContent);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = writeMessage;
