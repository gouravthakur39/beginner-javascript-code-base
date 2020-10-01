function binaryAgent(str) {
  let bytes = str.split(' ');
  let output = '';
    
  for (let k = 0; k < bytes.length; k++){
      output += String.fromCharCode(convertToDecimal(bytes[k]));
  }

  return output;
}

function convertToDecimal(byte) {
  let result = 0;

  byte = byte.split('');

  byte.reverse();

  for (let a = 0; a < byte.length; a++){
    if (byte[a] === '1'){
      result += 2 ** a;
    }
  }

  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
