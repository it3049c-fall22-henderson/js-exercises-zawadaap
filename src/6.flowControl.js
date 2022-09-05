/**
 * write a function that receives a number as its argument;
 *    if the number is divisible by 3, the function should return `fizz`;
 *    if the number is divisible by 5, the function should return `buzz`;
 *    if the number is divisible by 3 and 5, the function should return `fizzbuzz`;
 *    if the value was provided was a number but doesn't match any of those criteria, return the number as is.
 *    if no number was provided or if the value provided wasn't a number (hint: typeof), return false
 */
 function fizzBuzz(num) {
  var numb = parseInt(num);
  var div3 = (numb / 3);
  var div5 = (numb / 5);
  var mult3 = div3 * 3;
  var mult5 = div5 * 5;
   mult3;

  if (numb % 5 == 0 && numb % 3 == 0) {
    return "fizzbuzz";
  }
  else if (numb % 3 == 0) {
    return "fizz";
  }
  else if (numb % 5 == 0) {
    return "buzz";
  }
  else if (typeof numb === 'number' && numb % 3 > 0 && numb % 5 > 0 ) {
    return num;
  }
  else {
    return false;
  }

}
module.exports = {
  fizzBuzz
};
