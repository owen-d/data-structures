var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // console.log(this);
  var openSpot = this.spotChecker(i);
  // console.log(this._limit, openSpot);
  var inserted = {};
  inserted[k] = v;
  // console.log(this._storage);
  this._storage.set(openSpot, inserted);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // console.log(this.retrieveChecker(i, k));
  return this.retrieveChecker(i, k);

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this.removeChecker(i, k);


};

HashTable.prototype.spotChecker = function(index){
	if (index >= this._limit) {
		return -1;
	}
	else if (this._storage.get(index) === undefined || this._storage.get(index) === null) {
    // console.log('index:', index);
		return index;
	}
	return this.spotChecker(index+1);
};
HashTable.prototype.removeChecker = function(index, key) {
  if (index >= this._limit) {
    return -1;
  }
  else if (this._storage.get(index).hasOwnProperty(key)) {
    this._storage.set(index, null);
  }
  else {
    return this.removeChecker(index+1, key);
  }

};

HashTable.prototype.retrieveChecker = function(index, key){
  // console.log(this._storage.get(index));
  if (index >= this._limit) {
    return -1;
  }
  else if (this._storage.get(index) === null || this._storage.get(index) === undefined) {
    // console.log('hit null');
    return null;
  }
  else if (this._storage.get(index).hasOwnProperty(key)) {
    // console.log('found key');
    return this._storage.get(index)[key];
  }
  else {
    // console.log('about to check next');
    return this.retrieveChecker(index+1, key);
  }
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
