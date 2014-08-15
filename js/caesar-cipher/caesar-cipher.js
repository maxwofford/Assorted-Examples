var input = "abc ?!@"; // Sample input
var shift = 1;
var charCodeOutput = [];
for (var i = 0; i <= input.length - 1; i++) {
  
  if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 121 ) { // Alphabet is from 97 to 122
    charCodeOutput.push(input.charCodeAt(i) + shift); // Shift charcodes of letters 
  } else{
    charCodeOutput.push(input.charCodeAt(i)); // Don't shift charcodes of other things (spaces, symbols, puncuation, etc.)
  };
};
var output = ""; //clear the output
console.log(charCodeOutput);
for (var i =  0; i <= charCodeOutput.length - 1; i++) {
  console.log("String.fromCharCode(charCodeOutput[i])");
  output = output + String.fromCharCode(charCodeOutput[i]);
};
console.log(output);