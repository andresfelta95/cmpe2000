
const takeAChanceText = ["Second Place in Beauty Contest: $10", "Bank Pays You Dividend of$50",
"Repair your Properties. You owe $250", "Speeding Fine: $15",
"Holiday Fund Matures: Receive $100", "Pay Hospital Fees: $100"];
const takeAChanceMoney = [10, 50, -250, -15, 100, -100];

//Player
var plyorder = 1;
var ply1;
var ply2;
var player1Img = new Image();
var player2Img = new Image();
var plyr1Img = new Image();
plyr1Img.style.height = "40px";
plyr1Img.style.width = "40px";
var plyr2Img = new Image();
plyr2Img.style.height = "40px";
plyr2Img.style.width = "40px";
var arpst1 = 0;
var arpst2 = 0;
var cntr = 0;
var rrP1 = 0;
var rrP2 = 0;


//Arry Dice 1
var dice1Array = new Array();
dice1Array[0] = new Image();
dice1Array[0].src = "images/dice-1.png";
dice1Array[0].value = 1;
dice1Array[1] = new Image();
dice1Array[1].src = "images/dice-2.png";
dice1Array[1].value = 2;
dice1Array[2] = new Image();
dice1Array[2].src = "images/dice-3.png";
dice1Array[2].value = 3;
dice1Array[3] = new Image();
dice1Array[3].src = "images/dice-4.png";
dice1Array[3].value = 4;
dice1Array[4] = new Image();
dice1Array[4].src = "images/dice-5.png";
dice1Array[4].value = 5;
dice1Array[5] = new Image();
dice1Array[5].src = "images/dice-6.png";
dice1Array[5].value = 6;

//number of dices
var dicevalue;

//timer
var timer;

//amount of money for each player
var money1;
var money2;
//variables for tiles
var goTile;
var taxVal;
var chanceVal;


//creating the players images
playersGrid = () => {
    document.querySelector("#player1").innerHTML = "<p>Player 1<p/>";
    document.querySelector("#player2").innerHTML = "<p>Player 2<p/>";
    player1Img.src = "images/Avatar-1.png";
    player2Img.src = "images/Avatar-2.png";
    plyr1Img.src = "images/Avatar-1.png";
    plyr2Img.src = "images/Avatar-2.png";
    var elem = document.querySelector("#player1").appendChild(player1Img);
    var elem2 = document.querySelector("#player2").appendChild(player2Img); 
    elem.setAttribute("src", player1Img.src);
    elem2.setAttribute("src", player2Img.src);
    ply1 = document.querySelector("#go").appendChild(plyr1Img);
    ply1.setAttribute("src", plyr1Img.src);
    ply2 = document.querySelector("#go").appendChild(plyr2Img);
    ply2.setAttribute("src", plyr2Img.src);
}
//Roll dice everytime the buttom is clicked
function rollDice() {
    dicevalue = 0;    
    var dcimg1 = document.querySelectorAll(".die");
    for (let index = 0; index < dcimg1.length; index++) {
        var dc1 = Math.floor(Math.random()*6);
        dcimg1[index].setAttribute("src", dice1Array[dc1].src);
        dicevalue += dice1Array[dc1].value;       
    }
    
    //Call the player Animation
    cntr = 0;
    if (plyorder == 1) {
        document.getElementById("RollDice").disabled = true;
        timer = setInterval(player1Animation, 500);        
        
    }
    else if(plyorder ==2){
        document.querySelector("#RollDice").disabled = true;
        timer = setInterval(player2Animation, 500);
        
    }
    plyorder++;
    if (plyorder > 2) {
        plyorder = 1;
    }
    
}

