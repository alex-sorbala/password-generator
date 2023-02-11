var passwordLengthEL = document.getElementById("passwordLength");
var lowercaseEL = document.getElementById("lowercase");
var uppercaseEL = document.getElementById("uppercase");
var numericEL = document.getElementById("numeric");
var specialEL = document.getElementById("specialCharacter");

var passwordLength;
var lowercase;
var uppercase;
var numeric;
var special;

function generate(){
  passwordLength = passwordLengthEL.value;
  lowercase = lowercaseEL.checked;
  uppercase = uppercaseEL.checked;
  numeric = numericEL.checked;
  special = specialEL.checked;

  console.log(isNaN(passwordLength));
  if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    window.alert(passwordLength + " Should be a number between 8-128");
  }else{
    console.log("Success")
  }
}
