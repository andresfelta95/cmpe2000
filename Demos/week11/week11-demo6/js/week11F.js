

$(function () {
  //Picture fades in with 5 sec duration, then executes the callback
  $("#pictureIn").click(function () {
    $("#mypicture").fadeIn(5000, function () {
      $("#changePicture").show();
      $("#pictureOut").show();
      $("#pictureBlur").show();      
    }
    );
  })
  //Picture fades out with 5 sec duration, then executes the callback 
  $("#pictureOut").click(function () {
    $("#mypicture").fadeOut(5000, function () {
      $("#changePicture").hide();
      $("#changePicture").hide();
      $("#pictureOut").hide();
      $("#pictureBlur").hide();
      $("#pictureBrighten").hide();
    }
    );
  });
  
  
  //Blurring the picture to opacity of 0.4
  $("#pictureBlur").click(function () {
    $("#mypicture").fadeTo(5000, 0.4, function () {
      $("#pictureBlur").hide();
      $("#pictureBrighten").show()
    });
  });
  
  
  //Displaying the picture to full opacity
  $("#pictureBrighten").click(function () {
    $("#mypicture").fadeTo(5000, 1, function () {
      $("#pictureBrighten").hide();
      $("#pictureBlur").show()
    });
  });
  
  
  $("#changePicture").click(function () {
    $("#mypicture").prop("src", "images/picture2.jpg").fadeIn(5000);

  });

  
  $("#mypicture").hide();
  $("#changePicture").hide();
  $("#pictureOut").hide();
  $("#pictureBlur").hide();
  $("#pictureBrighten").hide();


})



