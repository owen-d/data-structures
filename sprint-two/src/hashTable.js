var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(this);
  var openSpot = this.spotChecker(i);
  console.log(openSpot);
  this._storage.set(openSpot, v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);

};

HashTable.prototype.remove = function(k){
  return this.insert(k, null);

};
// HashTable.prototype.spotChecker = function(index){
//   	if (index >= this._limit) {
//   		return;
//   	}
//   	else if (this._storage.get(index) === null) {
//   		return index;
//   	}
//   	return this.spotChecker(index+1);
//   };
HashTable.prototype.spotChecker = function(index){
	if (index >= this._limit) {
		return -1;
	}
	else if (this._storage.get(index) === null) {
		return index;
	}
	return this.spotChecker(index+1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
//spotchecker: take index and see if a non-null value is attached. if
//so, it checks the next spot. If it finds a null value, it returns
//that position
//whats a good way to tell what threshhold of your potential spots
//are filled in a hashed array? Looping seems inefficient. Can you 
// push and empty and full lookups and then run analysis on them?
