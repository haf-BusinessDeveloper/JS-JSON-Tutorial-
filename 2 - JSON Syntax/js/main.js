/*
JSON Syntax Rules
JSON syntax is derived from JavaScript object notation syntax:

   - Data is in name/value pairs (name: value)
   - Data is separated by commas ,
   - Curly braces hold objects {}
   - Square brackets hold arrays []
*/


// Object in JavaScript
const Object = {
      name: "John", // string
      age: 30, // number
      city: "New York", // string
      married: true, // boolean
      children: ["Mary", "Peter", "Sally"], // array
};

// Object in JSON
const ObjJSON = JSON.stringify(Object);
console.log(ObjJSON);
