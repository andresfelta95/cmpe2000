/*week7_3.js
   Author: Oveeyen Moonian
   Date: 28 February 2022

   This file is used to demonstrate how we can dynamically add a picture to an image element
   and also how we can dynamically style an element to the same style as another element

*/




/*
  This function sets the height of the img element with id pic2
  to be the same as that of the element with id myPic
*/

function adjustImageHeight() {
    var height1 = document.querySelector("#country");
    var picStyle = window.getComputedStyle(height1);
    var elemHeight = picStyle.getPropertyValue("height");
    var myImage = document.querySelector("#myPic");
    myImage.setAttribute("height", elemHeight);
}
window.onload = () => {
    document.querySelector("#adjustImage").onclick = adjustImageHeight;
    document.querySelector("#addPicBtn").onclick = addPicture;
    document.querySelector("#resizeBtn").onclick = () => {
        var height1 = document.querySelector("#myPic");
        var picStyle = window.getComputedStyle(height1);
        var elemHeight = picStyle.getPropertyValue("height");
        var myImage = document.querySelector("#pic2");
        myImage.setAttribute("height", elemHeight);
    }
}

/*This function adds a picture to an image element by setting its src attribute*/

function addPicture() {
    var myImage = document.querySelector("#pic2");
    myImage.setAttribute("src", "images/AmericanNaked.jpg");
}

