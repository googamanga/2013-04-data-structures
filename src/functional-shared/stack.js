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
  var stack = {};
  stack.index = 0;
  stack.storage = {};
  extend(stack, stackMethods);
  return stack;
};

stackMethods= {};

stackMethods.add = function(value){
  this.storage[this.index] = value;
  this.index += 1;
  return value;
};

stackMethods.remove = function(){
  if(this.size() <= 0){
    throw "Stack is empty";
  }
  this.index -= 1;
  var value = this.storage[this.index];
  delete this.storage[this.index];
  return value;
};

stackMethods.size = function(){
  return this.index;
};