var makeBinarySearchTree = function(value){
  obj = {};
  obj.value = value;
  obj.left = undefined;
  obj.right = undefined;
  _.extend(obj, bstMethods);
  return obj;
};

var bstMethods = {};

bstMethods.insert = function(value){
  var obj = makeBinarySearchTree(value);
  if(value < this.value && this.left === undefined){
    this.left = obj;
  } else if(value < this.value && this.left){
    this.left.insert(value);
  }

  if(value > this.value && this.right === undefined){
    this.right = obj;
  } else if (value > this.value && this.right){
    this.right.insert(value);
  }
};
bstMethods.contains = function(target){
  var wasFound = false;
  var recursive = function(target, node){
    if(node.value === target){
      wasFound = true;
    } else if(target < node.value && node.left){
      recursive(target, node.left);
    } else if(target > node.value && node.right){
      recursive(target, node.right);
    }
  };
  recursive(target, this);
  return wasFound;
};
bstMethods.depthFirstLog = function(callback){
  var recursive = function(node){
    if (node.value){
      callback(node.value);
    }
    if(node.left){
      recursive(node.left);
    }
    if(node.right){
      recursive(node.right);
    }
  };
  recursive(this);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
