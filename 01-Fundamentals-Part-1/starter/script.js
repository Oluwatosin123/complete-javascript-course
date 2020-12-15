// let js = "amazing";
// console.log(40 + 8 -10);
// console.log('jonas');

// let firstName = ('Bob')
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_maltilda = "JM"
// let $function = 27
// let person= "jonas"
// let PI = 3.45

// let myFirstJob = "Programmer"
// let myCurrentJob = "Teacher"


/*////////////////////////////////// */
/*////////////////////////////////// */

/* DATA TYPES AND VALUE */
// console.log(typeof 'Yes');

// let year;

// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);
// console.log(typeof undefine);

/* Declaring A VARIABLE */
// let age = 30;
// age = 31 //we mutate the age variable

// const birthday = 1991;
// birthday= 1990;//it will throw error


/*////////////////////////////////// */
/*////////////////////////////////// */

/* OPERATORS */
// const now = 2037;
// const ageTosin = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageTosin, ageSarah);

// console.log(ageTosin * 2, ageTosin / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Tosin';
// const lastName = 'Ajose';
// console.log(firstName + " " + LastName);

/* Assignment Operator */
// let x = 10 + 5;
// x += 10;// x =x + 10  =25
// x *= 4;//  x =x * 10  =100
// x -= 5;// x =x - 10  =95
// x /= 10;// x =x / 10  =9.5
// console.log(x);

/*////////////////////////////////// */
/*////////////////////////////////// */

/* INCREAMENTAL OPERATOR */
// X++ //INCREASE BY 1
// X-- // DECREASE BY 1

/*////////////////////////////////// */
/*////////////////////////////////// */

/* COMPARISON OPERATOR */
/* >, <, >=, <= */
// const now = 2037
// const ageTosin = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageTosin > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

/* OPERATOR PRECEDENCE */
// const now = 2037
// const ageTosin = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let  x, y;
// x = y = 25 - 10 - 5; //x = y = 10, x = 10
// console.log(x,y);

// const average = (ageTosin + ageSarah) / 2;
// console.log(ageTosin, ageSarah, average);

/* EXERCISE 1 */
// const marksMass = 78
// const marksHeight = 1.69
// const johnsMass = 92
// const johnsHeight = 1.95

// const BMI1 = mass / height ** 2

// const BMI2 = mass / (height * height)  

// const marksBmi1 =  marksMass / marksHeight ** 2; 
// const johnsBmi1 =  johnsMass / johnsHeight ** 2; 

// const marksBmi2 = marksMass / marksHeight * marksHeight;  

// const johnsBmi2 = johnsMass / johnsHeight * johnsHeight; 

// console.log( marksBmi2, johnsBmi2);

// const markHigherBMI = marksBmi2 > johnsBmi2;

// console.log(markHigherBMI);

/*////////////////////////////////// */
/*////////////////////////////////// */

/* STRINGS */
// const firstName = 'Tosin';
// const job = 'teacher';
// const birthYear = 1989;
// const year = 2037

// const tosin = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(tosin);

// const tosinNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// console.log(tosinNew);

// console.log(` a regular string`);

// // old way of writing multiple line strings
// console.log('String \n\ with multiple \n\ lines');

// //you can use backtik for multiline string
// console.log(`String
// in
// multiple
// lines`);

/*////////////////////////////////// */
/*////////////////////////////////// */

/* MAKING DESCISIONS */
/* CONTROL STRUCTURE */
// const age = 15;
// if (age >= 18) {
//     console.log(`Sarah can start driving lesson 🚗`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait ${yearsLeft} years 😂`);
// };

// const birthYear = 2012

// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21
// }
// console.log(century);

/* EXERCISE 2 */
// const marksMass = 100
// const marksHeight = 2.69
// const johnsMass = 92
// const johnsHeight = 1.95

// const marksMass = 80
// const marksHeight = 1.69
// const johnsMass = 92
// const johnsHeight = 1.95

// const BMI1 = mass / height ** 2
// const BMI2 = mass / (height * height)  

