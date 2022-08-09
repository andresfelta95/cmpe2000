
$(() => {
    $("[type=button]").each((index, item) =>{
        $(item).on("click", function (){
            var elem = $("[type=text]")[index];            
            $(elem).val($(item).attr("program"));
            
            $(elem).css("background-color", $(item).attr("bcolor"));
            
            $(elem).css("font-size", $(item).attr("fs"));
            
        })
    })
})