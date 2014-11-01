var Graph = function(){
  this.nodeList = [];
};
Graph.prototype.addNode = function(newNode, toNode){
  var node = {value: newNode, edges: []};
  if (this.nodeList.length === 0) {
    this.nodeList.push(node);
  }
  else if (toNode || this.nodeList.length === 1) {
    // console.log(!!toNode || this.nodeList.length ===1);
    // console.log('addNode pt2 happens with these args: ', 'node.value: ',
    //  node.value, ', toNode || this.nodeList[0].value: ', toNode, '||', this.nodeList[0].value, 'compound: ', toNode || this.nodeList[0].value );
    this.nodeList.push(node);
    // console.log('this.addEdge called with: ', node.value, ' + ', (toNode || this.nodeList[0].value));
    this.addEdge(node.value, (toNode || this.nodeList[0].value));
    // console.log('node: ', node);
  }
};

Graph.prototype.contains = function(node){
  var wasFound = false;
  // console.log(this.nodeList.constructor);
  // console.log(this.nodeList[0]);
  for (var i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === node) {
      wasFound = true;
    }
  }
  return wasFound;
};

Graph.prototype.removeNode = function(node){
  for (var i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === node) {
      this.nodeList.splice(i, 1);
    }
    else {
      for (var j = 0; j < this.nodeList[i].edges.length; j++){
        if(this.nodeList[i].edges[j].value === node){
          this.nodeList[i].edges.splice(j,1);
        }
      }
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var fromNodeEdges = this.getNode(fromNode).edges;
  // console.log(fromNodeEdges.constructor);
  var toNodeEdges = this.getNode(toNode).edges;
  var looper = function(array, target) {
    var wasFound = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i].value === target) {
        wasFound = true;
      }
    }
    return wasFound;
  }
  return (looper(fromNodeEdges, toNode) && looper(toNodeEdges, fromNode));
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var fromNodeObj = this.getNode(fromNode);
  // console.log('fromNodeObj: ', fromNodeObj);
  var toNodeObj = this.getNode(toNode);
  // console.log('toNodeObj: ', toNodeObj);
  fromNodeObj.edges.push(toNodeObj);
  toNodeObj.edges.push(fromNodeObj);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromNodeObjArray = this.getNode(fromNode).edges;
  var toNodeObjArray = this.getNode(toNode).edges;
  for (var i = 0; i < fromNodeObjArray.length; i++) {
    if (fromNodeObjArray[i].value === toNode) {
      fromNodeObjArray.splice(i,1);
    }
  }
  for (var i = 0; i < toNodeObjArray.length; i++) {
    if (toNodeObjArray[i].value === fromNode) {
      toNodeObjArray.splice(i,1);
    }
  }
  this.cleanup(this.getNode(fromNode));
  this.cleanup(this.getNode(toNode));

};

Graph.prototype.getNode = function(str){
  for(var i = 0; i < this.nodeList.length; i++){
    // console.log('nodeList: ', this.nodeList, 'i: ', i);
    if(this.nodeList[i].value === str){
      return this.nodeList[i];
    }
  }
};
Graph.prototype.cleanup = function(node){
  if (node.edges.length === 0) {
    this.nodeList.splice(this.nodeList.indexOf(node), 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
Adding a node
Determine if node needs to
*/
