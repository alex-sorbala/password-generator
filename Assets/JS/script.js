// Locating the <input> and output elements
var passwordLengthEL = document.getElementById("passwordLength");
var lowercaseEL = document.getElementById("lowercase");
var uppercaseEL = document.getElementById("uppercase");
var numericEL = document.getElementById("numeric");
var specialEL = document.getElementById("specialCharacter");
var outputPassword = document.querySelector("textarea");

// Declaring some global variables
var passwordLength;
var lowercase;
var uppercase;
var numeric;
var special;

/*Function executend on button click 
    - will be retrieveng the user provided values 
    - validating the user provided values
    - calls generatePassword() and displays the results if validation passesd
*/
function generate(){
    passwordLength = passwordLengthEL.value;
    lowercase = lowercaseEL.checked;
    uppercase = uppercaseEL.checked;
    numeric = numericEL.checked;
    special = specialEL.checked;

    //validating values
    if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
      window.alert(" Should be a number between 8-128");
    }else if(!(lowercase || uppercase || numeric || special)){
      window.alert("You must select at least one character type");
    }else{
      //generating a password an displaying it on the web page
      outputPassword.textContent = generatePassword();
    }
}

/* My custom password generating function 
  It's inner works are a mistery ;)
*/
function generatePassword() {
    var password = "";

    //string with groups of chacater types
    var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberList = "123456789";
    var specialList = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    //declaring an array and pushing the options that are true
    var characterOptions = [];
      if(lowercase){
        characterOptions.push(lowercaseList);
      }
      if(uppercase){
        characterOptions.push(uppercaseList);
      }
      if(numeric){
        characterOptions.push(numberList);
      }
      if(special){
        characterOptions.push(specialList);
      }

    //generating the password by concatinating random characters from random option strings
    for (let index = 0; index < passwordLength; index++) {
      var randomOption =  Math.floor(Math.random() * characterOptions.length);
      var randomCharIndex =  Math.floor(Math.random() * characterOptions[randomOption].length);
      //adding characters to the password
      password = password + characterOptions[randomOption].charAt(randomCharIndex);
    }

  return password;
}