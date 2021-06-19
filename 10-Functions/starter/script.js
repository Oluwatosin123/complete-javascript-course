'use strict';

// const bookings = [];
// const createBooking = function (
//     flightNum,
//     numPassengers = 1,
//     price = 199 * numPassengers) {
//     //ES5 old way of setting default values
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);
/**************************************/

/**************************************/
/* How Passing Arguments worksValus vs Reference Type */
// const flight = 'LH234';
// const tosin = {
//     name: 'Ajose Tosin',
//     pasport: 745462346,
//}

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.pasport === 745462346) {
//         alert('check in')
//     } else {
//         alert('Wrong passport!')
//     }
// };
//checkIn(flight, tosin);
//console.log(flight);// 'LH234'
//console.log(tosin);// 'Mr. Ajose Tosin'

//Is the same as doing...
// const flightNum = flight;
// const passenger = tosin;

//When 2 different function is manipulating the same object it can cause issue

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(tosin);
// checkIn(flight, tosin)
/**************************************/

/**************************************/
/* Higher-order function(Function accepting callback functions) */
// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// //Here is the High-order function
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Tosin is awesome at JavaScript!', upperFirstWord);

// transformer('Tosin is awesome at JavaScript!', oneWord);

// //JS uses callback all the time
// const high5 = function () {
//     console.log('i 💖 you');
// };
// document.body.addEventListener('click', high5);
// ['tosin', 'ajose', 'lanre'].forEach(high5)

//Function Returning Function this is the opposite of callback function
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

//CHALLENGE converting it to arrow function
// const greet = greeting => name =>
//     console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Tosin');
// greeterHey('Ajose');

// greet('Hello')('Lanre');
/**************************************/

/**************************************/
/*1) The call and apply Methods */
// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     //book: function() {},
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
//     },
// };

// lufthansa.book(239, 'Tosin Ajose');
// lufthansa.book(635, 'Ajose Lanrewaju');
// console.log(lufthansa);

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }

// const book = lufthansa.book;

//Does not work coz the this keyword is undefined
// book(23, 'Sarah Williams');

/* functions are objects so it has it own methods that helps set the this keyword manually they are .call(), .apply(), .bind() */
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Coper');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: [],
// };

// book.call(swiss, 538, 'Mary Cooper');
// console.log(swiss);

/*2) Using the apply() method.
It works like the .call() method but does not recieve list of arguments after the this keyword. It takes an array of arguments. eg
*/
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData)
// console.log(swiss);
// //we can also use spread method to unpack the array
// book.call(swiss, ...flightData)

/*3) .bind() method manually allows us to set the this keyword for any function call the difference is that .bind method does not immediately call the function instead it returns a new function where the this key word is bound. It set to whatever value we pass into bind.*/

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schemdtmann');
// bookEW23('Martha Cooper');

// //With Event Listener
// lufthansa.plane = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// };

// //lufthansa.buyPlane();

// // document.querySelector('.buy').addEventListeners('click', lufthansa.buyPlane.bind(lufthansa));

// //Partial Applications(we can preset parameters) of .bind() method
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

// //CHALLENGE 1
// const addTaxRate = function (rate) {
//     return function (value) {
//         return value + value * rate;
//     };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

//CHALLENGE 2 Poll result application
// const poll = {
//     question: `what is your favourite programming language?`,
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section😂

//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         //Get Answer
//         const answer = Number(prompt(
//             `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//         ));
//         console.log(answer);

//         //RegisterNewAnswer
//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
//         // console.log(this.answers)
//         this.displayResults()
//         this.displayResults('string')

//     },

//     displayResults(type = 'array') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             //poll resultss are 13, 2, 4, 1
//             console.log(`Polls resultes are ${this.answers.join(', ')}`);
//         }
//     }
// };
// poll.registerNewAnswer();


// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 3, 5, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [5, 2, 3] });

// /* Immediately invoked function Expression IIFE */
// const runOnce = function () {
//     console.log('This will never run again');
// };
// runOnce();

//IIFE
(function () {
    console.log('This will not run again');
})();

//IIFE for arrow function
(() => console.log('This will never run again'))();

/**************************************/

/**************************************/
/* CLOSURE */
// const secureBooking = function () {
//     let passengerCount = 0;

//     return function () {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();
// booker();

// console.dir(booker);

//MORE examples on closure
//Example 1
// let f;
// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     };
// };

// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2);
//     };
// };

// g();
// f();
// console.dir(f)

// //Re-assigning f function
// h();
// f();
// console.dir(f)

//Example 2
// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function () {
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// };
// boardPassengers(180, 3)

//CHALLENGE 3
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue'
    })
})();

// const body = document.querySelector('body').addEventListener('click', (function () {
//     const header = document.querySelector('h1');
//     header.style.color = 'blue';
// }))();

/**************************************/