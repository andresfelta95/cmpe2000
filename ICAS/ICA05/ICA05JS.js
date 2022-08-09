
function changeLocation(){
    location = "https://www.google.com/"
}
function changeBackground(){
    var color = document.querySelector("#clr").value;
    document.body.style.background = color;
}

function changeDiemmensions(){
    var text = ("[" + window.innerWidth + ", " + window.innerHeight + "]");
    document.querySelector("#dimText").value = text;
}

function TimeString(){
    window.alert("It is: " + Date());
}

function secretAgent(){
    let text1 = navigator.userAgent;
    this.innerHTML = text1;
}

function promptText() {
    var text2 = prompt("Current value (" + this.innerHTML + ") +, Enter a new number", "5");
    if (isNaN(text2) || text2 == null) {
        alert("The value input is not valid");
    }
    else {
        this.innerHTML = text2;
    }

}

window.onload = function () {
    document.querySelector("#mybutton2").onclick = changeBackground;
    document.querySelector("#mybutton3").onclick = changeDiemmensions;
    document.querySelector("#mybutton5").onclick = secretAgent;
    document.querySelector("#mybutton6").onclick = promptText;    
}
