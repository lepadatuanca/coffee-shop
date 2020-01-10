 function validate() {    
 if( document.logInForm.user.value == "" ) {
	alert( "Please provide an username!" );
	document.logInForm.user.focus() ;
	return false;
 }
 if( document.logInForm.pass.value == "" ) {
	alert( "Please provide a password!" );
	document.logInForm.pass.focus() ;
	return false;
 }
 

 return( true );
}

 
