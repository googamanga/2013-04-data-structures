var extend = function(obj, extention) {
  var keys = Object.keys(extention);

  for(var i =0; i < keys.length; i++){
    var key = keys[i];
    obj[key] = extention[key];
  }
  return obj;
};

var makeStack = function(){
  // Use an object with numeric keys to store values
  //var storage = {};


  // Implement the methods below
  var stack = {
    size: 0,  // Hint: set an initial value here
    storage: {}
  };
  extend(stack, stackMethods);
  return stack;
};

stackMethods= {};

stackMethods.add = function(value){
  this.storage[this.size] = value;
  this.size += 1;
  return value;
};

stackMethods.remove = function(){
  if(this.size <= 0){
    throw "Stack is empty";
  }
  this.size -= 1;
  var value = this.storage[this.size];
  delete this.storage[this.size];
  return value;
};

stackMethods.size = function(){
  return this.size;
};