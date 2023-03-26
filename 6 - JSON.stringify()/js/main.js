/*
A common use of JSON is to exchange data to/from a web server.

When sending data to a web server, the data has to be a string.

Convert a JavaScript object into a string with JSON.stringify().
*/

var myObj = {name: "Omar", age: 4, address: "Egypt, Cairo"};

localStorage.setItem("testJSON", JSON.stringify(myObj));



// var myObj2 = JSON.parse(localStorage.getItem("testJSON"));


let localStorageData = localStorage.getItem("testJSON");

if (localStorageData) {
  let myObj2 = JSON.parse(localStorageData);
  console.log(myObj2);
  document.getElementById("demo").innerHTML = myObj2.name; // Omar
}else{
    console.log("no data");
    document.getElementById("demo").innerHTML = "لا يوجد بيانات";
}




