var extend = function(obj, extention) {
  var keys = Object.keys(extention);

  for(var i =0; i < keys.length; i++){
    var key = keys[i];
    obj[key] = extention[key];
  }
  return obj;
};


var Stack = function(){
  this.index = 0;
  this.storage = {};
};

Stack.prototype.add = function(value){
  this.storage[this.index] = value;
  this.index += 1;
  return value;
};

Stack.prototype.remove = function(){
  if(this.size() <= 0){
    throw "Stack is empty";
  }
  this.index -= 1;
  var value = this.storage[this.index];
  delete this.storage[this.index];
  return value;
};

Stack.prototype.size = function(){
  return this.index;
};
