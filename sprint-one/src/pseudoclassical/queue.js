var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.position = 0;
  this.count = 0;

};

Queue.prototype.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++
};
Queue.prototype.dequeue = function(){
  var tempValue = this.storage[this.position];
  delete this.storage[this.position];
  if (this.size()>0) {
    this.position++;
  }
  return tempValue;
};
Queue.prototype.size = function(){
  return this.count-this.position;
};


