/*
What is JSON?
JSON stands for JavaScript Object Notation
JSON is a lightweight data-interchange format
JSON is plain text written in JavaScript object notation
JSON is used to send data between computers
JSON is language independent *
*/


// Object in javascript
let myObj = {
    "name":"John", // string
    "age":30, // number or integer
    "cars": [ // array
        { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
        { "name":"Toyota", "models":[ "Corolla", "Prius", "Tacoma" ] }
    ]
};

// JSON in javascript
let myJSON = JSON.stringify(myObj);
console.log(myJSON);

// typeof
// console.log(typeof myObj);
console.log(typeof myJSON);



