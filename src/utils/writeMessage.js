var Promise = require('es6-promise').Promise;

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
	return new Promise(function(resolve, reject) {
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
	return new Promise(function(resolve, reject) {
		try {
			var newContent = [];
			for (var i = 0; i < content.length; i++) {
				if (content[i].content) {
					var exp = /(((https?:\/\/)|(www\.))[^\s]+)/gi;
					var linked = content[i].content.replace(exp,'|||$1|||');
					var arr = linked.split('|||');
					arr.map(function(value) {
						var newtext = value.replace(exp, '<a href="$1" target="_blank">$1</a>');
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
									href: validLink(value),
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

ParseContent.prototype.addEmails = function(content) {
	return new Promise(function(resolve, reject) {
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
