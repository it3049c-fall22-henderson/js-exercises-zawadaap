//reverseString: you should be able to reverse a string
// Example: "abc" => "cba"
function reverseString(str) {
  var splitStr = str.split("");
  var reverseArray = splitStr.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

//capitalize: should return the input in all-caps
// Example: "this is a string" => "THIS IS A STRING"
function capitalize(str) {
  return str.toUpperCase() ;
}

// splitString: should divide a string into substrings and return an array
// Example: "Jane,Doe,21"  =>  [ "Jane", "Doe", "21" ]
function splitString(str, splitAt = `,`) {
  return str.split(',');
}
module.exports = {
  reverseString,
  capitalize,
  splitString
};