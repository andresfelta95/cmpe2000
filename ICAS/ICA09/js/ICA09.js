var numArray = [];
$(() =>{
    //calback for the first btn
    $("#callGet").on("click", () => {

        let _Name = $($("[type=text]")[0]).val();
        let _Hobby = $($("[type=text]")[1]).val();
        let _Howmuch = $($("[type=range]")[0]).val();        
        let myURL = '/~demo/cmpe2000/ica_Hobby.php';
        

        let getData = {};
            getData['Name'] = _Name;
            getData['Hobby'] = _Hobby;
            getData['HowMuch'] = _Howmuch;            

            
            let ajaxOptions = {};
            
            ajaxOptions['url'] = myURL;
            ajaxOptions['type'] = 'GET';
            ajaxOptions['data'] = getData; //whole object of data being sent
            ajaxOptions['dataType'] = 'html'; //we want html back
            
            $.ajax(ajaxOptions).done((data, status, jqXHR) => {
                $("#GetResult").html(data);
                console.log("GET done: " + status);
            }).fail((jqXHR,status,err) => {
                console.log("GET failed: " + status);
            }).always((status) =>{
                console.log("Always: " + status);
            }); // this is the "PUSH THE RED BUTTON command"
        })
        //functions to modify the text into the btn
        $("#RowCount").change(() =>{
            $("#TableBtn").html(`Post to make ${$("#RowCount").val()}x${$("#ColumnCount").val()} Table`);
            
        })
        $("#ColumnCount").change(() =>{
            $("#TableBtn").html(`Post to make ${$("#RowCount").val()}x${$("#ColumnCount").val()} Table`);
            
        })
        //Callback funciton for the Table
        $("#TableBtn").on("click", () =>{
            
            let RowCount = $("#RowCount").val();
            let ColumnCount = $("#ColumnCount").val();
            let _URL = '/~demo/cmpe2000/ica_Table.php';
            console.log(RowCount);

            let NewData = {};
                NewData['RowCount'] = RowCount;
                NewData['ColumnCount'] = ColumnCount;
            
            AjaxRequest(_URL, 'POST', NewData, 'html', getSuccess, ErrorHandler);
        })
        //Generate Array
        $("#Generate").on("click", () =>{
            numArray = [];
            for (let index = 0; index < 20; index++) {
                let num = Math.floor(Math.random()*20);
                numArray.push(num);
            }
            let output = "";
            $(numArray).each((item, value) => {
                if (item == 19) {
                    output += `${value}. `;
                }
                else{
                    output += `${value}, `;
                }
            })            
            $(".Rgenerate").html(output);
        })
        //Callback function for the modified
        $("#modified").on("click", () =>{
            
            
            console.log(numArray);
            let _uRL = '/~demo/cmpe2000/ica_Numbers.php';           

            let NewData = {};
                NewData['Numbers'] = numArray;                
            
                AjaxRequest(_uRL, 'POST', NewData, 'html', ((data, txtStatus)=>{
                $(".Rmodified").html(data);
                console.log(txtStatus);
            }), ErrorHandler);
        })
        //callback to test the error
        $("#Fail").on("click", () =>{
            
            
            console.log(numArray);
            let _uRL = '/~demo/cmpe2000/ica_Numbers.php';           

            let NewData = {};
                NewData['Numbers'] = numArray;                
            
                AjaxRequest(_uRL, 'POST', NewData, 'thml', ((data, txtStatus)=>{
                $(".FailResult").html(data);
                console.log(txtStatus);
            }), ErrorHandler);
        })
})

function getSuccess(data, txtStatus, jqXHR) {
    $(".RTable").html(data);
    console.log(txtStatus);
}
function ErrorHandler(jqXHR, txtStatus, errorThrown) {
    let output = `${txtStatus}  ${errorThrown}`
    console.log(output);
    alert(output);
}

function AjaxRequest(url, type, data, datatype, successFunction, errorFunction){
    let options ={};
    options['url'] = url;
    options['type'] = type;
    options['data'] = data; //whole object of data being sent
    options['dataType'] = datatype; //we want html back
    options['success'] = successFunction;     //call function "getSuccess" on success
    options['error'] = errorFunction;
    $.ajax(options); 
}


