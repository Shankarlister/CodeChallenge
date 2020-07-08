const util = require("../../utility");

describe("Scenarios to check whether the string/phrase is palindrome or not ", () => {
  it("case sensitive check on valid palindrome", () => {
    let result = util.verifyPalindrome('RacecaR', true);
    expect(result).toBeTruthy();
  });

  it("case sensitive check on invalid palindrome", () => {
    let result = util.verifyPalindrome('moon', true);
    expect(result).toBeFalsy();
  });

  it("case insensitive check on valid palindrome", () => {
    let result = util.verifyPalindrome('RACEcar', false);
    expect(result).toBeTruthy();
  });

  it("case insensitive check on invalid palindrome", () => {
    let result = util.verifyPalindrome('Testing', false);
    expect(result).toBeFalsy();
  });

  it("Check whether the alpha numeric is a palindrome", () => {
    let result = util.verifyPalindrome('Reacecar007', false);
    expect(result).toBeFalsy();
  });

  it("Check whether a string with special charcters is a palindrome", () => {
    let result = util.verifyPalindrome('Racecar!@#', false);
    expect(result).toBeFalsy();
  });

  it("Verify that the passed string is empty", () => {
    let result = util.verifyPalindrome('', false);
    expect(result).toBeFalsy();
  });

  it("checking whether the given number is a palindrome", () => {
    let result = util.verifyPalindrome('16461', false);
    expect(result).toBeTruthy();
  });

  it("checking whether the given number is a not a palindrome", () => {
    let result = util.verifyPalindrome('164612', false);
    expect(result).toBeFalsy();
  });

  it("checking whether the given phrase is a palindrome-valid phrase", () => {
    let result = util.verifyPalindrome('straw warts', false);
    expect(result).toBeTruthy();
  });

  it("checking whether the given phrase is a palindrome-invalid phrase", () => {
    let result = util.verifyPalindrome('This is a QA process', false);
    expect(result).toBeFalsy();
  });

  it("checking whether the given word with puntuation is a palindrome", () => {
    let result = util.verifyPalindrome("A Toyata's car", false);
    expect(result).toBeFalsy();
  });

});


describe("Scenarios to remove space from a given string/phrase", () => {
  it("Removing leading and trailing space", () => {
    let result = util.removingWhiteSpace('     javascript        ');
    expect(result).toBe('javascript')
  });

  it("Removing the space in a string contains single space ", () => {
    let result = util.removingWhiteSpace('javascript program');
    expect(result).toBe('javascriptprogram')
  });

  it("Removing the space in a string contains more than one space", () => {
    let result = util.removingWhiteSpace('javascript      program');
    expect(result).toBe('javascriptprogram')
  });

});