// const marksBmi1 =  marksMass / marksHeight ** 2; 
// const johnsBmi1 =  johnsMass / johnsHeight ** 2; 

// const marksBmi2 = marksMass / marksHeight * marksHeight;  
// const johnsBmi2 = johnsMass / johnsHeight * johnsHeight; 

// if(marksBmi1 > johnsBmi1) {
//     console.log(`Mark's BMI (${marksBmi1})kg is higher than John's BMI (${johnsBmi1})kg !`);
// } else {
//     console.log( `John's BMI (${johnsBmi1})kg is higher than Mark's BMI (${marksBmi1})kg !`);
// }


/*////////////////////////////////// */
/*////////////////////////////////// */

/* JavaScript Type Conversion */
// String to Number
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// // Nummber to String
// console.log(String(23), 23);
// console.log(Number('Tosin'));// this  will produce NaN
// console.log(typeof NaN);

/* JavaScript Type Cohesion */
// console.log('I am ' + 23 + ' years old');
// console.log( '23' + '10' + 3);// this concatinate & coherse the types together
// console.log( '23' - '10' - 3);// the operator will triger type conversion (the types will be converted to Numbers automatically)
// console.log( '23' * '10' * 3);// the operator will triger type conversion (the types will be converted to Numbers automatically)
// console.log( '23' / '10');// the operator will triger type conversion (the types will be converted to Numbers automatically)
// console.log( '23' > '10');//this will return true because the operator will triger type conversion (the types will be converted to Numbers automatically)

// let n = '1' + 1; //11
// n = n - 1; //10
// console.log(n);


/* JavaScript Falsy Values */
//The 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Tosin'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//     console.log("Don't spend it all 😊");//this will run if money is change to real money
// } else {
//     console.log("You should get a job 🤦‍♂️");// this will be true coz 0 is a falsy value
// }

// let height = 12 ;
// if (height) {
//     console.log("YAY! Height is defined");
// } else {
//     console.log('Height is UNDEFINED');//THIS WILL RETURN UNDEFINED
// }

// let height;
// if (height) {
//     console.log("YAY! Height is defined");//THIS WILL BE RETURNED 
// } else {
//     console.log('Height is UNDEFINED');
// }

// let height = 0;
// if (height) {
//     console.log("YAY! Height is defined");
// } else {
//     console.log('Height is UNDEFINED');////THIS WILL BE RETURNED. Here we have a bug coz height is defined but because 0 is a falsy value. We will use our logic to control this.
// }


/*////////////////////////////////// */
/*////////////////////////////////// */

/* EQUALITY OPERATOR */
// const age = '18';
// if (age === 18) console.log('You just became an adult 😁 (this is strict equality)'); // this will result to false

// if (age == 18) console.log('You just became an adult 😁 (this is loose equality)'); // this will result to true double equal will do type cohesion

// const favourite = Number(prompt("what's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite ===  23) {
//     console.log('cool! 23 is an amazing number!');
// } else if (favourite === 7) {
//     console.log('7 is also a cool number');
// } else if (favourite === 9) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('Number is not 23 or 7 or 9');
// }

// // Strictly not equal to !==
// if (favourite !== 23) console.log('Why not 23?');

/*////////////////////////////////// */
/*////////////////////////////////// */

/* BOOLEAN BASIC LOGIC AND, OR, NOT */
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

/* CODING CHALLENGE 3 */
// const avgDolphinsScore = (96 + 108 + 89) / 3;
// const avgKoalasScore = (88 + 91 + 110) / 3;

// const avgDolphinsScore = (97 + 112 + 101) / 3;
// const avgKoalasScore = (109 + 95 + 123) / 3; 

// const avgDolphinsScore = (97 + 112 + 101) / 3;
// const avgKoalasScore = (109 + 95 + 106) / 3;

// console.log( avgDolphinsScore, avgKoalasScore);

