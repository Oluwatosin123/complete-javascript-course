'use strict';

/* Array Destructuring */
//Retrieving items the old way
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

//Using array Destructuring
// const [x, y, z] = arr;
// console.log(x, y, z);

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredients, ...otherIngredients) {
//     console.log(mainIngredients);
//     console.log(otherIngredients);
//   }
// };

/************************************************/
/* 1) Destructuring Using the Rest Operators*/
/* ... Using The Rest Operator */
//Note
/* SPREAD, is on the RIGHT side 0f = */
// const arr1 = [1, 2, ...[3, 4]];

// /* REST, is on the LEFT side of = */
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// /* Object using the REST  */
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

/*
2) Functions */
/*2nd use case of REST is to pass multiple values into
a function at the same time
*/
// const add = function (...numbers) {
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++)
//     sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(2, 3, 8, 5, 1, 4, 2);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms')

/************************************************/
/* Short Circuiting (&&, ||) AND, OR
3 CHARACTERISTIC OF LOGICAL OERARTORS
1)They can use any data types
2)They can return any data types
3)They can do short-circiting
*/
//Short-Circuiting with the || OR operator  
// console.log(3 || 'Tosin');//"3"
// console.log('' || 'Tosin');//"Tosin"
// console.log(true || 0);//true
// console.log(undefined || null);// null

// console.log(undefined || 0 || "" || 'hello' || 23 || null); //'Hello'

// // restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);//10

// restaurant.numGuests = 23;
// const guest2 = restaurant.numGuests || 10
// console.log(guest2);//23

//Short-Circuiting with the && AND operator 
// console.log(0 && 'Tosin');//0
// console.log(7 && 'Tosin');//'Tosin'
// console.log("Hello" && 23 && null && 'Tosin');//null

// //Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach')
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')
/************************************************/

/************************************************/
/* The Nullish Coalescing Operato (??) It works with the idea of nullish values which are null and undefined*/
// restaurant.numGuests = 12;
// const guests = restaurant.numGuests || 10
// console.log(guest);
//Nullish: null and undefined (NOT 0 or " ")
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
/************************************************/

/************************************************/
/* Using The Spread Operator... */
//The Old Way
// const arr = [7, 8, 9];
// const arr = [7, 8, 9];
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

//Using Spread Operator
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

//Add new element to the restaurant menu object
// const newMenu = [...restaurant.mainMenu, 'Rice', 'Yam'];
// console.log(newMenu);

//Using Spread Operator to create a shallow copy of an array
// const mainMenuCopy = [...restaurant.mainMenu];

//Joining 2 or more arrays together using spread operator
// const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(allMenu);

//Iterables are arrays, strings, maps, sets. NOT objects
// const str = 'Tosin';
// const letters = [...str, ' ', 'S.']
// console.log(letters);
// console.log(...str);
// console.log(`${...str}Tosin`); //This will return error coz the corlly brase of template literals is not expecting multiple values separated withcommas

//Real world Example
// const ingridients = [prompt("Let's make pasta! Ingridient 1?"), prompt('Ingridient 2?'), prompt('Ingridient 3')];
// console.log(ingridients);

// calling the order methods the old way
// restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[3]);
// calling the order methods the new way
// restaurant.orderPasta(...ingridients);

//we can also create add to a pre-existing object 
// const newRestaurant = {
//   foundedIn: 1998, ...restaurant, founder: 'Tosin Ajose'
// };
// console.log(newRestaurant);

// Cloning an object and changing a value in it.
// instead of using the assign() function
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Food Affairs"
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/************************************************/
/* Object Destructuring */
// restaurant.orderDelivery({
//   time: '22:30',
//   address: '13 Tapa Street',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: '13 Tapa Street',
//   starterIndex: 1,
// })

// /* Object Destructuring */
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   opningHours: hours,
//   categories: tags
// } = restaurant;
// console.log(restaurantName, hours, tags);

// /* Setting Default Value in Object when destructuring */
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutating Variable
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

//Destructurung Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

//Assigning new variable to it
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

/* Using Destructuring to unpack items in the restaurant object */
// const [first, second] = restaurant.categories;
// const [first, , second] = restaurant.categories;
// console.log(first, second);

//if we want to switch variables
//The old way
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Using Destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//retrieving item from the starterMenu and mainMenu via order() function using destructuring. 
//We also Recieve 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Destructuring a Nested array
// const nested = [2, 4, [5, 6]];
// const [i, j, k] = nested;
// console.log(i, j, k);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//Setting Default values
// const [p, q, r] = [8, 9];
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//*******************************************/
/* Challenge Area 1 */
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// }

// //SOLUTION 1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //SOLUTION 2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //SOLUTION 3
// const allPlayers = [...players1, ...players2]
// console.log(allPlayers);

// //SOLUTION 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(players1Final);

