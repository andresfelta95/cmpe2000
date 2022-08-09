//Registering the event handler
$(function () {
    $('#button1').on("click", () => {  //anonymous function to handle the click event

        //the function processAjaxCall fills in the Ajax Options and makes the call
        processAjaxCall();
    }
    );
});

function processAjaxCall() {
    let myurl = 'https://thor.net.nait.ca/~oveeyenm/CMPE2000/demos/week12/week12A.php';
    $.ajax({
        url: myurl,
        type: "GET",
        dataType: "json",
        success: function (result, status) //Anonymous callback for on successful completion
        {
            console.log(result);
            $("#serverResult").html(`Name: ${result["name"]}, Address: ${result['address']}`);
        },
        error: function (xhr, ajaxOptions, thrownError) //Anonymous callback on error
        {
            alert("error returned");
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
}
