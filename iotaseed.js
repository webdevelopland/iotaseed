const { randCustomString, Alphabet } = require('rndmjs');

var trytesAlphabet = Alphabet.concat('9');
var seed = randCustomString(trytesAlphabet, 81);
console.log(seed);
