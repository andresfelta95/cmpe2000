var pictureArray = [];
var count = 0;
var timer = 0;


window.onload = function () {
    //We initialize a string to refer to the 
    //name of the folder containing the pictures.
    var pathname = "images/";

    for (i = 1; i <= 5; i++) {
        //since the pictures are called picture1.jpg,
        //picture2.jpg etc. it's easy to dynamically build the
        //full path name.

        var imagename = pathname + "picture" + i + ".jpg";
        console.log("loading image: " + imagename);
        var myImage = new Image();
        myImage.src = imagename;
        pictureArray.push(myImage);
    }
    var elem1 = document.querySelector("#picture");
    //We initialize the image element with the first
    //element in the array
    elem1.setAttribute("src", pictureArray[0].src);

    document.querySelector("#changePicture").onclick = changePicture;
    document.querySelector("#displayOnTimer").onclick = changePictureOnTimer;
    document.querySelector("#stopTimer").onclick = stopTimer;

}


//changPicture() changes the src attribute of the 
//picture element each time it's called
function changePicture() {
    count = (count + 1) % 5;
    var elem1 = document.querySelector("#picture");
    elem1.setAttribute("src", pictureArray[count].src);

}

/*changePictureOnTimer()Calls back the function 
changePicture()every 2 seconds. Since 
changePicture() changes the  src attribute of the
picture element each time it’s called,
the function changePictureOnTimer will cause the 
displayed picture to automatically change every 
2 seconds.
The syntax of the setInterval is:
<TimerVariable>= setInterval(<function>,<time in ms>)
*/
function changePictureOnTimer() {
    timer = setInterval(changePicture, 2000);
}

function stopTimer() {
    clearInterval(timer);
}