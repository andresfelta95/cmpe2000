/*The $(document).ready() is like the
window.onload event. It can accomodate an
anonymous function in which we can register our event listeners.
Note that event listeners can also be anonymous functions
*/

/*
$(document).ready(function () {


  $("#mybutton").click(function () {
    $("#placeholder").text("Hello! How are you?");
    $("#colorButton").show();
  })

  $("#colorButton").click(function () {
    $("#placeholder").prop("style", "color:red");
  })


  //The button with id colorButton is initially hidden
  $("#colorButton").hide();

})
*/

/* We can drop the (document).ready and simply 
   use $(function)(){.. }.  comment the block
   above and uncomment the next block*/

/*
$(function () {


  $("#mybutton").click(function () {
    $("#placeholder").text("Hello! How are you?");
    $("#colorButton").show();
  })

  $("#colorButton").click(function () {
    $("#placeholder").prop("style", "color:red");
  })


  //The button with id colorButton is initially hidden
  $("#colorButton").hide();

})
*/


/*We can even use an arrow function instead of the above anonymous function
To try it, comment both the above blocks and uncomment the block below*/

$(() => {
  
  
  $("#mybutton").click(function () {
    $("#placeholder").text("Hello! How are you?");
    $("#colorButton").show();
  })
  
  $("#colorButton").click(function () {
    $("#placeholder").prop("style", "color:red");
  })
  
  
  //The button with id colorButton is initially hidden
  $("#colorButton").hide();
  
})
