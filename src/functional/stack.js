var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};

  stack.add = function(value){
    storage[size] = value;
    size += 1;
    return value;
  };

  stack.remove = function(){
    size -= 1;
    var value = storage[size];
    delete storage[size];
    return value;
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
