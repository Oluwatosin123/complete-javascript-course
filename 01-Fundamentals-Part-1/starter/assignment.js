// /* LECTURE: Values and Variables */
// const country = 'Nigeria';
// const continent = 'Africa';
// let population = 200000000;
// console.log(country, continent, population);

// /* ///////////////////////// */

// /* LECTURE: Data Types */
// let isIsland = 'Nigeria'
// // let language;
// console.log(typeof 'isIsland', typeof 'population', typeof 'country', typeof 'language');

// /* ///////////////////////// */

// /* LECTURE: let, const and var */
// const language = 'Yoruba';

// /* ///////////////////////// */


// /* LECTURE: Basic Operators */
// let half = population / 2;
// console.log(half);

// let incHalf = half + 1;
// console.log(incHalf);

// let finland = 6000000;
// let countryDiff = population - finland
// console.log(`Nigeria is more than finland by ${countryDiff} million`);

// avgCountry = 33000000;
// avgPopulation = population - avgCountry;
// console.log(avgCountry < avgPopulation);

// const description = `${country} is in ${continent} and its ${population} million people speak ${language}`
// console.log(description);
// /* ///////////////////////// */

// /* LECTURE: Strings and Template Literals */
// const deescription = `${country} is in ${continent} and its ${population} million people speak ${language}`
// console.log(deescription);

/* ///////////////////////// */

// /* LECTURE: Taking Decisions: if / else Statements */
// if (avgPopulation > avgCountry) {
//     console.log(`${country} ${avgPopulation} is above average`);
// } else {
//     console.log(`${country} ${avgPopulation} is below average`);
// }
 /* ///////////////////////// */


/* LECTURE: Type Conversion and Coercion */
//  let result = '9' - '5' // 4
//  console.log(result);
//  let answer = '19' - '13' + '17' //617
//  console.log(answer);
//  let answer2 = '19' - '13' + 17 //617
//  console.log(answer2); // 23
//  let result2 = '123' < 57; // 
//  console.log(result2); // false
//  let result3 = 5 + 6 + '4' + 9 - 4 -2; //1143
//  console.log(result3); // false

/* ///////////////////////// */

/* LECTURE: Equality Operators: == vs. === */

// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'))
// if (numNeighbours === 1) {
//     console.log('only 1 border');
// } else if (numNeighbours > 1) {
//     console.log('numNeighbours is greater than 1');
// } else {
//     console.log('No borders');
// }

/* ///////////////////////// */

/* LECTURE: Logical Operators */
// let isLanguage = 'English';
// let isPpulation = 50000000; 
// let isIsland = false

// let isLanguage = 'English';
// let isPpulation = 200000000; 
// let isIsland = false

// let isLanguage = 'English';
// let isPpulation = 24000000; 
// let isIsland = false

// if (isLanguage === isLanguage &&  ) {

// }
/* ///////////////////////// */

const tosin = {
    name: 'tosin',
    age: 45,
    height: 456,
    mass: function () {
      let result = this.height - this.age;
      return result;
    }
}
console.table(tosin)