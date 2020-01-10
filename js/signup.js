 function validate() {    
 if( document.signUpForm.email.value == "" ) {
	alert( "Please provide your e-mail!" );
	document.signUpForm.email.focus() ;
	return false;
 }
 
 if( document.signUpForm.user.value == "" ) {
	alert( "Please provide an username!" );
	document.signUpForm.user.focus() ;
	return false;
 }

 return( true );
}
var myInput = document.getElementById("pass");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
function focuss() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
function blurry() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
function validd() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(document.signUpForm.pass.value.match(lowerCaseLetters)) {
    document.getElementById("letter").classList.remove("invalid");
    document.getElementById("letter").classList.add("valid");
  } else {
    document.getElementById("letter").classList.remove("valid");
    document.getElementById("letter").classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(document.signUpForm.pass.value.match(upperCaseLetters)) {
    document.getElementById("capital").classList.remove("invalid");
    document.getElementById("capital").classList.add("valid");
  } else {
    document.getElementById("capital").classList.remove("valid");
    document.getElementById("capital").classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(document.signUpForm.pass.value.match(numbers)) {
    document.getElementById("number").classList.remove("invalid");
    document.getElementById("number").classList.add("valid");
  } else {
    document.getElementById("number").classList.remove("valid");
    document.getElementById("number").classList.add("invalid");
  }

  // Validate length
  if(document.signUpForm.pass.value.length >= 8) {
    document.getElementById("length").classList.remove("invalid");
    document.getElementById("length").classList.add("valid");
  } else {
    document.getElementById("length").classList.remove("valid");
    document.getElementById("length").classList.add("invalid");
  }
  return true;
}
 
