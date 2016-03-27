var Bob = function() {};

Bob.prototype.hey = function(input) {
  var response;

  if (input.trim() == ""){
    response = "Fine. Be that way!"
  }
 
  else if (input.toUpperCase() == input) {
    response = "Whoa, chill out!"
  }
   else if (input.endsWith("?")) {
    response = "Sure."
  }

  else {
    response = "Whatever."
  }
  
  return response;

};

module.exports = Bob;