// if (avgDolphinsScore > avgKoalasScore) {
// console.log(`Dolphins average score ${avgDolphinsScore} is more than Koalas average score ${avgKoalasScore}. Dolphins wins the game 🏆.`);
// } else if (avgKoalasScore > avgDolphinsScore) {
//     console.log(`Koalas average score ${avgKoalasScore} is more than Dolphins average score ${avgDolphinsScore}. Koalas wins the game 🏆. `);
// } else {
// console.log("Both has a DRAW! 💥");
// }


// BONUS 1
// const avgDolphinsScore = (96 + 108 + 89) / 3;
// const avgKoalasScore = (88 + 91 + 110) / 3;

// const avgDolphinsScore = (97 + 112 + 101) / 3;
// const avgKoalasScore = (109 + 95 + 123) / 3; 

// const avgDolphinsScore = (97 + 112 + 101) / 3;
// const avgKoalasScore = (109 + 95 + 106) / 3;

// console.log(avgDolphinsScore, avgKoalasScore);

// if (avgDolphinsScore > avgKoalasScore && avgDolphinsScore >= 100) {
//     console.log('Dolphins win the trophy 🏆');
// } else if (avgKoalasScore > avgDolphinsScore && avgKoalasScore >= 100) {
//     console.log('Koalas wins the trophy 🏆');
// } else if (avgDolphinsScore === avgKoalasScore) {
//     console.log('Both wins the trophy 🏆');
// }


// BONUS 2
// const avgDolphinsScore = (97 + 112 + 81) / 3;
// const avgKoalasScore = (109 + 95 + 86) / 3;

// const avgDolphinsScore = (97 + 112 + 80) / 3;
// const avgKoalasScore = (109 + 95 + 50) / 3;
// console.log(avgDolphinsScore, avgKoalasScore);

// if (avgDolphinsScore > avgKoalasScore && avgDolphinsScore >= 100) {
//     console.log('Dolphins win the trophy 🏆');
// } else if (avgKoalasScore > avgDolphinsScore && avgKoalasScore >= 100) {
//     console.log('Koalas wins the trophy 🏆');
// } else if (avgDolphinsScore === avgKoalasScore && avgDolphinsScore >= 100 && avgKoalasScore >= 100) {
//     console.log('Both wins the trophy 🏆');
// } else {
//     console.log('No one wins the trophy 🤦‍♀️');
// }


/*////////////////////////////////// */
/*////////////////////////////////// */

/* SWITCH CASE */
// const day = 'monday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend 🤣😊');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

/* Converting the above switch statement to if else statement */

// const day = 'sunday';

// if (day === monday) {
//     console.log('Plan course structure and Go to coding meetup');
// } else if (day === tuesday) {
//     console.log('Prepare theory videos');
// } else if (day === wednesday || day === thursday) {
//     console.log('write code examples');
// } else if (day === friday) {
//     console.log('Record videos');
// } else if (day === saturday || day === sunday) {
//     console.log('Enjoy the weekend 🤣😊');
// } else {
//     console.log('Not a valid day!');
// }


/*////////////////////////////////// */
/*////////////////////////////////// */

/* EXPRESSION */
//Epression produces values
// Eg.
// 3 + 4
// 1991
// true && false && !false

/* STATEMENT */
//STATEMENT on its own can not produce a value
//Eg.
// if (23 > 10) {
// const str = '23 is bigger';
// }

/* Expression within a statment */
// const me = 'Tosin';
// console.log(`I'm ${2037 - 1991} years old ${me}`);

/*////////////////////////////////// */
/*////////////////////////////////// */
/* The Conditional (Ternary) Operator */
// const age = 18;
//  age >= 18 ? console.log(`I like to drink wine 🍷`) :  console.log(`I like to drink water 💧`);

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine 🍷'
// } else { drink2 = 'water 💧' }
// console.log(drink2);

// we can now use statement within the template literals in the TERNARY OPERATOR and it would produce a value
// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

/* CODING CHALLENGE 4 */
//Test Data
// bill are 275, 40 and 430
//tip percentage are 15% or 20%
const tipCalc1 = 15 / 100
const tipCalc2 = 20 / 100

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill is ${bill}, the tip was ${tip} and total value is ${bill + tip}`);