/*
JSON can very easily be translated into JavaScript.

JavaScript can be used to make HTML in your web pages.
*/

let myJson = {
    "name": "Mohamed",
    "age": 30,
    "country": "Norway",
    "job": "developer",
    "cars": [
        { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
        { "name":"Toyota", "models":[ "Corolla", "Prius", "Tahoe" ] }
    ]};

let myJsonString = JSON.stringify(myJson);

console.log(myJsonString);

fetch(`http://localhost/api/?myJson=${myJsonString}`).then(function(response) {
    return response.json();
}).then(function(myJson) {
    console.log(myJson);

    let tbody = document.querySelector('#tbody');
    
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>1</td><td>${myJson.name}</td><td>${myJson.age}</td><td>${myJson.country}</td><td>${myJson.job}</td>`;
        tbody.appendChild(tr);
    
});

