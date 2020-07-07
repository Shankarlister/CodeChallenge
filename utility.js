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

exports.removeLeadingAndTrailingSpace = (str) => {
  return str.replace(/\s+/g, ' ').trim();
}


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


