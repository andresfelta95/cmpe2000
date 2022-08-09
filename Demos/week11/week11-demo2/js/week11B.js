/* We use val with a selctor to both access the value 
   and set the value of an input control.
   The function in this file are called from
   Winter2021_Week10demo2.html

   Oveeyen Moonian- 24 March 2021
*/


$(function () {

  $("#mybutton").click(function () {
    //Obtaining the value of the textbox with id
    //"userName" and displaying it in an alert message
    alert("TextBox value is:" + $("#userName").val());
  })


/*The function below executes when the button with
 id "changeText" is clicked.
 It obtains a value from a prompt box and sets the 
 value of the control with id "userName"
 */

$("#changeText").click(function () {
  var textValue = prompt("Give the text box value:");
  $("#userName").val(textValue);
})


})

