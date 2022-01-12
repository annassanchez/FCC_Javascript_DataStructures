//return an english translated sentence of the passed binary string
//the binarty string will be spaced separated
function binaryAgent(str) {
    var binaryString = str.split(" ");
    var unicodeString = [];
    for (var i = 0; i < binaryString.length; i++) {
      unicodeString.push(String.fromCharCode(parseInt(binaryString[i], 2)));
    }
    return unicodeString.join("");
  }
  
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));