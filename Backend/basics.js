// single line comment
/**
 * 
 */
//variables
//var 
//const
const PI = 3.14;

console.log((PI));

let numberone = 3;
let numbertwo = 5;

var numberthree = 6;

function addNumbers(){
    let numberFour = 34;
    // console.log(numberFour);
}

console.log(numberone);

//int
console.log(numberone - numbertwo);
console.log(numberthree + numbertwo);
//strings
let name = "Teopista";
let firstName = 'Tetricia';
let lastName = 'Gl';

let welcome = `Welcome back ${firstName}`;
console.log(welcome);

console.log("welcome back" + "" + "", + firstName);

console.log(firstName.toUpperCase());
console.log(firstName.length);

// Booleans
let isStudent = true;
let isInHall = false; 

//logical operators

console.log(isStudent && isInHall);
console.log(isStudent || isInHall);

//Arrays
let fruits = ["mangoes", "grapes", "Oranges"];
console.log(fruits);

fruits.push("apples");// appending items to the array
fruits.push("pineapples");

console.log(fruits);
// removing the last element from the array
fruits.pop()

console.log(fruits);

//Objects
let credentials = {"email": "tetriciag@gmail.com", "password" : "12345"}


let signUp = {"firstName":"Tetricia", "lastName": "Najjuma",
 "email":"tetriciag@gmail.com", "contact": "256778057890", "password":"12345"

}

console.log(signUp);
signUp["middleName"]= "Teopista";
signUp["confirmPassword"] = 12345
console.log(signUp.email);
console.log(signUp.password);


//comparisions
console.log(signUp.password == signUp.confirmPassword);
console.log(signUp.password === signUp.confirmPassword);


