/**
 * (C) Copyright IBM Corp. 2016. All Rights Reserved.
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
var fs = require('fs-extra');
var path = require('path');
var pkg = require('../package.json');
var glob = require('glob');
var beautify = require('js-beautify').js_beautify;

var dest = path.resolve(__dirname, '../dist');
var chatsrc = path.resolve(__dirname, '../dist', 'IBMChatClient-latest.js');
var chatdest = path.resolve(__dirname, '../dist', 'IBMChatClient-v' + pkg.version + '.js');
var quickstartsrc = path.resolve(__dirname, '../docs/QUICKSTART.md');
var quickstartdest = path.resolve(__dirname, '../dist', `IBMChatClient-v${pkg.version}-quickstart.md`);
var versionssrc = path.resolve(__dirname, '../dist', `versions.json`);

function sort(versions) {
	return versions.concat().sort(function(a, b) {
		if (a.version < b.version)
			return -1;
		if (a.version > b.version)
			return 1;
		return 0;
	});
}

fs.copy(chatsrc, chatdest, function(err) {
	if (err) return console.error(`Failed copying ${chatdest}`, err);
	console.log(`Copied ${chatdest}`);
	fs.copy(quickstartsrc, quickstartdest, function(err) {
		if (err) return console.error(`Failed copying ${quickstartdest}`, err);
		console.log(`Copied ${quickstartdest}`);
		glob(`${dest}/*-jsdocs.md`, function(er, files) {
			var json = {
				versions: []
			};
			for (var i = 0; i < files.length; i++) {
				if (files[i].indexOf('versions') === -1) {
					var version = files[i].split('IBMChatClient-v')[1].split('-jsdocs.md')[0];
					json.versions.push({
						version: version,
						widget: 'IBMChatClient-v' + version + '.js',
						quickstart: 'IBMChatClient-v' + version + '-quickstart.md'
					});
				}
				if (i === (files.length - 1)) {
					json.versions = sort(json.versions);
					setTimeout(function() {
						fs.writeFile(`${versionssrc}`, beautify(JSON.stringify(json), {
							indent_size: 2
						}), function(err) {
							if (err) return console.log(err);
							console.log(`Created ${versionssrc}`);
						});
					}, 0);
				}
			}
		});
	});
});
