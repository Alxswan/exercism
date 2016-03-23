var DnaTranscriber = function(){}

DnaTranscriber.prototype.toRna = function(dna) {
  var mapping = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  }
  
  var rna = ''
  for (var i = 0; i < dna.length; i++){
    rna += mapping[dna[i]]
  }
  return rna;
};


module.exports = DnaTranscriber