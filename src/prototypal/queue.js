var extend = function(obj, extention) {
  var keys = Object.keys(extention);

  for(var i =0; i < keys.length; i++){
    var key = keys[i];
    obj[key] = extention[key];
  }
  return obj;
};


var Queue = function(){
  // Use an object with numeric keys to store values
  //var storage = {};
  var queue = Object.create(Queue.prototype);
  queue.startIndex = 0;
  queue.endIndex = 0;
  queue.storage = {};
  return queue;
};

Queue.prototype.enqueue = function(value){
  this.startIndex -= 1;
  return this.storage[this.startIndex] = value;
};

Queue.prototype.dequeue = function(){
  if(this.size() <= 0 ){
    throw "Queue is size 0, can't dequeue";
  }
  this.endIndex -= 1;
  return this.storage[this.endIndex];
};

Queue.prototype.size = function(){
  return this.endIndex - this.startIndex;
};