// //SOLUTION 5 
// const { odds: { team1, x: draw, team2 } } = game
// console.log(team1, draw, team2);

// //SOLUTION 6
// const printGoals = function (...players) {
//   // console.log(...players);
//   console.log(`${players.length} goals were scored`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
// printGoals('Davies', 'Muller')
// printGoals('Tayo', 'Tosin', 'Davies', 'Muller', 'Lewandowski', 'Kimmich', 'Mayowa')
// printGoals(...game.scored)


// //SOLUTION 7
// team1 < team2 && console.log('Team 1 is more likely to win')
// team1 > team2 && console.log('Team 2  is more likely to win')
//*******************************************/

//*******************************************/
/* FOROF LOOP */
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredients, ...otherIngredients) {
//     console.log(mainIngredients);
//     console.log(otherIngredients);
//   }
// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item)
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`)
// } //OR
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`)
// }
//*******************************************/


//*******************************************/
/* 1 Enhanced Object Literals */
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// },

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   },

/* 1) ES6 Syntax bringing in our enhance object literals.*/
// openingHours,

/* 2) ES6 Syntax new way of writing methods by removing the function key word and column
The Parenthesis help to identify it a method*/
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time, address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredients, ...otherIngredients) {
//     console.log(mainIngredients);
//     console.log(otherIngredients);
//   }
// };

/*3) We can now compute computer properties name instead of writing them manually or literarilly. Computes means to calculate*/
// const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day-${2 + 4}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// console.log(openingHours);
//*******************************************/

//*******************************************/
/* Optional Chaining if a certain property does not exist then undefined is returned immediatly instead of returning error*/
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   },

/* 1) ES6 Syntax bringing in our enhance object literals.*/
// openingHours,

/* 2) ES6 Syntax new way of writing methods by removing the function key word and column
The Parenthesis help to identify it a method*/
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time, address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredients, ...otherIngredients) {
//     console.log(mainIngredients);
//     console.log(otherIngredients);
//   }
// };
/* Optional Chaining if a certain property does not exist then undefined is returned immediatly instead of returning error*/
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

//WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

//REAL WORLD EXAMPLE
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
// console.log(days);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day}, we open at ${open}`);
// }

//Otionan Chaining on Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Otionan Chaining on Arrays new way
// const users = [{ name: 'Tosin', email: 'tosinajose7@gmail.com' }]
// const users = []
// console.log(users[0]?.name ?? 'User array empty');

//old way
// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');
//*******************************************/

//*******************************************/
/* Looping through Objects */
//Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open ${properties.length} days:`;
// for (const day of properties) {
//   openStr += `${day}, `
// }
// console.log(openStr);

//Property Values
// const values = Object.values(openingHours);
// console.log(values);

//Getting the Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

//[key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }
//*******************************************/

//*******************************************/
/* Challenge Area 2 */
// const scored = ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'];

// const score = '4:0';

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score,
//   scored,
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// }

//SOLUTION 1
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

//SOLUTION 2
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd; {
//   average /= odds.length;
//   console.log(average);
// }

//SOLUTION 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

//*******************************************/

//*******************************************/
/* SET */
// const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pasta', 'Pizza', 'Rice'])
// console.log(ordersSet);
// //Some methods you can use on a set
// console.log(new Set('Tosin'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto')
// ordersSet.clear()
// console.log(ordersSet);

//Looping through a SET
// for (const order of ordersSet) console.log(order);

//Example Real Life Application
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)]
// console.log(staffUnique);

// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

// console.log(new Set('tosinajoseolalekan').size);
//*******************************************/

//*******************************************/
/* MAPS */
const rest = new Map();
rest.set('name', 'Classico Nigerian');
rest.set(1, 'Imam Dauda, Lagos');
console.log(rest.set(2, 'Clinton Drive, Abuja'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open 😍').set(false, 'We are close 😢');

//we use get() method to retrieve data from a map 
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//Some method() you can use with map
// console.log(rest.has('categories'));
// rest.delete(2);
// rest.clear()

//we can use arrays as keys
// const arr = [1, 2];
// rest.set(arr, 'Test')
// rest.set(document.querySelector('h1'), 'Heading')
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

//Another Method of creating a Map
// const question = new Map([['question', 'What is the best programming language in the world?'],
// [1, 'C'],
// [2, 'Java'],
// [3, 'JavaScript'],
// ['correct', 3],
// [true, 'Correct🎉'],
// [false, 'Try Again🤦‍♂️']]);
// console.log(question);

//How to convert an OBJECT to MAP
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'))
// const answer = 3
// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// } //OR use this method
// console.log(question.get(question.get('correct') === answer));
// console.log(answer);

//Converting a MAP to an ARRAY
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

/* CHALLENGE 3 */
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔄 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔄 Substitution'],
//   [64, '🔄 Yellow card'],
//   [69, '🔄 Red card'],
//   [70, '🔄 Substitution'],
//   [72, '🔄 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔄 Yellow card'],
// ]);

// SOLUTION 1
// console.log([...gameEvents.values()]);
// const events = new Set([...gameEvents.values()]);
// const events = [...new Set(gameEvents.values())];
// console.log(events);

//SOLUTION 2
// gameEvents.delete(64);
// console.log(gameEvents);

//SOLUTION 3
// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

//SOLUTION 4
// for (const [key, value] of gameEvents) {
//   if (key <= 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`)
//   } else { console.log(`[SECOND HALF] ${key}: ${value}`) }
// }  //OR USE THE PATTERN BELOW

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }
//*******************************************/

//*******************************************/
/* Working with Strings */
const airline = 'TAP Air Nigeria';
const plane = 'A320';

//loging the index of character(string)
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

//USING .length on a string
console.log(airline.length);
console.log('B737'.length);

//USING indexOf on a string and it is case sensitive
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Nigeria'));
console.log(airline.indexOf('nigeria')); //-1

//USING String Methods
//slice() recieve 2 argument i.e start and end parameter. slice() method begin to extract from the start pameter and stop at the end parameter also exclude the end parameter.length of the extracted is (end - start) i.e 7-4 = 3
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1)
  if (s === 'B' || 'E') console.log('You got the middle seat 😞'); else console.log('You got luck 🤪');
};

