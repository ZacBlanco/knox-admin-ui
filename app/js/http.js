var client = function (responseFunc) {
	var callback = responseFunc;
	var req = new XMLHttpRequest();
	req.withCredentials = true;
	this.get = function (url) {
		req.open('GET', url);
		req.send();
	};
	req.onreadystatechange = function () {
		if (req.readyState === XMLHttpRequest.DONE) {
			if (req.status === 200) {
				callback({ status : req.status,
							  responseText : req.responseText
							 });
			} else {
				callback({ status : req.status,
							  responseText : "There was an error processing your request"
							 });
			}
		}
	};
};

function getProto() {
	return window.location.protocol;
}

function getServer() {
	return window.location.hostname;
}

function getPort() {
	return window.location.port;
}

function getKnoxUrl() {
	return getProto() + "//" + getServer() + ":" + getPort();
}

function getAdminApiUrl() {
	return getKnoxUrl() + "/" + config.gatewayPath + "/" + config.topology + "/api/v1/";
}

function getAppUrl() {
	return getKnoxUrl() + "/" + config.gatewayPath + "/" + config.topology + "/" + config.appName;
}