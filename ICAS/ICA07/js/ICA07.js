var pictureArray = [];
var picNames = ["Samurai", "Space Warrior", "Jinx", "Ice King", "Ekko"]
var count = 0;
var timer = 0;
var auto = false;


window.onload = function () {    
    document.querySelector("#Next").onclick = nextPic;
    document.querySelector("#Previous").onclick = previousPic;
    document.querySelector("#play").onclick = changePictureOnTimer;
    document.querySelector("#pause").onclick = stopTimer;
    createPictureArray();
}

function PicFrame(imgName, imgNum) {
    
    this.displayName = imgName;
    this.viewCount = 0;
    this.Pic = new Image();
    
}

PicFrame.prototype.assignSource = function (picname) {
    this.Pic.src = picname;
}

function createPictureArray() {
    
    //We initialize a string to refer to the 
    //name of the folder containing the pictures.
    var pathname = "images/";
    
    for (i = 1; i <= 5; i++) {
        //since the pictures are called picture1.jpg,
        //picture2.jpg etc. it's easy to dynamically build the
        //full path name.
        
        var imagename = pathname + "pic_" + i + ".jpg";
        var newPic = new PicFrame(picNames[i - 1]);
        newPic.assignSource(imagename);
        pictureArray.push(newPic);
        
        
    }
    var elem1 = document.querySelector("#picture");
    //We initialize the image element with the first
    //element in the array
    elem1.setAttribute("src", pictureArray[0].Pic.src);
    var elem2 = document.querySelector("#figureCaption");
    elem2.innerHTML = pictureArray[0].displayName + "<br>" + pictureArray[0].viewCount;
    
}


//changPicture() changes the src attribute of the 
//picture element each time it's called
function nextPic() {
    count = (count + 1) % (pictureArray.length);
    var elem1 = document.querySelector("#picture");
    elem1.setAttribute("src", pictureArray[count].Pic.src);
    var elem2 = document.querySelector("#figureCaption");
    ++pictureArray[count].viewCount
    elem2.innerHTML = pictureArray[count].displayName + "<br>" + pictureArray[count].viewCount;


}

function previousPic(){
    if((count -1) < 0)
        count = 5;
    count = (count - 1) % (pictureArray.length);
    var elem1 = document.querySelector("#picture");
    elem1.setAttribute("src", pictureArray[count].Pic.src);
    var elem2 = document.querySelector("#figureCaption");
    ++pictureArray[count].viewCount
    elem2.innerHTML = pictureArray[count].displayName + "<br>" + pictureArray[count].viewCount;
}

/*changePictureOnTimer()Calls back the function changePicture()every 2 seconds. Since 
changePicture() changes the  src attribute of the picture element each time it’s called,
the function changePictureOnTimer will cause the displayed picture to automatically change every 
2 seconds.
The syntax of the setInterval is:<TimerVariable>= setInterval(<function>,<time in ms>)
*/


function changePictureOnTimer() {
    timer = setInterval(nextPic, 2000);
    var elem1 = document.querySelector("#play");
    elem1.setAttribute("hidden", "true")
    var elem2 = document.querySelector("#pause");
    elem2.removeAttribute("hidden")
}

function stopTimer() {
    clearInterval(timer);
    var elem1 = document.querySelector("#play");
    elem1.removeAttribute("hidden")
    var elem2 = document.querySelector("#pause");
    elem2.setAttribute("hidden", "true")
}
