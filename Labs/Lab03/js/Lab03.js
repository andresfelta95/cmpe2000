let myURL;
let timer = 0;

$(() =>{
    
    //calback for the first btn
    $("#GetAll").on("click", () => { ShowAllTags(); })
    $("#AddTag").on("click", () =>{AddTag();})
    $('#GetLive').on("click", () =>{GetLive();})
    $('#Filter').on("click", () =>{Historical();})
    $('#GetHistorical').on("click", () =>{GetHistorical();})
    $("#Live").change(function (){
        if (this.checked) {
            // let newGrid
            timer = setInterval(Live, 500);
        }
        else{
            clearInterval(timer);
        }
    }) 
})

function ShowAllTags() {
    //populate our data object
    let getData = {};
    getData['tagId'] = 'all';
  
    //send the data to an appropriate server  
    myURL = '/~demo/cmpe2000/lab03_webservice.php';
    //populate an AJAX request
    //url - where to send the request
    //type - POST
    //data - what are we sending to the web service? Must match the spec
    //dataType - json
    //success - callback function for a success
    //error - callback function for an error
    $.ajax({
      url: myURL, 
      type: 'POST', 
      data: getData,
      dataType: 'json', 
      success: processSuccess,
      error: processError
    });  
}

function AddTag() {
    
    //check for empty values
    if ($('#tagName').val() == null || $('#tagName').val() == '' || $('#Minimum').val() == null || $('#Minimum').val() == '' || $('#Maximum').val() == null || $('#Maximum').val() == '') {
        alert('Please input a valid value for Tag Name, Minimum and Maximum');        
    }
    else{
        let getData = {};
            getData['action'] = 'add';
            getData['tagDesc'] = $('#tagName').val();
            getData['tagMin'] = $('#Minimum').val();
            getData['tagMax'] = $('#Maximum').val();
      
        //send the data to an appropriate server  
        myURL = '/~demo/cmpe2000/lab03_webservice.php';
    
        //populate an AJAX request
        //url - where to send the request
        //type - POST
        //data - what are we sending to the web service? Must match the spec
        //dataType - json
        //success - callback function for a success
        //error - callback function for an error
        $.ajax({
          url: myURL, 
          type: 'POST', 
          data: getData,
          dataType: 'json', 
          success: (Data, status)=>{
            $("#ShowResult").html(Data.status);
          },
          error: processError
        });  
    }    
}

function GetLive() {
    
    let getData = {};
        getData['action'] = 'live';
        getData['tagDescription'] = $('#tagByFilter').val();
        
    
    //send the data to an appropriate server  
    myURL = '/~demo/cmpe2000/lab03_webservice.php';

    //populate an AJAX request
    //url - where to send the request
    //type - POST
    //data - what are we sending to the web service? Must match the spec
    //dataType - json
    //success - callback function for a success
    //error - callback function for an error
    $.ajax({
        url: myURL, 
        type: 'POST', 
        data: getData,
        dataType: 'json', 
        success: GetLiveSuccess,
        error: processError
    });        
}

function Historical(){
    let getData = {};
        getData['action'] = 'filter';
        getData['tagDesc'] = $('#tagByFilter').val();
        
    
    //send the data to an appropriate server  
    myURL = '/~demo/cmpe2000/lab03_webservice.php';

    //populate an AJAX request
    //url - where to send the request
    //type - POST
    //data - what are we sending to the web service? Must match the spec
    //dataType - json
    //success - callback function for a success
    //error - callback function for an error
    $.ajax({
        url: myURL, 
        type: 'POST', 
        data: getData,
        dataType: 'json', 
        success: (Data, status)=>{
            $("#ShowResult").html(Data.status);
            console.log(Data);
            let mySelect = $("#Historical");
            mySelect.empty();
            $(Data.data).each((i, x) => {
                let newOption = document.createElement("option");
                $(newOption).attr("value", x.tagId);
                $(newOption).html(x.tagDescription);
                $(mySelect).append(newOption);                
              });
          },
        error: processError
    }); 
}

