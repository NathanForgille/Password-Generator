// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '1234567890'
var symbols = "!$%&()-?@^"

function generatePassword() {
    var password = "";
    var passwordLength = prompt("How long do you want the password to be?", "Must be 8-128");
    if (passwordLength < "8") {
        passwordLength = prompt("Password length needs to be equal to or greater than 8.", "ex.8-128");
    }
    else if (passwordLength > "128") {
        passwordLength = prompt("Password length needs to be equal to or less than 128");
    }
    var expectedCharacterTypes = ["lower case", "upper case", "numbers", "symbols"];

    var characterTypes = prompt("What character types would you like to include? (valid choices are upper case, lower case, numbers, symbols)", "upper case, lower case, numbers, symbols");
    characterTypeArray = characterTypes.split(", ");
    for (var i = 0; i < expectedCharacterTypes.length; i++) {
        if (characterTypeArray.includes(expectedCharacterTypes[i])) {
            break;
        }
        else if (i === expectedCharacterTypes.length - 1) {
            characterTypes = prompt("Please input at least one of the following valid options (valid choices are upper case, lower case, numbers, symbols)", "upper case, lower case, numbers, symbols");
            characterTypeArray.splice(0, characterTypeArray.length);
            var characterTypeArray = characterTypes.split(", ");
        }
    }

    var numberOfTypes = characterTypeArray.length;
    var numberPerType = Math.floor(passwordLength / numberOfTypes);
    characterTypeArray.forEach(function (type) {
        for (var i = 0; i < numberPerType; i++) {
            if (type === "lower case") {
                var indexToAccess = Math.floor(Math.random() * 25);
                password += lowerCase[indexToAccess];
            }
            if (type === "upper case") {
                var indexToAccess = Math.floor(Math.random() * 25);
                password += upperCase[indexToAccess];
            }
            if (type === "numbers") {
                var indexToAccess = Math.floor(Math.random() * 9);
                password += numbers[indexToAccess];
            }
            if (type === "symbols") {
                var indexToAccess = Math.floor(Math.random() * 9);
                password += symbols[indexToAccess];
            }
        }
    })

    if (password.length < passwordLength) {
        var difference = passwordLength - password.length;
        var extraCharactertype = characterTypeArray[0];
        for (var i = 0; i < difference; i++) {
            if (extraCharactertype === "lower case") {
                var indexToAccess = Math.floor(Math.random() * 25);
                password += lowerCase[indexToAccess];
            } 
            if (extraCharactertype === "upper case") {
                var indexToAccess = Math.floor(Math.random() * 25);
                password += upperCase[indexToAccess];
            }
            if (extraCharactertype === "numbers") {
                var indexToAccess = Math.floor(Math.random() * 9);
                password += numbers[indexToAccess];
            }
            if (extraCharactertype === "symbols") {
                var indexToAccess = Math.floor(Math.random() * 9);
                password += symbols[indexToAccess];
            }
        } 
    }
    return password;
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword()





    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);