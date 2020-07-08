
/**
 * @param {*} input 
 * @param {*} caseSensitiveFlag 
 * This method checks whether the given string/phrase is palindrome or not
 */
exports.verifyPalindrome = (input, caseSensitiveFlag) => {
  input = caseSensitiveFlag ? input : input.toLowerCase();
  let strLen = input.length;
  let output = '';
  while (strLen >= 0) {
    output += input.charAt(strLen);
    strLen--;
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
  let lp = 0;
  while (lp < inputArr.length) {
    output += inputArr[lp];
    lp++;
  }
  return output;
}