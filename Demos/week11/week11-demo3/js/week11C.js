/* Registering Event Handlers when the document is ready*/
$(document).ready(function () {
  //Anonymous function- handler for the click event for the button with id 'tableButton'.
  //  The anonymous function simply calls the tabilize() function to generate the table
  
  $("#tableButton").click(function () {
    tabilize()
  });

  
  //Anonymous function- handler for the click event for the button with id 'picButton'.
  // The anonymous function calls the showPicture() function to assign the src attribute for the imagae

  $("#picButton").click(function () {
    showPicture();
  });

  $("#dispAttr").click(function () {
    displayAttr();
  });


  //Anonymous function- handler for the click event for the button with id 'picButton2'.
  //    The anonymous function calls the showPicture2() function to assign the src attribute for the imagae

  $("#picButton2").click(function () {
    showPicture2();
  });



  $("#dispProp").click(function () {
    displayProp();
  });
});

function tabilize() {
  let rowValue = parseInt(prompt("Give Number of Rows for Table"));
  let colValue = parseInt(prompt("Give Number of Columns for Table"));
  let str = "";
  str = str + "<table>"
  str = str + "<tr><th>X</th>";
  //Setting up the header row
  for (var col = 1; col <= colValue; col++)
    str = str + "<th>" + col + "</th>";

  str = str + "</tr>";
  //Setting up the remaining rows
  for (var row = 1; row <= rowValue; row++) {
    str = str + "<tr>" + "<td style='font-weight:bold'>" + row + "</td>";
    for (var col = 1; col <= colValue; col++)
      str = str + "<td>" + col * row + "</td>";
    str = str + "</tr>";
  } str = str + "</table>";
  //Using jQuery selector and html method to change
  //the innerHTML component of the element with id 'myTable'
  $("#myTable").html(str);

}


//The function showPicture() sets the src attribute  for the image with id 'myPic' using the 'attr'
//function

function showPicture() {
  $("#myPic").attr("src", "images/picture1.jpg");
}

function displayAttr() {
  alert($("#myPic").attr("src"));
}

//The function showPicture2() sets the src attribute
// for the image with id 'myPic' using the 'prop'
//function

function showPicture2() {
  $("#myPic2").prop("src", "images/picture1.jpg");
}

function displayProp() {
  alert($("#myPic2").prop("src"));
}
