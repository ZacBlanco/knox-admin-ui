var AdminApi = function() {
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
	
	function parseResponse(res) {
		if (res.status === 200) {
			this.resp = JSON.parse(res.responseText);
			return this.resp;
		} else {
			return undefined
		}
	}
	
	var url = getAdminApiUrl();
	
	this.getTopologies = function(callback) {
		var c = new HttpClient();
		c.addHeader('Accept', "application/json");
		c.get(url + 'topologies', function(res) {
			callback(parseResponse(res));
		});
	}
	
	this.getTopology = function(topologyName, callback) {
		var c = new HttpClient();
		c.addHeader('Accept', "application/json");
		c.get(url + 'topologies/' + topologyName, function (res) {
			callback(parseResponse(res));
		});
	}

	this.getVersion = function(callback) {
		var c = new HttpClient();
		c.addHeader('Accept', "application/json");
		c.get(url + 'version', function(res) {
			callback(parseResponse(res));
		});
	}
}
