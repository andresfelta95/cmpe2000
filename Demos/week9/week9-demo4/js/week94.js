
var timer;
var display = 0;


window.onload = () => {

    document.querySelector("#button1").onclick = addParagraph;
    document.querySelector("#button2").onclick = RemoveParagraph;
    document.querySelector("#button3").onclick = addPicture;
    document.querySelector("#button4").onclick = RemovePicture;

    document.querySelector("#timerDisplayBtn").onclick = () => {
        timer = setInterval(DisplayPicOnTimer, 1000);
    }
    document.querySelector("#timerClearBtn").onclick = () => {
        clearInterval(timer);
    };
}


function addParagraph() {
    var elem = document.querySelector("#placeHolder");
    var newElem = document.createElement("p");
    var myText = prompt("Give a new Text", "");
    var newNode = document.createTextNode(myText);
    newElem.appendChild(newNode);
    newElem.setAttribute("id", "myNode");
    elem.appendChild(newElem);
}

function RemoveParagraph() {
    var elem = document.querySelector("#placeHolder");
    var reqNode = document.querySelector("#myNode");
    elem.removeChild(reqNode);
}

function addPicture() {
    var elem = document.querySelector("#imageHolder");
    var newElem = document.createElement("img");
    newElem.setAttribute("src", "images/bird1.jfif");
    newElem.setAttribute("id", "myPic");
    elem.appendChild(newElem);
}

function RemovePicture() {
    var elem = document.querySelector("#imageHolder");
    var reqNode = document.querySelector("#myPic");
    elem.removeChild(reqNode);
}



function DisplayPicOnTimer() {
    if (display == 0) {
        addPicture()
        display = 1;
    }
    else {
        RemovePicture();
        display = 0;
    }

}
