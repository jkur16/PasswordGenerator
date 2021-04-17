var numbers = '0123456789'.split('');
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;


// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // password i want to write that returns a string
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  

// Asking user for password length
function generatePassword() {
  passwordLength = prompt("How long would you like your password? (Between 8 and 128 characters)");
  console.log("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);

  // Asking user for remaining criteria
  } else { 
    confirmLower = confirm("Would you like lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Would you like upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Would you like numbers?");
    console.log("Number " + confirmNumber);
    confirmCharacters = confirm("Would you like characters?");
    console.log("Characters " + confirmCharacters);

  };

  // If user answers no to all criteria
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmCharacters) {
    userChoices = alert("You need to choose at least one criteria");

  // If 4 options return true
  } else if (confirmLower && confirmUpper && confirmNumber && confirmCharacters) {
    userChoices = lowerCase.concat(upperCase, numbers, characters);
    console.log(userChoices);
  }
  // If 3 options return true
  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmUpper && confirmCharacters) {
    userChoices = lowerCase.concat(upperCase, characters);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber && confirmCharacters) {
    userChoices = lowerCase.concat(numbers, characters);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber && confirmCharacters) {
    userChoices = upperCase.concat(numbers, characters);
    console.log(userChoices);
  }
  // If 2 options return true
  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmCharacters) {
    userChoices = lowerCase.concat(characters);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmCharacters) {
    userChoices = upperCase.concat(Characters);
    console.log(userChoices);
  }
  else if (confirmNumber && confirmCharacters) {
    userChoices = numbers.concat(Characters);
    console.log(userChoices);
  }
  // If only 1 option return true
  else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (confirmCharacters) {
    userChoices = characters;
    console.log(userChoices);
  };

  
  var passwordBlank = [];
  
  // Random password selection loop
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Returning the password 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}