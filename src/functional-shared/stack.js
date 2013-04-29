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
  var stack = {};

  return stack;
};

stackMethods= {};

stackMethods.add = function(value){

};

stackMethods.remove = function(){

};

stackMethods.size = function(){

};