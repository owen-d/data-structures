var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var obj = {};
obj.count = 0;
obj.storage = {};
_.extend(obj, stackMethods);
return obj;
};

var stackMethods = {};
stackMethods.push = function(item){
  this.storage[this.count] = item;
  this.count++;
};
stackMethods.pop = function(){
  if (this.count > 0) {
    this.count--;
  }
  var tempValue = this.storage[this.count];
  delete this.storage[this.count];
  return tempValue;
};
stackMethods.size = function(){
  return this.count;
};

