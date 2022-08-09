//File week7_2.js
/*Function called on form validation for file
  week7demo2/index.html
  The function will return false if the textbox
  for firstname is empty. Otherwise, it returns true.
  In this case, the binding is done in the html file.
  */


function validate() {
alert("Hi!- Performing Form Validation");
var elem = document.querySelector("[name=firstName]");
if (elem.value == "") {
  alert("First Name Cannot be Null");
  return false;
}
alert("Valid Value");
return true;

}


//File week7_2.js
/*Function called on form validation for file
  week7demo2/index.html
  The function will return false if the textbox
  for firstname is empty. Otherwise, it returns true.
  In this case, the binding is done in the html file.
  */

/*
function validate() {
alert("Hi!- Performing Form Validation");
var elem = document.querySelector("[name=firstName]");
if (elem.value == "") {
  alert("First Name Cannot be Null");
  return false;
}
alert("Valid Value");
return true;

}
*/