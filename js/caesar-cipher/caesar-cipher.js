var input = "abc ?!@ xyz"; // Sample input
var shift = 10;
var charCodeOutput = [];
for (var i = 0; i <= input.length - 1; i++) {
  
  if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122 ) { // Alphabet is from 97 to 122
    if (input.charCodeAt(i) + shift > 122) {
      charCodeOutput.push(96 + (input.charCodeAt(i) + shift)-122);
    } else{
      charCodeOutput.push(input.charCodeAt(i) + shift);
    };
  } else{
    charCodeOutput.push(input.charCodeAt(i)); // Don't shift charcodes of other things (spaces, symbols, puncuation, etc.)
  };
};
var output = ""; //clear the output
console.log(charCodeOutput);
for (var i =  0; i <= charCodeOutput.length - 1; i++) {
  console.log(String.fromCharCode(charCodeOutput[i]));
  output = output + String.fromCharCode(charCodeOutput[i]);
};
console.log(output);