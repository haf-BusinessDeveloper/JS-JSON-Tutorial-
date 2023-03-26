/*
Keys must be strings, and values must be a valid JSON data type:

    - string
    - number
    - object
    - array
    - boolean
    - null

It is a common mistake to call a JSON object literal "a JSON object".

JSON cannot be an object. JSON is a string format.

The data is only JSON when it is in a string format. When it is converted to a JavaScript variable, it becomes a JavaScript object.
*/

// JSON format
var myJSON = '{"first_name":"Mohamed", "last_name":"Medhat", "age":31, "city":"New York"}';

// Convert JSON to JavaScript object
var myObj = JSON.parse(myJSON);

myObj.getFullName = function () {
    return `FullName: ${this.first_name} ${this.last_name}
    <br>Age: ${this.age}
    <br>City: ${this.city}
    `;
}

document.getElementById("demo").innerHTML = myObj.getFullName();
