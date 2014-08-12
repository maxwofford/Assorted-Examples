//Example input:
var myArray = ["1a2a","aahs","aals","abas","abba","abbe","abed","abet"];

//Checks if the last letter of each string is equal to the second letter. Then outputs to array:
var output = [];
for (var i = 0; i < myArray.length; i++) {
	if (myArray[i].charAt(1) == myArray[i].charAt(3)) {
		output.push(myArray[i]);
	};
};