// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
// Write password to the #password input
function writePassword() 
  var password = generatePassword() 


    //I need to write a function that prompts the user to select the password length between 8-128 characters
    //prompt: the amount of characters in lower case; upper case, numbers, and special characters. 
    //the user must select something for each criteria
    //if the user does not meet criteria function will return error
    //function that meets criteria will return a randomly generated password saved in local storage

  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);