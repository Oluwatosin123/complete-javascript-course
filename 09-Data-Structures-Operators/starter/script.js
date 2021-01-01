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

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/* Using Destructuring to unpack items in the restaurant object */
// const [first, second] = restaurant.categories;
// const [first, , second] = restaurant.categories;
// console.log(first, second);

//if we want to switch variables
//The old way
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Using Destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

//retrieving item from the starterMenu and mainMenu via order() function using destructuring. 
//We also Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Destructuring a Nested array
const nested = [2, 4, [5, 6]];
// const [i, j, k] = nested;
// console.log(i, j, k);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Setting Default values
// const [p, q, r] = [8, 9];
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);




