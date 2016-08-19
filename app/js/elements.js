function createTopologyButton(name, callback) {
  var btn = document.createElement('a');
  btn.setAttribute('onclick', 'getTopology(\'' + name + '\')');
  btn.className = "btn btn-default btn-block"
  btn.setAttribute("data-toggle", "modal")
  btn.setAttribute("data-target", "#topology-view-modal")
  btn.innerHTML = "View"
  return btn
}

function createSimpleElement(tagName, text) {
  var el = document.createElement(tagName);
  if (text) {
    el.innerHTML = text;
  }
  return el;
}

function createTopologyCard(topologyName, callback) {
  var top = createSimpleElement("div", "");
  top.className = "col-sm-3"
  
  var btn = createTopologyButton(topologyName);
  var pan = createPanel(topologyName, 'default', btn.outerHTML);
  
  top.appendChild(pan)
  return top;
}


function createPanel(title, type, bodyContent) {
  var panel = createSimpleElement('div');
  panel.className = "panel panel-" + type;
  
  var panelHeader = createSimpleElement('div');
  panelHeader.className = "panel-heading";
  
  var panelTitle = createSimpleElement('p', title)
  panelTitle.className = 'panel-title'
  
  var panelBody = createSimpleElement('div', bodyContent)
  panelBody.className = "panel-body";
  
  panelHeader.appendChild(panelTitle);
  panel.appendChild(panelHeader);
  panel.appendChild(panelBody);
  
  return panel
}