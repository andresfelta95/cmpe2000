
var ManufactersArry = ["Honda", "Toyota", "BMW", "Suzuki", "Yamaha"];
var typeArray = ["car", "truck", "motorcycle", "mvp"];
let myURL;
let output;
$(() =>{
    //initialzation
    loadInitialValues();
    //calback for the first btn
    $("#callGet").on("click", () => { RequestModel(); })
    //calback for after selecting the manufacturer
    $("#Manufacturer").on("click", () => { RequestType(); })
      
})

function loadInitialValues(){
    let Smanufacturer = $("#Manufacturer");
    let Syear = $("#Year");
    
    let str = "";
    for (let index = 0; index < ManufactersArry.length; index++) {
        str += `<option`;
        str += ` value="${ManufactersArry[index]}">${ManufactersArry[index]}`;                
        str += `</option>`;
    }
    Smanufacturer.html(str);
    let str2 = "";
    for (let index = 1990; index < 2018; index++) {
        str2 += `<option`;
        str2 += ` value="${index}">${index}`;                
        str2 += `</option>`;
    }
    Syear.html(str2);
    
}


function RequestModel() {
    //populate our data object
    let getData = {};
    getData['format'] = 'json';
  
    //send the data to an appropriate server
  
    //Note that the server name consists of 2 parts here
    //One part is the base address of the site
    //the other is for our specific query
    let base_url = 'https://vpic.nhtsa.dot.gov/api/vehicles';
    let addedstring ='/GetModelsForMakeYear/make/' +$("#Manufacturer").val()+'/modelyear/' +$("#Year").val()+ '/vehicletype/'+$("#Type").val()+'/';
  
    myURL = base_url + addedstring;
    //populate an AJAX request
    //url - where to send the request
    //type - GET
    //data - what are we sending to the web service? Must match the spec
    //dataType - json
    //success - callback function for a success
    //error - callback function for an error
    $.ajax({
      url: myURL, 
      type: 'GET', 
      data: getData,
      dataType: 'json', 
      success: processSuccess,
      error: processError
    });
    $("#ShowResult").html(`${myURL}<br>Issued, please wait`);
  
}

function RequestType() {

    //populate our data object
    let getData = {};
    getData['format'] = 'json';
  
    //send the data to an appropriate server
  
    let base_url = 'https://vpic.nhtsa.dot.gov/api/vehicles';
    let addedstring ='/GetVehicleTypesForMake/' +$("#Manufacturer").val();
  
    myURL = base_url + addedstring;

    //populate an AJAX request
    
    $.ajax({
        url: myURL, 
        type: 'GET', 
        data: getData,
        dataType: 'json', 
        success: ((result, resultStatus) => {
            console.log(result);
            
            let Stype = $("#Type");
            let str3 = "";
            for (let index = 0; index < result.Count; index++) {
                str3 += `<option`;
                str3 += ` value="${result.Results[index]['VehicleTypeName']}">${result.Results[index]['VehicleTypeName']}`;                
                str3 += `</option>`;
            }
            Stype.html(str3);
        }),
        error: processError
    });
}

function processSuccess(result, resultStatus) {

    console.log(result);
  
    
      let str ="";
      
      for (let i = 0; i < result.Count; i++) {
        str += "<div><label>";
        str = str + result.Results[i]['Model_Name'];
        str = str + '</label><input type="radio" value="'+result.Results[i]['Model_ID'] +'"class="getModel" name="RadioOutput"></div>';        
      }
      
    
      $("#GetResult").html(str);
      $("#ShowResult").html(`Results returned:${resultStatus}<br>
      For search: Make ${$("#Manufacturer").val()} | ModelYear ${$("#Year").val()} | VehicleType ${$("#Type").val()}<br>
      ${result.Count} records returned`)

      //Display the model id
      $(".getModel").change( () => {
        output = "Model Id: ";
        
        $("[type=radio]:checked").each((index) =>{
            output += $($("[type=radio]:checked")[index]).val() + " ";
        })
        console.log(output);
        $("#ShowResult").html(output); })  
}

function processError(xhr, status, thrownError) {
    console.log("An error has occured");
  }




