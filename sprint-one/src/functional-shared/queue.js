var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //variables
  var obj = {
    count: 0,
    position: 0
  };
  obj.storage = {};
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(item){
  this.storage[this.count] = item;
  this.count++;
};
queueMethods.dequeue = function(){
  var temp = this.storage[this.position];
  delete this.storage[this.position];
  if (this.count-this.position > 0) {
    this.position++;
  }
  return temp;
};
queueMethods.size = function(){
  return this.count-this.position;
};

