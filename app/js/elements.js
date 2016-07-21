function createTopologyButton(name, callback) {
	var btn = document.createElement('button');
	btn.setAttribute('onclick', 'getTopology(\'' + name + '\')');
	btn.innerHTML = "Click to View"
	return btn
}

function createSimpleElement(tagName, text) {
	var el = document.createElement(tagName);
	el.innerHTML = text;
	return el;
}

function createTopologyCard(topologyName, callback) {
	var top = createSimpleElement("div", "");
	var topName = createSimpleElement("p", topologyName)
	top.className = "four columns card"
	top.appendChild(topName);
	top.appendChild(createTopologyButton(topologyName, callback));
	return top;
}