
let changeVal = 0;

$(function () {
  //onclick event handler for the button with id "PictureIn"
  $("#pictureIn").click(function () {
    $("#mypicture").fadeIn();
    $("#pictureOut").show();
    $("#changePicture").show();
    $("#pictureIn").hide();
  })
  //onclick event handler for the button with id "PictureOut"
  $("#pictureOut").click(function () {
    $("#mypicture").fadeOut();
    $("#changePicture").hide();
    $("#pictureOut").hide();
    $("#pictureIn").show();
  })

  //onclick event handler for the button with id "changePicture"
  $("#changePicture").click(function () {
    if (changeVal == 0) {
      $("#mypicture").prop("src", "images/picture2.jpg");
      changeVal = 1;
    }
    else {
      $("#mypicture").prop("src", "images/picture1.jpg");
      changeVal = 0;
    }
  })

  //Initially we only show the pictureIn button. 
  //We hide the other buttons and the picture
  $("#mypicture").hide();
  $("#changePicture").hide();
  $("#pictureOut").hide();
})

