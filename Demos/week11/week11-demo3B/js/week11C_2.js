/* Registering Event Handlers when the document is ready*/
$(function () {
  /*Anonymous function- handler for the click event
    
  */
  
    $("#check1").click(function() {
      //Using prop and attr with the checked property to illustrate the differences
      alert("The prop value is: " + $(this).prop("checked"));
      alert("The attr value is: " + $(this).attr("checked"));
  
      //Checking for the checked value and displaying a message accordingly in the console
      if ($(this).prop("checked"))
        console.log("The checkbox is checked");
      else
        console.log("The checkbox is unchecked");
  
    });
  
})