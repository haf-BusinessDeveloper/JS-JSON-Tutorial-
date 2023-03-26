/*
Arrays in JSON are almost the same as arrays in JavaScript.

In JSON, array values must be of type string, number, object, array, boolean or null.

In JavaScript, array values can be all of the above, plus any other valid JavaScript expression, including functions, dates, and undefined.


*/

// JavaScript object
var person = {
  firstName: "Mohamed",
  lastName: "Ahmed",
  age: 50,
  eyeColor: "blue",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
  children: [
    {
      firstName: "Sally",
      age: 25,
    },
    {
      firstName: "Billy",
      age: 20,
    },
  ],
  isMarried: true,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  dateOfBirth: new Date(1960, 1, 1),
};

// javascript object to JSON
let Persons = [
  {
    firstName: "Mohamed",
    lastName: "Ahmed",
    age: 50,
    eyeColor: "blue",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
    },
    children: [
      {
        firstName: "Sally",
        age: 25,
      },
      {
        firstName: "Billy",
        age: 20,
      },
    ],
    isMarried: true,
  }, // end of first person object in array
    {
    firstName: "Medhat",
    lastName: "Kamal",
    age: 50,
    eyeColor: "blue",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
    },
    children: [
        {
        firstName: "Sally",
        age: 25,
        },
        {
        firstName: "Billy",
        age: 20,
        },
    ],
    isMarried: true,
    }, // end of second person object in array
];

let newPersonJSON = JSON.stringify(newPerson);
