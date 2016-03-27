var Words = function() {};

Words.prototype.count = function(string) {
 var arr = string.trim().split(/[\s\t\n]+/);  
 var result = {};

 for (var i = 0; i < arr.length; i++) {

  var current = arr[i];

  if (result[current] && (typeof(result[current]) != 'function')) {
    result[current] += 1;
  }
  else {
    result[current] = 1;
  }
 }
 return result;

};

module.exports = Words;