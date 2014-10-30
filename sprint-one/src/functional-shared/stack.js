var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.counter = 0;
  obj.storage = {};
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {};
stackMethods.push = function(value){
	this.storage[this.counter] = value;
	this.counter++;
};
stackMethods.size = function(){
	return this.counter;
};
stackMethods.pop = function(){
	if (this.counter > 0) {
		this.counter--;
	}
	var tempValue = this.storage[this.counter];
	delete this.storage[this.counter];
	return tempValue;
};


