window.onload = () => {
    document.querySelector("#demo1").onclick = () => 
    {
        var Student1 ={
            studentID: "9874",
            firstName: "Jeffrey",
            lastName: "Douglas"
        }
        console.log("Student id: "+Student1.studentID);
        console.log("First Name: "+Student1.firstName);
        console.log("Last Name: "+Student1.lastName);
    }
    document.querySelector("#demo2").onclick = () => 
    {
        var Student2 ={
            studentID: "6142",
            course1: "CMPE2000",
            course2: "CMPE1666"
        }
        console.log("Student id: "+Student2.studentID);
        console.log("Course1: "+Student2.course1);
        console.log("Course2: "+Student2.course2);
    }
    document.querySelector("#demo3").onclick = () => 
    {
        var car1 ={
            make: "Honda",
            model: "Civic",
            engineCapacity: "1500"
        }
        console.log("Make: "+car1.make);
        console.log("Model: "+car1.model);
        console.log("Engine Capacity: "+car1.engineCapacity);
    }
}