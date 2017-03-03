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

var state = require('../../state');

var smoothStep = function(start, end, point) {
  if (point <= start) return 0;
  if (point >= end) return 1;
  var x = (point - start) / (end - start);
  return x*x*(3 - 2*x);
};

function scrollToBottom() {
  setTimeout(function() {
    var duration = 300;
    var startTime = Date.now();
    var endTime = startTime + duration;
    var current = state.get();
    var startTop = current.chatHolder.scrollTop;
    var previousTop = startTop;
    var distance = current.chatHolder.scrollHeight - startTop;
    var scrolling = setInterval(function() {
      var now = Date.now();
      if (current.chatHolder.scrollTop != previousTop) {
        clearInterval(scrolling);
        return;
      } else if (now >= endTime) {
        clearInterval(scrolling);
        current.chatHolder.scrollTop = current.chatHolder.scrollHeight;
        return;
      } else if (current.chatHolder.scrollTop == current.chatHolder.scrollHeight) {
        clearInterval(scrolling);
        return;
      }
      var point = smoothStep(startTime, endTime, now);
      var frameTop = Math.round(startTop + (distance * point));
      current.chatHolder.scrollTop = frameTop;
      previousTop = current.chatHolder.scrollTop;
    }, 0);
  }, 100);
}

module.exports = scrollToBottom;
