// Assignment Code
var generateBtn = document.querySelector("#generate");
//List of number characters:
const listofnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//List of the letters capitalised:
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//List of letters nomrally:
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//List of special charact
const specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ’ ", " ", " ” ", "\\"];
 //Prompts:
//  Password length
function generatePassword() {
  let choices = [];
  var results = "";
  while(results===""){
  var passwordlength = prompt(
    "Please choose the length of the password between 8 and 128 characters"
    );
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Please enter a valid password-length");
    generatePassword();
  } else if (passwordlength === "" || isNaN(passwordlength)) {
    alert("Please enter a valid password-length");
    generatePassword();
  }
  //Number criteria prompt
  var numbersPrompt = confirm(
    "Would you like to a number in your password?"
  );
  //Uppercase criteria prompt
  var upperCasePrompt = confirm(
    "Would you like a uppercase letters in your password?"
  );
  //Lowercase criteria prompt
  var lowerCasePrompt = confirm(
    "Would you like lowercase letters in your password?"
  );
  //Specialcharacters criteria prompt
  var specialCharactersPrompt = confirm(
    "Would you like special characters !\“#$%&‘()*+,-./:;<=>?@[]^_ ETC? in your new password?"
    );
  if (numbersPrompt === true) {
    choices = choices.concat(listofnumbers);
  }
  if (lowerCasePrompt === true) {
    choices = choices.concat(lowerCaseLetters);
  }
  if (upperCasePrompt === true) {
    choices = choices.concat(upperCaseLetters);
  }
  if (specialCharactersPrompt === true) {
    choices = choices.concat(specialCharacters);
  }
  if (
    lowerCasePrompt === false &&
    upperCasePrompt === false &&
    specialCharactersPrompt === false &&
    numbersPrompt === false
  ) {
    alert("Please select atleast one option.");
  }

  if(choices.length){
    for (let i = 0, n = choices.length; i < parseInt(passwordlength); i++) {
      results += choices[Math.floor(Math.random() * n)];
    }
  }
}
  return results;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





