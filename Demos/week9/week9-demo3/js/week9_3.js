window.onload = () =>{
    document.querySelectorAll("section").forEach((item)=>{
        let row = item.getAttribute("position").substring(0,2);
        let col = item.getAttribute("position").substring(2,4);
        //console.log("Position is: " + row + ", " + col);
        item.style.setProperty("grid-row-start",row);
        item.style.setProperty("grid-row-end","span 1");
        item.style.setProperty("grid-column-start",col);
        item.style.setProperty("grid-column-end","span 1");
    });
}