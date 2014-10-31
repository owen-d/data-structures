var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  if (this.children === undefined) {
    this.children = [];
    this.children.push(makeTree(value));
  } else {
    this.children.push(makeTree(value));
  }
};

treeMethods.contains = function(target) {
  var wasFound = false;
  var recurse = function(node){
    if (node.value === target){
      wasFound = true;

    } else if(node.children !== undefined){
      for(var i = 0; i < node.children.length; i++){
        recurse(node.children[i]);
      }
    }
  };
  recurse(this);
  return wasFound;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
