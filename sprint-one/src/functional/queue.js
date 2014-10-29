var makeQueue = function(){
  var someInstance = {};
  var counter = 0;
  var position = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    var tempValue = storage[position];
    delete storage[position];
    if (counter > position) {
      position++;
    }
    return tempValue;

  };

  someInstance.size = function(){
    return counter-position;
  };

  return someInstance;
};
