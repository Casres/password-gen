// References to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
var lowerCaseLettersArray = ("abcdefghijklmnopqrstuvwxyz").split("");
// console.log(lowerCaseLetters);

var upperCaseLettersArray = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
// console.log(upperCaseLetters);

var numberSetArray = ("0123456789").split("");
// console.log(numberSet);

var specialCharactersArray = ("!@#$%^&*").split("");
// console.log(specialCharacters);




function generatePassword() {

var results = "";

var passwordLength = window.prompt("how long would you like your password");
console.log(passwordLength);

if (passwordLength >= 8 && passwordLength <=128 ) {

var lowerCaseLetters = window.confirm("would you like upper case?");

var upperCaseLetters = window.confirm("would you like lower case?");

var numberSet = window.confirm("would you like numbers?");

var specialCharacters = window.confirm("would you like special characters?");


} else {
window.alert("outside of parameter, please try again.")
return generatePassword();
}


var people = [];
if (lowerCaseLetters == true) people.push(...lowerCaseLettersArray);

if (upperCaseLetters == true) people.push(...upperCaseLettersArray);

if (numberSet == true) people.push(...numberSetArray);

if (specialCharacters == true) people.push(...specialCharactersArray);

if ( lowerCaseLetters || upperCaseLetters || numberSet || specialCharacters) {
for (var i = 0; i < specialCharacters; i++) {
results += people[Math.floor(Math.random()*people.length)];
}
} else {
window.alert("have a min. of one variable selected to generate password..")
return generatePassword();
}
return results;
}


function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);