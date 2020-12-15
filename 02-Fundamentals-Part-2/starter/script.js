'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can Drive 🚗');

// const interface = 'Audio;Strict Mode will help throw this SyntaxError: Unexpected strict mode reserved word

// const private = 534; // Strict Mode will help throw this SyntaxError: Unexpected strict mode reserved word

/* FUNCTION */
// function logger() {
//     console.log('my name is Tosin');
// }

// we can use a function by calling/ running/ invoking

// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function helps implement the DRY Principle i.e Don't Repeat Yourself


/* TYPES OF FUNCTION */
//FUNCTION DECLARATION
//
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

//FUNCTION EXPRESSION / ANONYMOUS FUNCTION
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

/* ARROW FUNCTION */
//Much shorter and Cleaner
// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(1991);
// console.log(age3);


// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     //return retirement; 
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearUntilRetirement(1991, 'Tosin'));
// console.log(yearUntilRetirement(1989, 'Bob'));

/* /////////////////////// */
/* /////////////////////// */


/* FUNCTION CALLING OTHER FUNCTIONS */
//This is done so as to impliment the DRY Rule
//It also makes our code more cleaner, maintainable and readable

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

/* /////////////////////// */
/* /////////////////////// */

/* RETURN KEYWORD WILL ALWAYS TERMINATE A FUNCTION EXECUTION */
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
// console.log(`${firstName} retires in ${retirement} years`);
// return retirement;
//     } else {
//         console.log(`${firstName} ha already retired 🎉`);
//         return -1
//     }
// }

// console.log(yearUntilRetirement(1991, 'Tosin'));
// console.log(yearUntilRetirement(1950, 'Mike'));

/* /////////////////////// */
/* /////////////////////// */

/* Coding Challenge 1 */
// const calcAverage = (a, b, c) =>  (a + b + c) / 3

//Tesst case 1
// const avgDolphines = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

//Tesst case 2
// const avgDolphines = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// console.log(avgDolphines, avgKoalas);

// function checkWinner(A, B) {

//     if (A >= 2 * B) {
//         console.log(`Dolphines Wins 🏆 (${A} vs ${B})`);
//     } else if (B >= 2 * A) {
//         console.log(`Koalas Wins 🏆 (${A} vs ${B})`);
//     } else {
//         console.log(`No team Wins`);
//     }
// }
// checkWinner(avgDolphines, avgKoalas);

/* /////////////////////// */
/* /////////////////////// */

/* DATA STRUCTURE */
/* ARRAYS */
// const friend1 = 'Micheal';
// const friend2 = 'Layomi';
// const friend3 = 'Kayode';

//Best way to declare an array
// const friends = ['Micheal', 'Loyomi', 'Kayode']
// console.log(friends);

//Another way to declare an array
// const years = new Array(1991, 1994, 1995, 2008, 2010);
// console.log(years);

//We can access the element of an array via the index and it start from [0]
// console.log(friends[0]);
// console.log(friends[2]);

//we use .length property to get length of an array
// console.log(friends.length);
//we can get the last element of an array by deducting 1 from the arrays length
// console.log(friends[friends.length - 1]);

// Array elements are mutable i.e the can be change even when they are declare with const coz array is not a primitive data type
// friends[2] = 'Tosin'
// console.log(friends);
//The whole array is immutable i.e friends[] (array itself) can not be change
//friends = ['Bob', 'Alice'] //This is not possible

// const firstName = 'Tosin';
// const Tosin = [firstName, 'Ajose', 2037 - 1989, 'Teacher', friends];

// console.log(Tosin);
// console.log(Tosin.length);

// EXERCISE
// const calcAge = function (birthYear) {
// return 2037 - birthYear;
// }
// const years = [1991, 1994, 1995, 2002, 2008, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

/* ARRAY METHODS TO ADD ELEMENTS*/
//.push add element to the end of an array and return the length of the array
// const friends = ['Micheal', 'Loyomi', 'Kayode'];
// const newLength = friends.push('Lanre');
// console.log(friends);
// console.log(newLength);

//.unshift add element to the beginning of an array
// friends.unshift('John');
// console.log(friends);

/* ARRAY METHODS TO REMOVE ELEMENTS and they will always return the element that was removed*/

// friends.pop(); //remove last element
// const popped = friends.pop();
// console.log(friends);

// friends.shift(); //remove the first element in the array
// console.log(friends);

/* TO CHECK IF AN ARRAY CONTAINS AN ELEMENT */
//.indexOf reurn 1 or -1
// console.log(friends.indexOf('Micheal'));
// console.log(friends.indexOf('Bob'));

//.includes return boolean(true or false) 
// friends.push(23);
// console.log(friends.includes('Micheal'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));

// if (friends.includes('Loyomi')) {
//     console.log('You have a friend called Loyomi');
// }