function GetHistorical(){
    let getData = {};
        getData['action'] = 'historical';
        getData['tagId'] = $('#Historical').val();
        
    
    //send the data to an appropriate server  
    myURL = '/~demo/cmpe2000/lab03_webservice.php';

    //populate an AJAX request
    //url - where to send the request
    //type - POST
    //data - what are we sending to the web service? Must match the spec
    //dataType - json
    //success - callback function for a success
    //error - callback function for an error
    $.ajax({
        url: myURL, 
        type: 'POST', 
        data: getData,
        dataType: 'json', 
        success: (Data, status)=>{
            $("#ShowResult").html(Data.status);
            console.log(Data);
            $("#FirstTable").hide();
            $("#SecondTable").hide();
            $("#ThirdTable").show();
            let myTable = $("#ThirdTable");
            myTable.empty();
            let headerRow = document.createElement("tr");
            $(myTable).append(headerRow);

            let headerCell3 = document.createElement("th")
            $(headerRow).append(headerCell3);
            $(headerCell3).append("Minimum");

            let headerCell4 = document.createElement("th")
            $(headerRow).append(headerCell4);
            $(headerCell4).append("Maximum");

            let headerCell2 = document.createElement("th")
            $(headerRow).append(headerCell2);
            $(headerCell2).append("Value");

            let headerCell5 = document.createElement("th")
            $(headerRow).append(headerCell5);
            $(headerCell5).append("TimeStamp");

            let headerCell6 = document.createElement("th")
            $(headerRow).append(headerCell6);
            $(headerCell6).append("Gauge");

            $(Data.data).each((i, x) => {
                let row = document.createElement("tr");
                $(myTable).append(row);                
                let cell3 = document.createElement("td");
                cell3.append(x.tagMin);
                let cell4 = document.createElement("td");
                cell4.append(x.tagMax);
                let cell2 = document.createElement("td");
                let val = parseFloat(x.value);
                cell2.append(val.toFixed(2));
                let cell5 = document.createElement("td");                
                cell5.append(x.timeStamp);
                let cell6 = document.createElement("td");
                let meter = document.createElement("meter");
                $(meter).attr("value", x.value);
                $(meter).attr("min", x.tagMin);
                $(meter).attr("max", x.tagMax);
                if (x.value > x.tagMax || x.value < x.tagMin) {
                    $(meter).attr("background-color", "Red");
                }       
                cell6.append(meter);                
                $(row).append(cell3);
                $(row).append(cell4);
                $(row).append(cell2);
                $(row).append(cell5);
                $(row).append(cell6);
                $(myTable).append(row);
            });
          },
        error: processError
    }); 
}

function Live() {
    
    let getData = {};
        getData['action'] = 'live';
        getData['tagDescription'] = $('#tagByFilter').val();
        
    
    //send the data to an appropriate server  
    myURL = '/~demo/cmpe2000/lab03_webservice.php';

    //populate an AJAX request
    //url - where to send the request
    //type - POST
    //data - what are we sending to the web service? Must match the spec
    //dataType - json
    //success - callback function for a success
    //error - callback function for an error
    $.ajax({
        url: myURL, 
        type: 'POST', 
        data: getData,
        dataType: 'json', 
        success: (Data,status) => {
            console.log(Data);  
            $("#FirstTable").hide();
            $("#ThirdTable").hide();
            $("#SecondTable").show();
            let myTable = $("#SecondTable");
            myTable.empty();
            let headerRow = document.createElement("tr");
            $(myTable).append(headerRow);

            let headerCell1 = document.createElement("th")
            $(headerRow).append(headerCell1);
            $(headerCell1).append("ID");

            let headerCell2 = document.createElement("th")
            $(headerRow).append(headerCell2);
            $(headerCell2).append("Tag Description");

            let headerCell3 = document.createElement("th")
            $(headerRow).append(headerCell3);
            $(headerCell3).append("Minimum");

            let headerCell4 = document.createElement("th")
            $(headerRow).append(headerCell4);
            $(headerCell4).append("Maximum");

            let headerCell5 = document.createElement("th")
            $(headerRow).append(headerCell5);
            $(headerCell5).append("Value");

            let headerCell6 = document.createElement("th")
            $(headerRow).append(headerCell6);
            $(headerCell6).append("Gauge");

            $(Data.data).each((i, x) => {
                let row = document.createElement("tr");
                $(myTable).append(row);
                let cell1 = document.createElement("td");
                cell1.append(x.tagId);
                let cell2 = document.createElement("td");
                cell2.append(x.tagDescription);
                let cell3 = document.createElement("td");
                cell3.append(x.tagMin);
                let cell4 = document.createElement("td");
                cell4.append(x.tagMax);
                let cell5 = document.createElement("td");
                cell5.append(x.value.toFixed(2));
                let cell6 = document.createElement("td");
                let meter = document.createElement("meter");
                $(meter).attr("value", x.value);
                $(meter).attr("min", x.tagMin);
                $(meter).attr("max", x.tagMax);
                cell6.append(meter);
                if (x.value > x.tagMax || x.value < x.tagMin) {
                    $(cell6).attr("background-color", "Red");
                }       
                $(row).append(cell1);
                $(row).append(cell2);
                $(row).append(cell3);
                $(row).append(cell4);
                $(row).append(cell5);
                $(row).append(cell6);
                $(myTable).append(row);
                });
            
            //Bargraph
            // $(Data.data).each((i, x) => {
                
            //     var trace = {
            //         x: x.value,
            //         type: 'histogram',
            //     };
            //     var display = [trace];
            //     Plotly.newPlot('#ShowResult', display);
            //     });                
            },
                error: processError
            });        
}

