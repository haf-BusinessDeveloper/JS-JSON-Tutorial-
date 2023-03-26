/*
A common use of JSON is to exchange data to/from a web server.

When receiving data from a web server, the data is always a string.

Parse the data with JSON.parse(), and the data becomes a JavaScript object.
*/

fetch('http://localhost/api/?name=Medhat&&age=30').then(function(response) {
    return response.json();
    }).then(function(data) {
        console.log(data);
        document.getElementById('name').innerHTML = data.name;
        document.getElementById('age').innerHTML = data.age;
        document.getElementById('country').innerHTML = data.country;
        document.getElementById('job').innerHTML = data.job;

    });