//make the player move the number of the dice rollls
function player1Animation() {
    var secAr = document.querySelectorAll("section");    
    var position = secAr[arpst1];

    arpst1++;
    if (arpst1 > 39) {
        arpst1 = 0;
    }
    position = secAr[arpst1];    
    if (arpst1 == 0) {
        goTile = true;
    }
    ply1 = position.appendChild(plyr1Img); 
    
    cntr++;
    if (cntr == (dicevalue)) {
        player1Img.style.border = null;
        player2Img.style.border = "2px dashed red";
        document.getElementById("RollDice").disabled = false;
        /*                          Rules                           */
        if(goTile == true)
        {
            money1 += 200;
            goTile = false;
            document.querySelector("#player1amt").innerHTML = "$"+money1;
        }
        if (arpst1 == 30) {
            arpst1 = 10;
            position = secAr[arpst1];
            ply1 = position.appendChild(plyr1Img);
            alert("You have to go to Jail");
        }
        if (arpst1 == 10) {
            money1 -= 50;
            document.querySelector("#player1amt").innerHTML = "$"+money1;
            alert("You are in Jail, you have to pay $50");
        }
        if (arpst1 == 4 || arpst1 == 38) {
            taxVal = parseInt(secAr[arpst1].getAttribute("val"));
            money1 -= taxVal;
            document.querySelector("#player1amt").innerHTML = "$"+money1;
            alert("It's time to pay your taxes, you have to pay $"+taxVal);
        }
        if (arpst1 == 2 || arpst1 == 7 || arpst1 == 17 || arpst1 == 22 || arpst1 == 33 || arpst1 == 36) {
            let chance = Math.floor(Math.random()*6);
            chanceVal = takeAChanceMoney[chance];
            money1 += chanceVal;
            document.querySelector("#player1amt").innerHTML = "$"+money1;
            alert(takeAChanceText[chance]);
        }
        switch(arpst1)
        {
            case 1:
            case 3:
            case 6:
            case 8:
            case 9:
            case 11:
            case 13:
            case 14:
            case 16:
            case 18:
            case 19:
            case 21:
            case 23:
            case 24:
            case 26:
            case 27:
            case 29:
            case 31:
            case 32:
            case 34:
            case 37:
            case 39:
                if (position.style.backgroundColor != "rgb(255, 238, 0)" &&  position.style.backgroundColor != "rgb(131, 0, 72)") {
                    position.style.backgroundColor = "rgb(255, 238, 0)";
                    let payment = parseInt(secAr[arpst1].getAttribute("val"));
                    money1 -= payment;
                    document.querySelector("#player1amt").innerHTML = "$"+money1;
                }
                else if(position.style.backgroundColor != "rgb(255, 238, 0)"){
                    let rent = (parseInt(secAr[arpst1].getAttribute("val"))) * 0.1;
                    money1 -= rent;
                    document.querySelector("#player1amt").innerHTML = "$"+money1;
                }
                break;
            case 5:
            case 15:
            case 25:
            case 35:
                if (position.style.backgroundColor != "rgb(255, 238, 0)" &&  position.style.backgroundColor != "rgb(131, 0, 72)") {
                    position.style.backgroundColor = "rgb(255, 238, 0)";
                    let payment = parseInt(secAr[arpst1].getAttribute("val"));
                    money1 -= payment;
                    document.querySelector("#player1amt").innerHTML = "$"+money1;
                    ++rrP1; 
                }
                else if(position.style.backgroundColor != "rgb(255, 238, 0)"){
                    let rent = 25 * rrP2;
                    money1 -= rent;
                    document.querySelector("#player1amt").innerHTML = "$"+money1;
                }
                break;
            case 12:
            case 28:
                if (position.style.backgroundColor != "rgb(255, 238, 0)" &&  position.style.backgroundColor != "rgb(131, 0, 72)") {
                    position.style.backgroundColor = "rgb(255, 238, 0)";
                    let payment = parseInt(secAr[arpst1].getAttribute("val"));
                    money1 -= payment;
                    document.querySelector("#player1amt").innerHTML = "$"+money1;
                }
                else if(position.style.backgroundColor != "rgb(255, 238, 0)"){
                    let rent = 5*dicevalue;
                    money1 -= rent;
                    document.querySelector("#player1amt").innerHTML = "$"+money1;
                }
        }
        if (money1 <= 0) {
            alert("Player 1 run out of money, Player 2 wins!")
        }
        clearInterval(timer);
    }
}

