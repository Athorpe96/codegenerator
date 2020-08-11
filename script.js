// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppers = "QWRETYUIOPADSFGHJLKZXCVBNM";
var lowers = "wqetryiuopasdfghjklzxcvbmn";
var numbers = "1234567890";
var symbols = "!@#$%^&*(){}[]=<>/,.";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var finalString = "";
function generatePassword() {



  var length = Number(
    prompt("How many characters would you like your password to be?")
  );
  while (isNaN(length) || length < 8 || length > 128)
    length = Number(
      prompt(
        "Length must be 8-128 characters. How many characters would you like your password to be?"
      )
    );

  var uppersChoice = confirm("Would you like to use uppercase letters?");

  var lowersChoice = confirm("Would you like to use lowercase letters?");

  var numbersChoice = confirm("Would you like to use numbers?");

  var symbolsChoice = confirm("Would you like to use special characters?");

  while (!uppersChoice && !lowersChoice && !numbersChoice && !symbolsChoice) {
    alert("You must select at least one character type!");
    uppersChoice = confirm("Would you like to use uppercase letters?");
    lowersChoice = confirm("Would you like to use lowercase letters?");
    numbersChoice = confirm("Would you like to use numbers?");
    symbolsChoice = confirm("Would you like to use special characters?");
  }

  if (uppersChoice === true) {
    finalString += uppers;
  }
  if (lowersChoice === true) {
    finalString += lowers;
  }

  if (numbersChoice === true) {
    finalString += numbers;
  }
  if (symbolsChoice === true) {
    finalString += symbols;
  }

  var password = "";

  for (i = 0; i < length; i++) {
    var character = finalString[Math.floor(Math.random() * finalString.length)];
    password += character;
  }

  return password;
}


