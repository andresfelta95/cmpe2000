function setTextPar1(){
    var elem = document.querySelector("#p1");
    var str1 = prompt("give the string you want to display for paragah 1", "None");
    elem.innerHTML = str1;
}

function setTextPar2(){
    var elem = document.querySelector("#p2");
    var str1 = prompt("give the string you want to display for paragah 2", "None");
    elem.innerHTML = str1;
}

window.onload = function () {
    document.querySelector("#mybutton1").onclick = setTextPar1;
    var elem = document.querySelector("#mybutton2");
    elem.onclick = setTextPar2;

    document.querySelector("#mybutton3").onclick = setTextAny;
}

/*onload = function(){

}*/

function setTextAny() {
    var str = prompt("give the paragraph number", "3");
    if (isNaN(str)) {
        alert("The value input is not valid");
    }
    else {
        var num = parseInt(str);
        var elem = document.querySelector("#p" + num);
        var str1 = prompt("give the string you want to display", "None");
        elem.innerHTML = str1;
    }

}