function player2Animation() {
    var secAr = document.querySelectorAll("section");    
    var position = secAr[arpst2];
    
    arpst2++;
    if (arpst2 > 39) {
        arpst2 = 0;
    }
    position = secAr[arpst2];    
    if (arpst2 == 0) {
        goTile = true;
    }
    
    ply2 = position.appendChild(plyr2Img);
    
    cntr++;
    if (cntr == (dicevalue)) {
        player2Img.style.border = null;
        player1Img.style.border = "2px dashed red";
        document.querySelector("#RollDice").disabled = false;
        /*                          Rules                           */
        if(goTile == true)
        {
            money2 += 200;
            goTile = false;
            document.querySelector("#player2amt").innerHTML = "$"+money2;
        }
        if (arpst2 == 30) {
            arpst2 = 10;
            position = secAr[arpst2];
            ply2 = position.appendChild(plyr2Img);
            alert("You have to go to Jail");
        }
        if (arpst2 == 10) {
            money2 -= 50;
            document.querySelector("#player2amt").innerHTML = "$"+money2;
            alert("You are in Jail, you have to pay $50");
        }
        if (arpst2 == 4 || arpst2 == 38) {
            taxVal = parseInt(secAr[arpst2].getAttribute("val"));
            money2 -= taxVal;
            document.querySelector("#player2amt").innerHTML = "$"+money2;
            alert("It's time to pay your taxes, you have to pay $"+taxVal);
        }
        if (arpst2 == 2 || arpst2 == 7 || arpst2 == 17 || arpst2 == 22 || arpst2 == 33 || arpst2 == 36) {
            let chance = Math.floor(Math.random()*6);
            chanceVal = takeAChanceMoney[chance];
            money2 += chanceVal;
            document.querySelector("#player2amt").innerHTML = "$"+money2;
            alert(takeAChanceText[chance]);
        }
        switch(arpst2)
        {
            case 1:
            case 3:
            case 6:
            case 8:
            case 9:
            case 11:
            case 13:
            case 14:
            case 16:
            case 18:
            case 19:
            case 21:
            case 23:
            case 24:
            case 26:
            case 27:
            case 29:
            case 31:
            case 32:
            case 34:
            case 37:
            case 39:
                if (position.style.backgroundColor != "rgb(255, 238, 0)" &&  position.style.backgroundColor != "rgb(131, 0, 72)") {
                    position.style.backgroundColor = "rgb(131, 0, 72)";
                    let payment = parseInt(secAr[arpst2].getAttribute("val"));
                    money2 -= payment;
                    document.querySelector("#player2amt").innerHTML = "$"+money2;
                }
                else if(position.style.backgroundColor != "rgb(131, 0, 72)"){
                    let rent = (parseInt(secAr[arpst2].getAttribute("val"))) * 0.1;
                    money2 -= rent;
                    document.querySelector("#player2amt").innerHTML = "$"+money2;
                }
                break;
            case 5:
            case 15:
            case 25:
            case 35:
                if (position.style.backgroundColor != "rgb(255, 238, 0)" &&  position.style.backgroundColor != "rgb(131, 0, 72)") {
                    position.style.backgroundColor = "rgb(131, 0, 72)";
                    let payment = parseInt(secAr[arpst2].getAttribute("val"));
                    money2 -= payment;
                    document.querySelector("#player2amt").innerHTML = "$"+money2;
                    ++rrP2;
                }
                else if(position.style.backgroundColor != "rgb(131, 0, 72)"){
                    let rent = 25 * rrP1;
                    money2 -= rent;
                    document.querySelector("#player2amt").innerHTML = "$"+money2;
                }
                break;
            case 12:
            case 28:
                if (position.style.backgroundColor != "rgb(255, 238, 0)" &&  position.style.backgroundColor != "rgb(131, 0, 72)") {
                    position.style.backgroundColor = "rgb(131, 0, 72)";
                    let payment = parseInt(secAr[arpst2].getAttribute("val"));
                    money2 -= payment;
                    document.querySelector("#player2amt").innerHTML = "$"+money2;
                }
                else if(position.style.backgroundColor != "rgb(131, 0, 72)"){
                    let rent = 5*dicevalue;
                    money2 -= rent;
                    document.querySelector("#player2amt").innerHTML = "$"+money2;
                }
        }
        if (money2 <= 0) {
            alert("Player 2 run out of money, Player 1 wins!")
        }
        clearInterval(timer);        
    }
}
/* ***************************************************************************************************** */
window.onload = () =>{
    //building the grid
    document.querySelectorAll("section").forEach((item)=>{
        let row = item.getAttribute("suite").substring(0,2);
        let col = item.getAttribute("suite").substring(2,4);
        //console.log("Position is: " + row + ", " + col);
        item.style.setProperty("grid-row-start",row);
        item.style.setProperty("grid-row-end","span 1");
        item.style.setProperty("grid-column-start",col);
        item.style.setProperty("grid-column-end","span 1");        
    });
    
    /*Store the player's money values in each variable */
    money1 = parseInt(document.querySelector("#player1amt").innerHTML.substring(1));
    money2 = parseInt(document.querySelector("#player2amt").innerHTML.substring(1));

    console.log(money1);
    console.log(money2);

    playersGrid();

    

    if (plyorder == 1) {
        player1Img.style.border = "2px dashed red";
    }
    else
    {
        player2Img.style.border = "2px dashed red";
    }

    document.querySelector("#RollDice").onclick = rollDice;
}