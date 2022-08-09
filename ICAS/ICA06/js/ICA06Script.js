

function UpdateMake() {
    var radio = document.querySelectorAll(".Model");
    for (var count = 0; count < radio.length; count++)
    {
        radio[count].checked = false;
    }    
    UpdateStatus();
}

function UpdateModel() {
    var chckB = document.querySelectorAll(".Options");
    var count;
    for (count = 0; count < chckB.length; count++)
    {
        chckB[count].checked = false;
        
    }
    if (this.value < 10000) {
        for (count = 0; count < chckB.length; count++)
        {
            chckB[count].disabled = true; 
        }        
    }
    else{
        for (count = 0; count < chckB.length; count++)
        {
            chckB[count].disabled = false; 
        }
    }
    
    Show_Picture();
    
    UpdateStatus();
}

function UpdateStatus() {
    var output;
    var select = document.querySelector("#Make").value;
    var radio = document.querySelectorAll("radio");
    var chbox = document.querySelectorAll("checkbox");
    var modval = 0;    
    var opn = document.querySelectorAll('[name="Options"]:checked').length;
    let opCheck =  document.querySelectorAll('[name="Options"]');
    var optsum = 0;
    var downP = 0;
    downP = document.querySelector("[name=down_payment]").value;
    var balance = 0;
    if (document.querySelector("#Make")[0].selected == false && document.querySelector("#Make")[1].selected == false && document.querySelector("#Make")[2].selected == false){
        output = "No Make selected";        
    }
    else if (document.querySelector('[name="Model"]:checked') == null){
        output = "No Model Selected";
        var elem = document.querySelector("#bike");
        elem.removeAttribute("src")        
    }
    else if (isNaN(downP) == true || downP == ""){
        output = "Invalid Down Payment";        
    }
    else
    {
        for ( var count = 0; count < opCheck.length; count++)
        {
            if(opCheck[count].checked == true)
            {
                optsum += parseInt(opCheck[count].value);
            }
            
        }
        if (document.querySelector('[name="Model"]:checked')) {
            modval = parseInt(document.querySelector('[name="Model"]:checked').value);      
        }
        balance = modval + optsum - downP;
        output = "Selection: " + select + " : $" + modval + " : " + opn + " options selected" + "<br>" 
            + "$" + modval + " + " + optsum + " - " + downP + " = " + "$" + balance;
    }
    document.querySelector("#message").innerHTML = output;
}

function Show_Picture()
{
    var myImage = document.querySelector("#bike");
    switch(document.querySelector("#Make").value)
    {
        case "Honda":
            switch(document.querySelector('[name="Model"]:checked').value)
            {
                case "5000":
                    myImage.setAttribute("src", "images/JapaneseScooter.jpg");
                    break;
                case "10000":
                    myImage.setAttribute("src", "images/JapaneseNaked.jpg");
                    break;
                case "15000":
                    myImage.setAttribute("src", "images/JapaneseSport.jpg");
                    break;
                case null:
                    break;
            }
            break;
        case "Ducati":
            switch(document.querySelector('[name="Model"]:checked').value)
            {
                case "5000":
                    myImage.setAttribute("src", "images/EuroScooter.jpg");
                    break;
                case "10000":
                    myImage.setAttribute("src", "images/EuroNaked.jpg");
                    break;
                case "15000":
                    myImage.setAttribute("src", "images/EuroSport.jpg");
                    break;
                case null:
                    break;
            }
            break;
        case "Harley":
            switch(document.querySelector('[name="Model"]:checked').value)
            {
                case "5000":
                    myImage.setAttribute("src", "images/AmericanScooter.jpg");
                    break;
                case "10000":
                    myImage.setAttribute("src", "images/AmericanNaked.jpg");
                    break;
                case "15000":
                    myImage.setAttribute("src", "images/AmericanSport.jpg");
                    break;
                case null:
                    break;
            }
            break;
        case null:
            break;
    }
    
    var height1 = document.querySelector("#Make");
    var picStyle = window.getComputedStyle(height1);
    var elemHeight = picStyle.getPropertyValue("height");
    var myImage = document.querySelector("#bike");
    myImage.setAttribute("height", elemHeight);
    
}

function validate()
{
    let downP = document.querySelector("[name=down_payment]").value;
    var optsum = 0;
    let opCheck = document.querySelectorAll('[name="Options"]');
    var modval;
    var minVal = 0;
    if (document.querySelector("#Make")[0].selected == false && document.querySelector("#Make")[1].selected == false && document.querySelector("#Make")[2].selected == false){
        return false;        
    }
    else if (document.querySelector('[name="Model"]:checked') == null){
        return false;        
    }
    else if (isNaN(downP) == true || downP == "" ){
        return false;        
    }
    else
    {
        for ( var count = 0; count < opCheck.length; count++)
        {
            if(opCheck[count].checked == true)
            {
                optsum += parseInt(opCheck[count].value);
            }
            
        }
        if (document.querySelector('[name="Model"]:checked')) {
            modval = parseInt(document.querySelector('[name="Model"]:checked').value);      
        }
        
        minVal = (modval + optsum)/2 ;
        if(minVal > downP){
            document.querySelector("#message").innerHTML += " (Min $" + minVal + ")";
            return false
        }
        return true;
    }
}

window.onload = () => {
    document.querySelector("#Make").onchange = UpdateMake;
    document.querySelectorAll("[name=Model]").forEach((item) =>{
        item.onclick = UpdateModel;                
    }
    );
    document.querySelectorAll("[name=Options]").forEach((items) => {
        items.onclick = UpdateStatus;
    }
    );
    document.querySelector("[name=down_payment]").onchange = UpdateStatus;
    document.querySelector("#submitB").onclick = validate;
}

