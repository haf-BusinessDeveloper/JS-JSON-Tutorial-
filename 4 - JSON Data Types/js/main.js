/*
Valid Data Types
In JSON, values must be one of the following data types:

   - a string
   - a number
   - an object (JSON object)
   - an array
   - a boolean
   - null

JSON values cannot be one of the following data types:

    - a function
    - a date
    - undefined
*/

let Obj = {
    name: "Ahmed", // srting
    age: 20, // number or integer
    address: { // object
        city: "New York",
        state: "NY"
    },
    isMarried: true, // boolean,
    isEmployed: false, // boolean
    job: null,
    children: ["Mohamed", "Janat", "Kamal"], // array
    // checkIfMarried: function() { // function
    //     return this.isMarried;
    // },
}

let jsonObj = JSON.stringify(Obj);