checkMiddleSeat('11B');
checkMiddleSeat('23');
checkMiddleSeat('3E');

console.log(new String('Tosin'));
console.log(typeof new String('Tosin'));
console.log(typeof new String('Tosin').slice(1));

//cnverting to lowercase or uppercase
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('Tosin'.toUpperCase());

//Fix capitalization in name
// const passenger = 'oLalEkan'; //Olalekan
// const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
// console.log(passengerCorrect);

//converting it to a function
let fixCapitalization = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect
}

let result = fixCapitalization('mIlKo')
console.log(result);

//using the trimmed method(). We have trimStart(), trimEnd()
//comparing email
// const email = 'tosinajose.io'
// const loginEmail = '    tosinajose.Io  \n'

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim()
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

//converting it to a function
const normalizedEmail = (loginEmail) => {
  const passedEmail = loginEmail.toLowerCase().trim();
  return passedEmail
}
let answer = normalizedEmail('    tosinajose.Io  \n')
console.log(answer);

const checked = (email) => {
  const final = email === answer
  return final
}
console.log(checked('tosinajose.io'));

//using .replace() it takes 2 params. what you want to replace and what you want to replace with
const priceGB = '$288,97'
const priceNGN = priceGB.replace('$', '#').replace('.', ',');
console.log(priceNGN);

//replacing all door with gate
const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
  // console.log(announcement.replace('door', 'gate'));
  // console.log(announcement.replaceAll('door', 'gate'))
  ;
//using the regularexpression to change the door to gate using the gflag
console.log(announcement.replace(/door/g, 'gate'));

//This 3 string methods return Booleans .includes(), .startsWith(), .endsWith()
const planeA = 'Airbus A320neo';
console.log(planeA.includes('A320'));
console.log(planeA.includes('Boeing'));
console.log(planeA.startsWith('Airb'));
//You can use it in making descition
if (planeA.startsWith('Airbus') && planeA.endsWith('neo')) {
  console.log('Part of New Airbus family');
}
/* Practice Exercise */
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are Not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a Pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got somesnacks and a gun for protection')

//Using .split() method and .join() method
console.log('i+am+awesome+super+dude'.split('+'));
console.log('Ajose Tosin'.split(' '));

const [firstName, lastName] = 'Ajose Tosin'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()];
console.log(newName);

//Exercise
const capitalizeName = function (name) {
  const names = name.split(' ');
  // console.log(names);
  const namesUpper = [];

  for (const n of names) {
    //first method
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // console.log(n[0].toUpperCase());
    // console.log(n.slice(1));

    //second method
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));

  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('ajose tosin olalekan');

//String Padding
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Tosin'.padStart(20, '+').padEnd(30, '+'));

//credit card masking is real world application of padding
const maskCreditCard = function (number) {
  const str = number + '';
  console.log(str);
  const first = str.slice(0, 5);
  console.log(first);
  const last = str.slice(-4);
  console.log(last)
  console.log(str.length);
  return last.padStart(str.length, '*')
};

// console.log(maskCreditCard(64637836));
console.log(maskCreditCard(607033986548));
// console.log(maskCreditCard(6394938756354));

//Repeat() method allow you to repeat a string multiple time, the parameter it recieved is the number of time you want that string to be repeated
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

/* Challenge */
//Attach event handler to the button 
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // console.log(text);
  const rows = text.split('\n')

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const outPut = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // console.log(outPut);
    //Adding the emojis we have to destructure the rows in the for loop so as to have access to the index also attach .entries() method to the rows
    console.log(`${outPut.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
  }
})



//*******************************************/


//*******************************************//





