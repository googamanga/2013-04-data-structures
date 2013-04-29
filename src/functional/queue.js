var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var startIndex = 0;
  var endIndex = 0;

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    startIndex -= 1;
  };

  queue.dequeue = function(){
    endIndex -= 1;
  };

  queue.size = function(){
    return endIndex - startIndex;
  };

  return queue;
};