/*
A common use of JSON is to read data from a web server, and display the data in a web page.

This chapter will teach you how to exchange JSON data between the client and a PHP server.
*/

let myJson = '{"age": 35,"country": "KSA","job": "Web Developer","name": "Ahmed"}';


fetch(`http://localhost/api/?myJson=${myJson}`).then(function(response) {
    return response.json();
    }).then(function(data) {
        console.log(data);
    }
);