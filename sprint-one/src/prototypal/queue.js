var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try no t not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.count = 0;
  obj.position = 0;
  return obj;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
};
queueMethods.dequeue = function(){

  var tempValue = this.storage[this.position];
  delete this.storage[this.position];
  if (this.size()>0) {
    this.position++;
  }
  return tempValue;
};
queueMethods.size = function(){
  return this.count-this.position;
};