/* CODING CHALLENGE 1 ON ARRAYS */
//solution 2
// const calcTip = (bill) => {
//     if (bill <= 300) {
//         console.log(bill * (15 / 100)); 
//     } else if (bill >= 500) {
//         console.log(bill * (20 / 100)); 
//     } else {
//         console.log('invalid input'); 
//     }
// }

// /* Test Data */
// // calcTip(100)
// // calcTip(125)
// // calcTip(555)
// // calcTip(44)

// const bills = [100, 125, 555, 44];

// console.log(bills);

// const tip1 = calcTip(bills[0]);
// const tip2 = calcTip(bills[1]);
// const tip3 = calcTip(bills[2]);
// const tip4 = calcTip(bills[3]);

// // console.log(tip1, tip2, tip3, tip4);

// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]), calcTip(bills[2])]

// // console.log(tips);

//Solution 1
// const tipCalc1 = 15 / 100
// const tipCalc2 = 20 / 100

// const calcTip = (bill) => {
//     return bill >= 50  && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

/* Test Data */
// console.log(calcTip(100));
// console.log(calcTip(125));
// console.log(calcTip(555));
// console.log(calcTip(44));

// const bills = [100, 125, 555, 44];
// console.log(bills);

// const tip1 = calcTip(bills[0]);
// const tip2 = calcTip(bills[1]);
// const tip3 = calcTip(bills[2]);
// const tip4 = calcTip(bills[3]);
// console.log(tip1, tip2, tip3, tip4);

// const tips = [tip1, tip2, tip3, tip4]
// console.log(tips);

// const total1 = [calcTip(bills[0]) + 100, calcTip(bills[1]) + 125, calcTip(bills[2]) + 555, calcTip(bills[3])+ 44]
// console.log(total1);

// const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2], calcTip(bills[3]) + bills[3]]

// console.log(total);

/* /////////////////////// */
/* /////////////////////// */


/* OBJECTS */
// const tosin = {
//     firstName: 'Tosin',
//     lastName: 'Ajose',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Sodiq', 'Mayowa']
// };
// console.log(tosin);

// we can retrieve data from an object using the dot . and square bracket [] notation. The order of property does not matter when retrieving data unlike an Array
/* using the dot notation */
// console.log(tosin.lastName);

/* using the squre bracket */
// console.log(tosin['lastName']);

/*
when should you use the square bracket notation
when want to add an expression to the object eg
*/
// const nameKey = 'Name';
// console.log(tosin['first' + nameKey]);
// console.log(tosin['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about tosin? Choose firstName, lastName, age, job, and friends');

// if (tosin[interestedIn]) {
//     console.log(tosin[interestedIn]);
// } else {
//     console.log('Wrong request! Choose firstName, lastName, age, job, and friends');
// }

// tosin.location = 'Nigeria';
// tosin['twitter'] = '@codewizard'
// console.log(tosin);

// CHALLENGE
//Write this sentence
//"Tosin has 3 friends, and his best friend is called Micheal"
// console.log(`${tosin.firstName} has ${tosin.friends.length} friends, and his best friend is called ${tosin.friends[0]}.`);

// console.log(`${tosin.firstName} has 3 friends, ${tosin.friends}, and his best friend is called ${tosin.friends[0]}.`);
/* /////////////////////// */
/* /////////////////////// */


/* OBJECT METHODS */
// const tosin = {
//     firstName: 'Tosin',
//     lastName: 'Ajose',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Sodiq', 'Mayowa'],
//     hasDriversLicense: true,

// calcAge: function (birthYear) {
//     return 2037 - birthYear;
// }

/*
Using the this keyword help to implement the DRY PRINCIPLE. The this keyword have access to all the object property 
*/

// calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYear;
// },

/*
We can use the this keyword to store a new property
*/

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     summary: function () {

// return `${this.firstName} is a ${ this.calcAge()}-years old ${this.job} and he has a ${this.hasDriversLicense ? 'a' : 'no'} driver's license`

//     }

// };

// console.log(tosin.summary());

// console.log(tosin.calcAge());
// console.log(tosin.age);
// console.log(tosin['calcAge'](1991));

/*
write a method that returns this string
"Tosin is 46-years old teacher, and he has a driver's license"
*/

/* CODING CHALLENGE 3 */
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height ** 2)
//         return this.BMI
//     }

// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height ** 2)
//         return this.BMI
//     }
// }

// console.log(mark.calcBMI());
// console.log(john.calcBMI());
// console.log(mark.BMI, john.BMI);

// if (mark.BMI > john.BMI) {
//     console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);
// } else if (john.BMI > mark.BMI) {
//     console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`);
// }
/* OR */
// console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);

/* /////////////////////// */
/* /////////////////////// */


