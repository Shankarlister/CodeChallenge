
/**
 * @param {*} input 
 * @param {*} caseSensitiveFlag 
 * This method checks whether the given string/phrase is palindrome or not
 */
exports.verifyPalindrome = (input, caseSensitiveFlag) => {
  input = caseSensitiveFlag ? input : input.toLowerCase();
  let strIndex = input.length;
  let output = '';
  while (strIndex >= 0) {
    output += input.charAt(strIndex);
    strIndex--;
  }
  return input === '' ? false : input === output;
}

/**
 * @param {*} input 
 * This method removes the white space in a given string/phrase
 */
exports.removingWhiteSpace = (input) => {
  let inputArr = input.split(" ")
  let output = '';
  let strIndex = 0;
  while (strIndex < inputArr.length) {
    output += inputArr[strIndex];
    strIndex++;
  }
  return output;
}