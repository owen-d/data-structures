var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	if (!this[item]) {
		this[item] = item;
	}
};

setPrototype.contains = function(item){
	if (this.hasOwnProperty(item)) {
		return true;
	}
	return false;
};

setPrototype.remove = function(item){
	if (item in this) {
		delete this[item];
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