/* ITERATION (LOOPS) */
//LOOPS are use to automate repetitive task
/* THE for Loop */
// console.log('Lifting weights repitition 1 🏋️‍♂️');
// console.log('Lifting weights repitition 2 🏋️‍♂️');
// console.log('Lifting weights repitition 3 🏋️‍♂️');
// console.log('Lifting weights repitition 4 🏋️‍♂️');
// console.log('Lifting weights repitition 5 🏋️‍♂️');
// console.log('Lifting weights repitition 6 🏋️‍♂️');
// console.log('Lifting weights repitition 7 🏋️‍♂️');
// console.log('Lifting weights repitition 8 🏋️‍♂️');
// console.log('Lifting weights repitition 9 🏋️‍♂️');
// console.log('Lifting weights repitition 10 🏋️‍♂️');

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++ /*rep = rep + 1*/) {
//     console.log(`Lifting weights repitition ${rep} 🏋️‍♂️`);
// }

// const tosin = [
//     'Tosin',
//     'Ajose',
//     2037 - 1991,
//     'teacher',
//     ['Micheal', 'Sodiq', 'Mayowa'],
//     true,
// ];

// const types = [];

// for(let i = 0; i < tosin.length; i++){
//     //reading an array
// console.log(tosin[i], typeof tosin[i]);
// /* 
// we can create another array based on existing array
// */

// //Filling types array
// //Method 1
// // types[i] = typeof tosin[i];

// //Method 2
// types.push(typeof tosin[i])
// }

// console.log(types);

// //Example 2
// const years = [1992, 2007, 1969, 2020, 2021];
// const ages = [];

// for(let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i])
// }
// console.log(ages);

// /* 
// using CONTINUE & BREAK IN A LOOP
// */
// console.log('--- ONLY STRINGS---');
// for(let i = 0; i < tosin.length; i++){
//     if (typeof tosin[i] !== 'string') continue;

//     console.log(tosin[i], typeof tosin[i]);
// }

// console.log('--- BREAK WITH NUMBERS---');
// for(let i = 0; i < tosin.length; i++){
//     if (typeof tosin[i] === 'numbers') break;

//     console.log(tosin[i], typeof tosin[i]);
// }
/* /////////////////////// */
/* /////////////////////// */


/* Looping Backwards and Loops in Loop */
// const tosin = [
//     'Tosin',
//     'Ajose',
//     2037 - 1991,
//     'teacher',
//     ['Micheal', 'Sodiq', 'Mayowa'],
//     true,
// ];

//i is always the counter
// for(let i = tosin.length - 1; i >= 0; i--){
//     console.log(i, tosin[i]);
// }

// /* CREATING LOOP WITHIN A LOOP */
// //Using the weight lifting example
// for (let exercise = 1; exercise < 4; exercise++) {
// console.log(`------Starting exercise ${exercise}`);

// for(let rep = 1; rep < 6; rep++){
//     console.log(`Exercise ${exercise}: Lifting weight repitition ${rep} 🏋️‍♂️🏋️‍♂️`);
// }

// }
/* /////////////////////// */
/* /////////////////////// */


/* WHILE LOOP */
//Below is a FOR LOOP
// for(let rep =1; rep <= 10; rep++){
//     console.log(`Lifting weights repitition ${rep}`);
// }

//Writing the above FOR LOOP IN WHILE LOOP
// let rep = 1;
// while (rep <= 10) {
//     // console.log(`WHILE: Lifting weights repitition ${rep} 🏋️‍♂️🏋️‍♂️`);
//     rep++
// }

//When you dont know the number of time you need to loop use while loop
// let dice = Math.trunc(Math.random() * 6) + 1;
// let dice2 = Math.floor(Math.random() * 6) + 1;

// console.log(dice);
// console.log(dice2);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     // dice2 = Math.floor(Math.random() * 6) + 1;

//     if (dice === 6) console.log('Loop ends Here');
// }


/* CODING CHALLENGE 4a My Solution*/
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];
// const tipCalc1 = 15 / 100
// const tipCalc2 = 20 / 100

// const calcTip = (bill) => {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// Test Data Area
// const result = calcTip(22)
// const result2 = result + bills[0]
// console.log(result, result2);

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i])
//     // console.log(tip);

//     tips.push(tip);
//     // console.log(i, tips);
//     // console.log(tips);

//     const sum = calcTip(bills[i]) + bills[i]
//     // console.log(sum);

//     total.push(sum);
//     // console.log(i, total);
//     // console.log(total);
// }

// console.log(tips);
// console.log(total);

// /* CODING CHALLENGE 4b My Solution*/
// let sum = 0;
// for (let i = 0; i < total.length; i++) {
//     sum += total[i]
//     // console.log(total + total[i]);
// }
// console.log(sum);
// let sumIt = total.reduce((a, b) => {
//     return a + b
// })
// console.log(sumIt)
// const calcAverage = (arr) => {
// return sum / total.length
// }
// console.log(calcAverage(total));

/* Jonas Solution */
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip);
    total.push(tip + bills[i]);
}
console.log(bills, tips, total);

const calAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //  sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calAverage(total));
console.log(calAverage(tips));


/* /////////////////////// */
/* /////////////////////// */


/* /////////////////////// */
/* /////////////////////// */
/* /////////////////////// */
