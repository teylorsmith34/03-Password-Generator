// Assignment code here

//
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const specialC = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  "'",
  "<",
  ">",
  ",",
  ".",
  "?",
];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ADDED PROMPTS AND CONFIRMS TO SITE
  const passwordLength = prompt(
    "Pick a password link between 8-128 characters."
  );

  const lowCaseOption = confirm(
    "Do you want lowercase letters in your password?"
  );
  const upperCaseOption = confirm(
    "Do you want uppercase letters in your password?"
  );
  const numericOption = confirm(
    "Would you like your password to include numbers?"
  );
  const specialOption = confirm(
    "Would you like your password to include any special characters?"
  );
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
