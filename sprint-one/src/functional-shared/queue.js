var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.counter = 0;
  obj.position = 0;
  _.extend(obj, queueMethods);

  return obj;
};

var queueMethods = {
	enqueue: function(value){
		this.storage[this.counter] = value;
		this.counter++;
	},
	dequeue: function(){
		var tempValue = this.storage[this.position];
		delete this.storage[this.position];
		if (this.counter > this.position) {
			this.position++;
		}
		return tempValue;
	},
	size: function(){
		return this.counter-this.position;
	}
};




