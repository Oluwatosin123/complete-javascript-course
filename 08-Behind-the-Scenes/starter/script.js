'use strict';

/*Scoping in practice*/
// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         let output = `${firstName}, You are ${age}, born in ${birthYear}`; // firstName is a global scope 
//         console.log(output);

//         /*Block Scope*/
//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;

//             //Creating New variable with same name as outer scope's variable
//             const firstName = 'steven';

//             //Reassigning outer scope's variable
//             output = 'NEW OUTPUT';

//             const str = `Oh,  and you're a millenial, ${firstName}`
//             console.log(str);

//             /*Function as a BLock Scope in strict mode in ES6*/
//             function add(a, b) {
//                 return a + b;
//             }
//         }
// console.log(str); //this will throw reference error coz const is a block scope same as let.

// console.log(millenial); // this will be available coz var is a function scope and not a block scope.

//console.log(add(3, 2)); // this will print error coz in strict mode function become Block Scope  and can be accessed in its scope only but once the strict mode is removed it can be calledoutside its scope.  
// }
//printAge();
// console.log(firstName); // firstName is a global scope 

// return age;
// }

//const firstName = 'Tosin';
//calcAge(1991);
// console.log(age); //can not be access globally coz it in a local scope
// printAge() // can not be access globally coz it in a local scope

/* Hoisting and TDZ in Practice */
// Hoisting with Variable

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Tosin';
// let job = 'Teacher';
// const year = 1991;

/* Hoisting with Functions */
//console.log(addDecl(2, 3)); // function declaration will always work with Hoisting
// console.log(addExpr(2, 3));
// console.log(addArrow);
// console.log(addArrow(2, 3));

//function declaration
// function addDecl(a, b) {
//     return a + b;
// }

//function expression
// const addExp = function (a, b) {
//     return a + b;
// }

//arrow function
// var addArrow = (a, b) => a + b;

//Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All Products Deleted');
// }

//var x = 1; //Variable declared with var will create a property on the global window object.
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);


///////////////////////////////////////////////////////////
/*The this keyword */
//this keyword in global scope
//console.log(this); // points to the window object

//this keyword in a regular function call
// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this); //in strict mode this keyword = undefined but in sloppy mode the this keyword will point to the global object i.e window object
// }
// calcAge(1991);

//this keyword in a arrow function
// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this); // this keyword will point to the global object i.e window object and also it parent because arrow function does not have its own this keyword
// }
// calcAgeArrow(1998);

//this keyword in object i.e Method
// const tosin = {
//     year: 1991,
//     name: 'Tosin',
//     calcAge: function () {
//         console.log(this); //this will return tosin object
//         console.log(2037 - this.year);
//     }
// }
// tosin.calcAge()

//proof to show that this keyword will always point to the object calling it. Let do a Method Borrowing

// const maltida = {
//     year: 2017,
// };

// maltida.calcAge = tosin.calcAge;
// maltida.calcAge();

// const f = tosin.calcAge;
// f(); //this will return error coz it could not access the tosin object

////////////////////////////////////////////////
/* PITFALLS OF the this keyword related to regular function and arrow function */

//Pitfall 1

// var firstName = 'Matilda'; //this will cause the variable to leak 

// const tosin = {
//     firstName: 'Tosin',
//     year: 1991,
//     calcAge: function () {
//         console.log(this); //this will return tosin object
//         console.log(2037 - this.year);
//     },

//     greet: () => {
//         console.log(`Hey ${this.firstName}`) // if the matilda variable is uncommented this.firstName will refer to it. which suppose not to be.
//     }
// }
// // tosin.calcAge();
// tosin.greet();// it will return Hey undefined because arrow function does not have it own this keyword
/*
Things to note.
1) Never use arrow function as a method.
2)Never use var to declare a variable
*/

/*
Pitfall 2 of this keyword is when you have a function inside a method
 */
// const tosin = {
//     firstName: 'Tosin',
//     year: 1991,
//     calcAge: function () {
//         // console.log(this); //this will return tosin object
//         console.log(2037 - this.year);

//Solution 1;
// const self = this; // i can use this two expression (self or that) to refer to this keyword.
// const isMillenial = function () {
//     console.log(this);
//     console.log(self.year >= 1981 && self.year <= 1996);
// console.log(this.year >= 1981 && this.year <= 1996);

/*
Solution 2
using arrow function will solve the problem coz arrow function does not have its own this keyword, so it will use/ inherit its parent scope this keyword
*/
//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial();// it will returned undefine coz it a regular function call and its this keyword must be undefined
//     },

//     greet: () => {
//         console.log(`Hey ${this.firstName}`) // if the matilda variable is uncommented this.firstName will refer to it. which suppose not to be.
//     }
// }
// tosin.greet();
// tosin.calcAge();// this will throw error of undefined

//////////////////////////////////////
/* arguments keyword */
// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2, 3);
// addExpr(2, 3, 8, 4, 12);

// const addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// addArrow(2, 3);
// addArrow(2, 3, 8, 4, 12);// it will return arguments not defined

/////////////////////////////////////////
/* Primitive vs Objects (Primitive vs Reference Types) */
//Primitives Types
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age); //31
// console.log(oldAge); //30

// //Objects Reference Types
// const me = {
//     name: 'Tosin',
//     age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friends:', friend);
// console.log('Me:', me);

/* Primitive vs Objects in practice */
// Primitive types
let lastName = 'Andrei';
let oldLastName = lastName;
lastName = 'Ajose'
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davies';
console.log('Before marriage:', jessica);
console.log('After marriage:', jessica);
//marriedJessica = {}; //this will throw uncaught TypeError assignment to constant variable

//Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

