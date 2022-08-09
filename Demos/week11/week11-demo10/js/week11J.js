//Javascript for week11-demo10

$(()=>{
    $("#button1").on("click", () =>{
        let str = prompt("Give the text to include on the page");
        $("#placeholder1").append(`<p>${str}</p>`);
    })//Arrow function - Event handler for btn 1
    
    $("#button2").on("click", () =>{
        let str = prompt("Give the text to include on the page");
        let text = document.createTextNode(str);
        let myParagraph = document.createElement("p");
        myParagraph.append(text);
        $("#placeholder2").append(myParagraph);
    })//Arrow function - Event handler for btn 2

    $("#button3").on("click", () =>{
        let myTable = document.createElement("table");

        //create header row
        let headerRow = document.createElement("tr");
        let firstCell = document.createElement("th");
        firstCell.append("X");
        headerRow.append(firstCell);
        for (let index = 1; index <= 4; index++) {
            let headerCell = document.createElement("th");
            headerCell.append(`${index}`);
            headerRow.append(headerCell);
            
        }

        myTable.append(headerRow);

        for (let index = 1; index <= 4; index++) {
            let rowElem = document.createElement("tr");
            let rowHeader = document.createElement("td");
            rowHeader.append(index);
            rowElem.append(rowHeader);
            for (let colNo = 1; colNo <= 4; colNo++) {
                let cell = document.createElement("td");
                cell.append(`${index*colNo}`);
                rowElem.append(cell);
            }
            myTable.append(rowElem);
        }

        $("#table").append(myTable);
    })//Arrow function - Event handler for btn 3
})