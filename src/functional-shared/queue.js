var extend = function(obj, extention) {
  var keys = Object.keys(extention);

  for(var i =0; i < keys.length; i++){
    var key = keys[i];
    obj[key] = extention[key];
  }
  return obj;
};


var makeQueue = function(){
  // Use an object with numeric keys to store values
  //var storage = {};
  var queue = {};
  queue.startIndex = 0;
  queue.endIndex = 0;
  queue.storage = {};
  extend(queue, queueMethods);
  return queue;
};

queueMethods= {};

queueMethods.enqueue = function(value){
  this.startIndex -= 1;
  return this.storage[this.startIndex] = value;
};

queueMethods.dequeue = function(){
  if(this.size() <= 0 ){
    throw "Queue is size 0, can't dequeue";
  }
  this.endIndex -= 1;
  return this.storage[this.endIndex];
};

queueMethods.size = function(){
  return this.endIndex - this.startIndex;
};