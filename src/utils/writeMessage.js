//TODO: we also need to sniff for emails

function writeMessage(element, text) {
	var exp = /(((https?:\/\/)|(www\.))[^\s]+)/gi;
	var linked = text.replace(exp,'|||$1|||');
	var arr = linked.split('|||');
	for (var i = 0; i < arr.length; i++) {
		var child = document.createElement('span');
		var newtext = arr[i].replace(exp, '<a href="$1" target="_blank">$1</a>');
		if (newtext === arr[i])
			child = _addLineEndings(child, newtext);
		else
			child.innerHTML = newtext;
		element.appendChild(child);
	}
}

function _addLineEndings(el, newtext) {
	var arr = newtext.split('\n');
	if (arr.length === 1) {
		el.textContent = arr[0];
	} else {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].length > 0) {
				var child = document.createElement('span');
				child.textContent = arr[i];
				el.appendChild(child);
			}
			if (i < arr.length - 1)
				el.appendChild(document.createElement('br'));
		}
	}
	return el;
}

module.exports = writeMessage;
