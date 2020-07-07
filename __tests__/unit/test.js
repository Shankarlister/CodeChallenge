const util = require("../../utility");
it("case sensitive check", () => {
  let result = util.verifyPalindrome('Racecar', true);
  expect(result).toBeFalsy();
});


it("case insensitive check ", () => {
  let result = util.verifyPalindrome('Racecar', false);
  expect(result).toBeTruthy();
});


it("special character check", () => {
  let result = util.verifyPalindrome('Racecar!@#',false);
 expect(result).toBeFalsy();
});


it("Verify that the passed string is empty", () => {
  let result = util.verifyPalindrome('', false);
 expect(result).toBeFalsy();
});


it("Removing leading and trailing space", () => {
  let result= util.removeLeadingAndTrailingSpace('     javascript program        ');
   expect(result).toBe('javascript program')
 });


 it("Removing all the space in a string ", () => {
   let result = util.removingWhiteSpace('javascript program');
   expect(result).toBe('javascriptprogram')
 });



