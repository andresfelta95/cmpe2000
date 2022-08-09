/*Anonymous function loaded when the html document is ready. 
   Note that this is similar to the anonymous function we 
   have for the window.onload event.
   We can also use $(document.ready(){   })
               */
$(function () {

    //registering the anonymous function (or arrow function)
    //for the click event of the button
    $("#button1").on("click", () => {
        //Write your code here for this event handler
        let myurl = 'https://thor.net.nait.ca/~oveeyenm/CMPE2000/demos/week12/week12Exercise2.php';
        $.ajax({
            url: myurl,
            type: "GET",
            data:{
                "selectPosn": parseInt($("#student").val())
                },
            dataType: "json",
            success: processSuccess,
            error: processError
        });
    });

});


/*Callback function for success
  We are having a simple function here that simply displays
  the obtained json object to the console
  Remember that for the callback function of the the success property
  the first parameter always represents the returned data.
  The second parameter represents the status of the result 
   */
function processSuccess(result, resultStatus) {
    console.log(resultStatus);
    // console.log(result);
    $("#serverResult").html(`Name: ${result["FirstName"]} ${result['LastName']}.<br>Id: ${result['Id']}.<br>Program: ${result['Program']}.<br>Term: ${result['Term']}.`);

}

/*callback function for Error
It's a simplified version that simply displays a 
message on the console.
*/
function processError() {
    console.log("An error has occured");
}