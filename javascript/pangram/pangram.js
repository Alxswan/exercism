var Pangram = function(string) {
  this.string = string;
};

Pangram.prototype.isPangram = function() {
  
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var string = this.string.toLowerCase();

  alphabet = alphabet.filter(function(char){
    return !string.includes(char)
  });

  if (alphabet.length == 0) {
    return true;
  }
  else return false;
};

module.exports = Pangram;


