/*
A common use of JSON is to exchange data to/from a web server.

When receiving data from a web server, the data is always a string.

Parse the data with JSON.parse(), and the data becomes a JavaScript object.
*/

var text = '{ "employees" : ["Ahmed", "Mohamed", "Kamal"] }';

var obj = JSON.parse(text);


let html = `
<table class="table table-hover">
    <tr>
        <td>م</td>
        <td>إسم الموظف</td>
    </tr>`;

document.getElementById("demo").innerHTML = html + obj.employees.map(function (item, index) {
    return `
        <tr>
            <td>${index + 1}</td>
            <td>${item}</td>
        </tr>
    `;
    }).join('') + `</table>`;


