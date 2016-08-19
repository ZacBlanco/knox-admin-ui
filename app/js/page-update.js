function updateVersion() {
  var api = new AdminApi();
  api.getVersion(function(res) {
    var text = "";
    if(res) {
      text = "Version: " + res.ServerVersion.version + "\n Hash: " + res.ServerVersion.hash; 
    } else {
      text = "Could not get Server Version"
    }
    $("#knox-version").html(text);
  });
}

function updateTopologies() {
  var api = new AdminApi();
  api.getTopologies(function(res){
//    var tops = document.getElementById('topology-card-container');
    var tops = $('#topology-card-container')
    tops.html("");
    
    if(res) {
      for ( i = 0; i < res.topologies.topology.length; i++) {
        var t = res.topologies.topology[i];
        tops.append(createTopologyCard(t.name, function(t){
          this.name = t.name;
//          console.log(this.name);
        }));
      }

    } else {
      tops.html("Failed to retrieve topologies.");
    }


  });
}

function hideTopology() {
  var c = document.getElementById('topology-container');
  c.style = "display:none";
}
function showTopology() {
  var c = document.getElementById('topology-container');
  c.style = "display:block";
}

function getTopology(name) {
  var api = new AdminApi();
  console.log(name);
  api.getTopology(name, function (res) {
    console.log(res);
    var container = $('#topology-data')
    var d = JSON.stringify(res, null, 2);
    d = '<pre>\n' + d + '\n</pre>'
    container.html(d);
  })
  
//  api.getTopology(name, function(res) {
//    if(res) {
//      var top = document.getElementById('topology-data');
//      var nm = document.getElementById('topology-data-name');
//      nm.innerHTML = name;
//      
//      top.innerHTML = JSON.stringify(res);
//      console.log(res);
//      showTopology();
//    } else {
//      hideTopology();
//    }
//  });
}

function updateHomePage() {
  updateVersion();
  updateTopologies();
}