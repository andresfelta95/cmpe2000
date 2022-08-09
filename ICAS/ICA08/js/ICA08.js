var pictureArray = [];
var picNames = ["Samurai", "Space Warrior", "Jinx", "Ice King", "Ekko"]
var count = 0;
var timer = 0;
var auto = false;
var trnsVal = 300;

$(document).ready(function (){
    $("#Next").click( nextPic)
    $("#Previous").click(previousPic)
    $("#playPause").click(changePictureOnTimer)    
    createPictureArray();
    $("input").on("click", () =>{
        trnsVal = parseInt($("#ms:checked").val());
        console.log(trnsVal);
    })
})


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
    var elem1 = $("#picture");
    //We initialize the image element with the first
    //element in the array
    elem1.prop("src", pictureArray[0].Pic.src);
    var elem2 = $("#figureCaption");
    elem2.html(pictureArray[0].displayName + "<br>" + pictureArray[0].viewCount);
    
}


//changPicture() changes the src attribute of the 
//picture element each time it's called
function nextPic() {
    count = (count + 1) % (pictureArray.length);
    $("#picture").fadeOut((trnsVal/2), function (){
        $("#picture").prop("src",  pictureArray[count].Pic.src).fadeIn((trnsVal/2));
        var elem2 = $("#figureCaption");
        ++pictureArray[count].viewCount
        elem2.html(pictureArray[count].displayName + "<br>" + pictureArray[count].viewCount);
    })    
}

function previousPic(){
    if((count -1) < 0)
        count = 5;
    count = (count - 1) % (pictureArray.length);
    $("#picture").fadeOut((trnsVal/2), function (){
        $("#picture").prop("src",  pictureArray[count].Pic.src).fadeIn((trnsVal/2));
        var elem2 = $("#figureCaption");
        ++pictureArray[count].viewCount
        elem2.html(pictureArray[count].displayName + "<br>" + pictureArray[count].viewCount);
    })
}

function Fadein(){
    count = (count + 1) % (pictureArray.length);
    $("#picture").fadeOut(0, function (){
        $("#picture").prop("src",  pictureArray[count].Pic.src).fadeIn((trnsVal));
        var elem2 = $("#figureCaption");
        ++pictureArray[count].viewCount
        elem2.html(pictureArray[count].displayName + "<br>" + pictureArray[count].viewCount);
    }) 
     
}
function Fadeout(){
    count = (count + 1) % (pictureArray.length);
    $("#picture").fadeOut(trnsVal, function (){
        $("#picture").prop("src",  pictureArray[count].Pic.src).fadeIn((0));
        var elem2 = $("#figureCaption");
        ++pictureArray[count].viewCount
        elem2.html(pictureArray[count].displayName + "<br>" + pictureArray[count].viewCount);
    })
}
function None(){
    count = (count + 1) % (pictureArray.length);
    $("#picture").fadeOut((0), function (){
        $("#picture").prop("src",  pictureArray[count].Pic.src).fadeIn(0);
        var elem2 = $("#figureCaption");
        ++pictureArray[count].viewCount
        elem2.html(pictureArray[count].displayName + "<br>" + pictureArray[count].viewCount);
    })  
}


function changePictureOnTimer() {
    if (auto == false) {
        trnsVal = parseInt($("#ms:checked").val());
        switch ($("#Transitions").val()) {
            case "Fadein/Fadeout":
                timer = setInterval(nextPic, trnsVal);
                $("#playPause").attr("src", "images/pause.png");                            
                break;
            case "Fadein":
                timer = setInterval(Fadein, trnsVal);
                $("#playPause").attr("src", "images/pause.png"); 
                break;
            case "Fadeout":
                timer = setInterval(Fadeout, trnsVal);
                
                $("#playPause").attr("src", "images/pause.png"); 
                break;
            case "None":
                
                timer = setInterval(None, trnsVal);
                $("#playPause").attr("src", "images/pause.png"); 
                break;
            default:
                break;
        }
      auto = true;  
    }
    else if(auto == true){
        clearInterval(timer);

        $("#playPause").attr("src", "images/play.png");
        
        auto = false;
    }
}


