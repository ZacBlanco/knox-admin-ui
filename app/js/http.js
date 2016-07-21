var HttpClient = function () {
	this.get = function (url, callback) {
		var req = new XMLHttpRequest();
		req.withCredentials = true;
		req.open('GET', url);
		for(i = 0; i < headers.length; i++) {
			req.setRequestHeader(headers[i].key, headers[i].value);
		}
		req.onreadystatechange = function () {
			if (req.readyState === XMLHttpRequest.DONE) {
				if (req.status === 200) {
					callback({ status : req.status,
								  responseText : req.responseText
								 });
				} else {
					callback({ status : req.status,
								  responseText : "There was an error processing the request"
								 });
				}
			}
		};
		req.send();
	};
	var headers = [];
	this.addHeader = function (key, value) {
		headers.push({key: key,
					 value: value});
	};
};