//This is the first javascript file for Exercise 12.1
// We here pass a literal object as parameter to the
//ajax() call
$(() =>{
    $('#button1').on("click", () => {

        let Program = $("#myProgram").val();
        let FName = $($("[type=text]")[0]).val();
        let LName = $($("[type=text]")[1]).val();
        let Age = $($("[type=text]")[2]).val();
        let myURL = 'https://thor.net.nait.ca/~oveeyenm/CMPE2000/demos/week12/Week12Exercise1.php';

        let getData = {};
            getData['FName'] = FName;
            getData['LName'] = LName;
            getData['Program'] = Program;
            getData['Age'] = Age;

        makeAjaxCall(myURL, getData, 'GET', 'html', getSuccess, processError);

        // let ajaxOptions = {};
            
        // ajaxOptions['url'] = myURL;
        // ajaxOptions['type'] = 'GET';
        // ajaxOptions['data'] = getData; //whole object of data being sent
        // ajaxOptions['dataType'] = 'html'; //we want html back
        // ajaxOptions['success'] = function (data, returnStatus){
        //     $("#serverResult").html(data);
        //     console.log(data);
        // }; //call function "getSuccess" on success
        // ajaxOptions['error'] = processError;
        // $.ajax(ajaxOptions); // this is the "PUSH THE RED BUTTON command"
    })
})

function getSuccess(data, returnStatus) {
    $("#serverResult").html(data);
    console.log(data);
}
function processError(jqHQR, status, errormessage) {
    alert(errormessage);
    alert(status);
}

function makeAjaxCall(url,data,type,datatype,successFunction,errorFunction){
    let options={};

    options['url'] = myURL;
    options['type'] = 'GET';
    options['data'] = getData; //whole object of data being sent
    options['dataType'] = 'html'; //we want html back
    options['success'] = function (data, returnStatus){
        $("#serverResult").html(data);
        console.log(data);
    }; //call function "getSuccess" on success
    options['error'] = processError;
    $.ajax(options); // this is the "PUSH THE RED BUTTON command"
}