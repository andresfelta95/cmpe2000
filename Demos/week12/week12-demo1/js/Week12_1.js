$(function () {
    
        $('#button1').on("click", () => {  //alert("button1-clicked");
            //anonymous function to handle the click event
            //create some data to send to the server
            let name = "The AJAX Cleaning Co.";
            let score = Math.floor(Math.random() * 100);
    
            //populate our data object
            let getData = {};
            getData['getName'] = name;
            getData['getScore'] = score;
    
            let myURL = '/~oveeyenm/CMPE2000/demos/week12/week12-demo1/week12_1.php';
    
    
            //url - where to send the request
            //type - GET/POST/PUT/DELETE 
            //data - what are we sending to the web service? Must match the spec
            //dataType - html/json/xml
            //success - callback function for a success
            //error - callback function for an error
            // $.ajax({ url: myURL, data: getData, type: "GET", success: getSuccess, datatype: "html", error: processError });
    
    
    


    //populate an AJAX request
    let ajaxOptions = {};
        
    ajaxOptions['url'] = myURL;
    ajaxOptions['type'] = 'GET';
    ajaxOptions['data'] = getData; //whole object of data being sent
    ajaxOptions['dataType'] = 'html'; //we want html back
    ajaxOptions['success'] = getSuccess; //call function "getSuccess" on success
    ajaxOptions['error'] = processError;
    $.ajax(ajaxOptions); // this is the "PUSH THE RED BUTTON command"
   

    // }
    // );

    
    //    request.done(() => {
    
    //        $("#placeHolder").html("The work is over")
    //    });
    
});});


function getSuccess(data, returnStatus) {
    $("#serverResult").html(data);
    console.log(data);
}

function processError(jqHQR, status, errormessage) {
    alert(errormessage);
    alert(status);
}
