var myArray = []//Will be used below to create an array of Students
var studentCount = 0;

window.onload = () => {
    document.querySelector("#demo1A").onclick = demoObject1;
    document.querySelector("#demo1B").onclick = demoObject2;
    document.querySelector("#demo1C").onclick = demoObject3;
      document.querySelector("#demo1D").onclick = testPseudoClass1;
     document.querySelector("#demo1E").onclick = testPseudoClass2;
     document.querySelector("#demo1F").onclick = testPseudoClass3;
    document.querySelector("#demo1G").onclick = testPseudoClass4;
     document.querySelector("#demo1H").onclick = displayNextStudent;
     document.querySelector("#demo1J").onclick = createImage;

    //When the form loads, we call CreateStudentArray() to create an array of Student
    //Objects- The function displayNextStudent will then iterate through the array
     createStudentArray();
}

function demoObject1() {
    var invoice = {
        invoiceNumber: "121324",
        taxRate: 0.05
    }
    console.log(invoice);
    console.log("invoice num: " + invoice.invoiceNumber);
    console.log("tax Rate: " + invoice.taxRate);
    alert("Invoice Number =" + invoice.invoiceNumber);
    alert("TaxRate=" + invoice.taxRate);
}

function demoObject2() {
    var invoice = {
        invoiceNumber: "121324",
        taxRate: 0.05,
        getTotalAmount: function (subtotal) {
            return subtotal * (1 + this.taxRate);
        }
    }

    console.log("Invoice Number= " + invoice.invoiceNumber);
    console.log("Invoice Total= " + invoice.getTotalAmount(200));
    invoice.invoiceNumber = "789654";
    console.log("Invoice Number= " + invoice.invoiceNumber);
    delete invoice.invoiceNumber;
    console.log("Invoice Number= " + invoice.invoiceNumber);
    console.log(invoice);
}

function demoObject3() {
    //iterating through the properties of an object
    var invoice = {
        invoiceNumber: "121324",
        taxRate: 0.07,
        costBeforeTax: 250
    }
    
    for (var key in invoice) {
        console.log(`${key}: ${invoice[key]}`);
    }
    
    
}

var invoice = function (invoicenum, rate) {
    this.invoiceNumber = invoicenum;
    this.taxRate = rate;
}

function testPseudoClass1() {
    var invoice1 = new invoice("14532", 0.025);
    var invoice2 = new invoice("43215", 0.075);
    alert("info for invoice1- num:" + invoice1.invoiceNumber
    + "  rate: " + invoice1.taxRate);
    alert("info for invoice2- num:" + invoice2.invoiceNumber
    + "  rate: " + invoice2.taxRate);
}

invoice.prototype.calculateTotal = function (subtotal) {
    return (subtotal * (1 + this.taxRate)).toFixed(2);
}

function testPseudoClass2() {
    var invoice1 = new invoice("14532", 0.025);
    var invoice2 = new invoice("43215", 0.075);
    alert("info for invoice1- num:" + invoice1.invoiceNumber
    + " Total: " + invoice1.calculateTotal(100));
    alert("info for invoice2- num:" + invoice2.invoiceNumber
    + " Total: " + invoice2.calculateTotal(300));
    
}

var recentInvoice = function (invoicenum, rate, day, month, year) {
    this.invoiceNumber = invoicenum;
    this.taxRate = rate;
    this.date = { day, month, year };
}
recentInvoice.prototype.calculateTotal = function (subtotal) {
    return (subtotal * (1 + this.taxRate)).toFixed(2);
}

function testPseudoClass3() {
    var invoice1 = new recentInvoice("14532", 0.025, 30, 5, 2020);
    var invoice2 = new recentInvoice("43215", 0.075, 20, 2, 2021);
    var invoice3 = new recentInvoice("12135", 0.03, 22, 01, 2022);
    var invoice4 = new recentInvoice("17356", 0.05, 13, 02, 2022);
    alert("info for invoice1- num:" + invoice1.invoiceNumber
    + " Total: " + invoice1.calculateTotal(100)
    + "  date: " + invoice1.date.day + '/' + invoice1.date.month
    + '/' + invoice1.date.year);
    alert("info for invoice2- num:" + invoice2.invoiceNumber
    + " Total: " + invoice2.calculateTotal(300));
    console.log("info for invoice1- num:" + invoice3.invoiceNumber
    + " Total: " + invoice3.calculateTotal(100)
    + "  date: " + invoice3.date.day + '/' + invoice3.date.month
    + '/' + invoice3.date.year)
    console.log("info for invoice1- num:" + invoice4.invoiceNumber
    + " Total: " + invoice4.calculateTotal(100)
    + "  date: " + invoice4.date.day + '/' + invoice4.date.month
    + '/' + invoice4.date.year)
}

var date = function (d, m, y) {
    this.day = d;
    this.month = m;
    this.year = y;
}
var improvedInvoice = function (invoicenum, rate, day, month, year) {
    this.invoiceNumber = invoicenum;
    this.taxRate = rate;
    this.invoiceDate = new date(day, month, year);
}
improvedInvoice.prototype.calculateTotal = function (subtotal) {
    return (subtotal * (1 + this.taxRate)).toFixed(2);
}
function testPseudoClass4() {
    var invoice1 = new improvedInvoice("14532", 0.025, 30, 5, 2020);
    var invoice2 = new improvedInvoice("43215", 0.075, 20, 2, 2021);
    alert("info for invoice1- num:" + invoice1.invoiceNumber
    + " Total: " + invoice1.calculateTotal(100)
    + "date: " + invoice1.invoiceDate.day + '/'
    + invoice1.invoiceDate.month
    + '/' + invoice1.invoiceDate.year);
    alert("info for invoice2- num:" + invoice2.invoiceNumber
    + " Total: " + invoice2.calculateTotal(300));
}


//Creating a student constructor as a named function

function Student(name, Id) {
    this.stdName = name;
    this.stdId = Id;
}

function createStudentArray() {
    var student1 = new Student("Johnny Smith", 123);
    var student2 = new Student("Jane Alfredo", 246);
    var student3 = new Student("Michael Corleone", 324);
    var student4 = new Student("Agatha Theore", 121);
    var student5 = new Student("Maryline Jasper", 259);
    myArray.push(student1);
    myArray.push(student2);
    myArray.push(student3);
    myArray.push(student4);
    myArray.push(student5);
    
}

function displayNextStudent() {
    var elem = document.querySelector("#studentPlaceHolder");
    var str = `Name: ${myArray[studentCount].stdName} - Id: ${myArray[studentCount].stdId}`;
    elem.innerHTML = str;
    studentCount = (++studentCount) % (myArray.length);
    
}


//Declare myImage as global


//Creates an image element with the 
// src attribute set to "images/picture1.jpg"
// and height set to 200 px

function createImage() {
    var myImage = new Image();
    myImage.src = "images/picture1.jpg";
    myImage.style.height = "200px";
    var elem = document.querySelector("#picture");
    
    elem.setAttribute("src", myImage.src);
    elem.style.height = myImage.style.height;
}