function GetLiveSuccess(Data, status){
    console.log(Data);  
    $("#FirstTable").hide();
    $("#ThirdTable").hide();
    $("#SecondTable").show();
    let myTable = $("#SecondTable");
    myTable.empty();
    let headerRow = document.createElement("tr");
    $(myTable).append(headerRow);

    let headerCell1 = document.createElement("th")
    $(headerRow).append(headerCell1);
    $(headerCell1).append("ID");

    let headerCell2 = document.createElement("th")
    $(headerRow).append(headerCell2);
    $(headerCell2).append("Tag Description");

    let headerCell3 = document.createElement("th")
    $(headerRow).append(headerCell3);
    $(headerCell3).append("Minimum");

    let headerCell4 = document.createElement("th")
    $(headerRow).append(headerCell4);
    $(headerCell4).append("Maximum");

    let headerCell5 = document.createElement("th")
    $(headerRow).append(headerCell5);
    $(headerCell5).append("Value");

    let headerCell6 = document.createElement("th")
    $(headerRow).append(headerCell6);
    $(headerCell6).append("Gauge");

    $(Data.data).each((i, x) => {
        let row = document.createElement("tr");
        $(myTable).append(row);
        let cell1 = document.createElement("td");
        cell1.append(x.tagId);
        let cell2 = document.createElement("td");
        cell2.append(x.tagDescription);
        let cell3 = document.createElement("td");
        cell3.append(x.tagMin);
        let cell4 = document.createElement("td");
        cell4.append(x.tagMax);
        let cell5 = document.createElement("td");
        cell5.append(x.value.toFixed(2));
        let cell6 = document.createElement("td");
        let meter = document.createElement("meter");
        $(meter).attr("value", x.value);
        $(meter).attr("min", x.tagMin);
        $(meter).attr("max", x.tagMax);
        cell6.append(meter);
        if (x.value > x.tagMax || x.value < x.tagMin) {
            $(cell6).attr("background-color", "Red");
        }       
        $(row).append(cell1);
        $(row).append(cell2);
        $(row).append(cell3);
        $(row).append(cell4);
        $(row).append(cell5);
        $(row).append(cell6);
        $(myTable).append(row);
      });
      $("#ShowResult").html(Data.status);
}

function processSuccess(Data, status) {

    console.log(Data);  
    $("#SecondTable").hide();
    $("#ThirdTable").hide();
    $("#FirstTable").show();
    let myTable = $("#FirstTable");
    myTable.empty();
    let headerRow = document.createElement("tr");
    $(myTable).append(headerRow);

    let headerCell1 = document.createElement("th")
    $(headerRow).append(headerCell1);
    $(headerCell1).append("ID");

    let headerCell2 = document.createElement("th")
    $(headerRow).append(headerCell2);
    $(headerCell2).append("Tag Description");

    let headerCell3 = document.createElement("th")
    $(headerRow).append(headerCell3);
    $(headerCell3).append("Minimum");

    let headerCell4 = document.createElement("th")
    $(headerRow).append(headerCell4);
    $(headerCell4).append("Maximum");

    $(Data.data).each((i, x) => {
        let row = document.createElement("tr");
        $(myTable).append(row);
        let cell1 = document.createElement("td");
        cell1.append(x.tagId);
        let cell2 = document.createElement("td");
        cell2.append(x.tagDescription);
        let cell3 = document.createElement("td");
        cell3.append(x.tagMin);
        let cell4 = document.createElement("td");
        cell4.append(x.tagMax);
        $(row).append(cell1);
        $(row).append(cell2);
        $(row).append(cell3);
        $(row).append(cell4);
        $(myTable).append(row);
      });
      
    
      $("#ShowResult").html(Data.status);    
}   

function processError(xhr, status, thrownError) {
    console.log("An error has occured");
  }




