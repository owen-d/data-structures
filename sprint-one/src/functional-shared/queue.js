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

var queueMethods = {};

queueMethods.enqueue = function(item){
  this.storage[this.counter] = item;
  this.counter++;
};
queueMethods.dequeue = function(){
  var temp = this.storage[this.position];
  delete this.storage[this.position];
  if (this.counter-this.position > 0) {
    this.position++;
  }
  return temp;
};
queueMethods.size = function(){
  return this.counter-this.position;
};

