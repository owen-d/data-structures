var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var temp = {next: null, value: value};
    if (list.tail !== null) {
      list.tail.next = temp;
    }
    list.tail = temp;
    if (list.head === null) {
      list.head = temp;
    }


  };

  list.removeHead = function(){
    if (list.head !== null) {
      var temp = list.head;
      list.head = list.head.next;
      return temp.value;
    }
  };

  list.contains = function(target, node){
    node = node || list.head;
    if (node.value === target) {
      return true;
    }
    else if (node.next !== null) {
      return this.contains(target, node.next);
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
