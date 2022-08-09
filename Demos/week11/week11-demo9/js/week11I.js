

$(() => {


    //Clicking on utton1 will display the value of the select element
    $("#button1").on("click", function () {
         var elem = $("[name=myProgram");
         alert("Value of Program Chosen is: " + $(elem).val());
    });
 

    
        $("#button2").on("click", function () {
            let first = $("[type=text]");
            alert("First value is: " + $(first).val());
        });
        

    
    $("#button3").on("click", function () {
        let first = $("[type=text]")[0];
        alert("First value is: " + $(first).val());
        let second = $("[type=text]")[1];
        alert("second value is: " + $(second).val());
        let third = $("[type=text]")[2];
        alert("Third value is: " + $(third).val());
    });


    
        $("#button4").on("click", function () {
            $("[type=text]").each((index, item) => {
                alert(`Item at position ${index} is ${$(item).val()}`);
            });
        });
    
});