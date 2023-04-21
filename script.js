// Assignment code here

//MADE ARRAYS
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
  let finalPasswordArray = [];

  let generatedPassword = "";
  // ADDED PROMPTS, CONFIRMS, AND ALERTS TO PAGE
  const passwordLengthOption = prompt(
    "Pick a password length between 8-128 characters."
  );

  const parsedPassword = Number(passwordLengthOption);

  if (parsedPassword < 8 || parsedPassword > 128) {
    return alert("Try again! Password must be between 8-128 characters.");
  }

  if (isNaN(parsedPassword)) {
    return alert("Please use numbers only!");
  }

  const isLowerCase = confirm(
    "Do you want lowercase letters in your password?"
  );
  const isUpperCase = confirm(
    "Do you want uppercase letters in your password?"
  );
  const isNumeric = confirm("Would you like your password to include numbers?");
  const isSpecial = confirm(
    "Would you like your password to include any special characters?"
  );

  if (isLowerCase === true) {
    finalPasswordArray.push(...lowerCase);
  }
  if (isUpperCase === true) {
    finalPasswordArray.push(...upperCase);
  }
  if (isNumeric === true) {
    finalPasswordArray.push(...numbers);
  }
  if (isSpecial === true) {
    finalPasswordArray.push(...specialC);
  }

  if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecial) {
    return alert("Please choose at least one category!");
  }

  for (let index = 0; index < parsedPassword; index++) {
    //code
    generatedPassword +=
      finalPasswordArray[Math.floor(Math.random() * finalPasswordArray.length)];
  }

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // ADDED AN OPENING MESSAGE TO BE DISPLAYED WITH PASSWORD IN THE TEXT AREA
  passwordText.value = "Your generated password is: " + password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
