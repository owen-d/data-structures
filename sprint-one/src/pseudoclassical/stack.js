var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(item){
  this.storage[this.count] = item;
  this.count++;
};
Stack.prototype.pop = function(){
  if (this.count > 0) {
    this.count--;
  }
  var tempValue = this.storage[this.count];
  delete this.storage[this.count];
  return tempValue;
};
Stack.prototype.size = function(){
  return this.count;
};
