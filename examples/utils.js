function httpPostAsync(url, data, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open('POST', url, true); // true for asynchronous
  xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4) {
      if (xmlHttp.status == 200)
        callback(null, xmlHttp.responseText);
      else
        callback(xmlHttp.statusText, null);
    }
  };
  xmlHttp.send(JSON.stringify(data));
}

module.exports = {
  httpPostAsync: httpPostAsync
};
