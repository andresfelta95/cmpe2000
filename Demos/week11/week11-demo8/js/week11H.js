
//This js file is used to illustrate the use of the jQuery  "on" method

//The jQuery document.ready event handler function
$(() => {

    //Clicking on the button with id "mybutton" allows us to experiment with the target of the event
     $("#mybutton").on("click", function (e) {
 
         alert(`event occured on ${e.target}`);
         alert(`mouse was clicked at position:(${e.pageX},${e.pageY}) `);
         $(e.target).css("background-color", "blue");
         $(e.target).css("color", "red");
 
     })
 

    //Illustrating the get and set charateristics of the jQuery manipulators
    //Note that in this case we are not changing properties of the button. So we don't need
    // the parameter e
      $("#button2").on("click", function () {
          var elem = $("#myParagraph");
  
          //Note that by enclosing elem in the $() function, we make it a jQuery object
          alert("The initial Text is: " + $(elem).html());
          alert("The font size is: " + $(elem).css("font-size"));
          alert("The font color is: " + $(elem).css("color"));
      })
  


    //We set new text for an element
      $("#button3").on("click", function () {
          var elem = $("#myParagraph");
  
          //Note that by enclosing elem in the $() function, we make it a jQuery object
          var newText = prompt("Give the new text: ");
          $(elem).html(newText);
          var fontSize = prompt("Give the new font size (specify whether px or em): ");
          $(elem).css("font-size", fontSize);
          var newColor = prompt("Give the new font color as a color name: ");
          $(elem).css("color", newColor);
      })
  
  
});