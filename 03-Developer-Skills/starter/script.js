// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
/* Using Google, StackOverflow and MDN */

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/* 1) Understanding the problem */
// - What is temp amplitude?
//   Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

/* 2) Breaking up into sub-problems */
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temperatures.length; i++) {
//         const curTemp = temps[i];

//         if (typeof curTemp !== 'number') continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min
// }

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice?  NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
// const temps = t1.concat(t2);
// console.log(temps);

//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temperatures.length; i++) {
//         const curTemp = temps[i];

//         if (typeof curTemp !== 'number') continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min
// }

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

/* ///////////////////////////////////// */
/* ///////////////////////////////////// */


/* (1) FINDING AND IDENTIFYING BUG (DEBUGGING) Below are the thought process of how to debug */
// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',

//         // (C) FIXING THE BUG
//         // value: Number(prompt('Degrees celsius:')),
//         value: 10// we manually enter 10 so we can use it in the 2nd debugging tutorial
//     }

//     // (B) FINDING THE BUG
//     console.log(measurement);
//     console.table(measurement);//will return a nicely formated table


//     // console.log(measurement.value);
//     // console.warn(measurement.value)
//     // console.error(measurement.value)


//     const kelvin = measurement.value + 273
//     return kelvin;
// };

// // (A) IDENTIFY THE BUG
// console.log(measureKelvin());


// /* (2) FINDING AND IDENTIFYING BUG (DEBUGGING) USING GOOGLE  CHROME DEBUGGER CONSOLE
// Below are the thought process of how to debug
//  */

// const calcTempAmplitudeBug = function (t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps);

//     //we introduce BUG in here by initializing max = 0, min = 0
//     let max = 0;
//     let min = 0;

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];

//         if (typeof curTemp !== 'number') continue;
//         // uncomment below to use chrome console debugger
//         //  debugger // USE THIS TO AUTOMATICALLY OPEN THE GOOGLE  CHROME DEBUGGER
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min
// }

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // (A) IDENTIFY THE BUG
// console.log(amplitudeBug);


/* CODING CHALLENGE #1
QUESTION: Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
*/

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// 1. Transform array into string
// 2. Transform each element into string with °C
// 3. Strings need to contain day (index + 1)
// 4. Add ... between elements and start and end of strings 
// 5. Log out the string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForcast = (arr) => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        // str = str + `${arr[i]}°C in ${i + 1} days`;
        str += `${arr[i]}°C🌧 in ${i + 1} days... `;
    }
    console.log('...' + str);
}

printForcast(data2)

/* ///////////////////////////////////// */
/* ///////////////////////////////////// */


