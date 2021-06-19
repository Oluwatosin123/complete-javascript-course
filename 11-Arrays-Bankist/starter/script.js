'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  //Sorting the array. use.slice to create a copy coz if you call sort method directly on the underlying array, it will be mutated
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {

    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};


//Displaying the balance using the reduce method
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}₤`
}


//Displaying the income, widrrawal, balance using the filter, map and reduce method
const calcDisplaySummary = function (acc) {
  //incomes
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}₤`; //€

  //out/withdrawals
  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}₤`

  //interest
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}₤`
}

//COMPUTING THE USERNAME. We convert the username toLowerCase() & it returns a string we then call the .split() method on it and it reurns an arr that we then loop through the arr with .map() method. In each iteration the first index is collected into a new arr that would be return by .map() method you can then call .join(' ') to put them together.
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      // .map(function (name) {
      //   return name[0]
      //converting the above to arrow function (re
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);

const updateUI = function (acc) {
  //Display Movements
  displayMovements(acc.movements);

  //Display Balance
  calcDisplayBalance(acc);

  //Display Summary
  calcDisplaySummary(acc)
}

//Creating  Event Handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form fromsubmitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // clearing the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //update UI
    updateUI(currentAccount)

  }
});

// implementing transfer to other accounts and account debiting.Checking if current user have enough cash to transfer. Check if negative amount is not entered.
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  // console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //implementing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //update UI
    updateUI(currentAccount)
  }
});

/* some() method will be use to impliment the request loan functionality */
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount)
  }

  //clear fields
  inputLoanAmount.value = "";

})

/*implimenting account deletion using the .findIndex(). .findIndex() is cousin of .find(). It returns the index of element found not the element itself. Inorder to delete we need the .splice() method and it gain access to the index of an element through .findIndex() method*/
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === inputLoginPin) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    //.indexOf(23)

    //Delete account
    accounts.splice(index, 1);

    //Hide the UI
    containerApp.style.opacity = 0;
  }
  //clearing the field
  inputCloseUsername.value = inputClosePin.value = " ";
});

// Event handler for sorting
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////////////////////////////////////////////

// .SLICE() METHOD
// let arr = ['a', 'b', 'c', 'd', 'e'];

// .SLICE() METHOD
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
//console.log(arr.slice(1, -2));
//console.log(arr.slice());// create shallow copy
//console.log(([...arr]));//create shallow copy

//.SPLICE METHOD
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

//.REVERSE METHOD
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

//.CONCAT METHOD
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);//USING SPREAD OPERATOR

//.JOIN() METHOD
// console.log(letters.join('-'));
////////////////////////////////////////
/* Looping over arrays with forEach Loop also we see the difference between for FOREACH LOOP AND FOR OF LOOP */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//forof loop
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

//accessing index and element of the array in forof loop
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement} `);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }


// console.log('------FOREACH LOOP-------');
// //forEach Loop
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew  ${Math.abs(movement)}`);
//   }
// });


//accessing index and element of the array in forEach loop
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov} `);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });
///////////////////////////////////////////////////////////
/* forEach Loop with MAP */
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
//   ['NGN', 'Naira']
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// })

/* forEach Loop with SET */
// const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'NGN', 'USD', 'EUR', 'GBP',]);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// })

/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
/* Challenge Area */
//My Solution
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCopy = dogsJulia.slice(1, -2);
//   console.log(dogsJuliaCopy);
//   console.log(dogsJuliaCopy);
//   const allDogs = dogsJuliaCopy.concat(dogsKate)
//   console.log(allDogs);

//   allDogs.forEach(function (dog, i,) {
//     if (dog >= 3) {
//       console.log(`Dog ${i + 1}
//       is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog ${i + 1}
//       is still a puppy and is ${dog} years old`);
//     }
//   })
// }
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])

//Jonas Solution using the splice Method
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCopy = dogsJulia.slice();
//   dogsJuliaCopy.splice(0, 1);
//   dogsJuliaCopy.splice(-2);
//   // console.log(dogsJuliaCopy);
//   const allDogs = dogsJuliaCopy.concat(dogsKate)
//   console.log(allDogs);

//   allDogs.forEach(function (dog, i,) {
//     if (dog >= 3) {
//       console.log(`Dog ${i + 1}
//       is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog ${i + 1}
//       is still a puppy 🐶 and is ${dog} years old`);
//     }
//   })
// }
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])

// const calcAverageHumanAge = function (dogAges) {
//   const calcDogToHuman = dogAges.map((dogs) => {
//     if (dogs <= 2) {
//       return dogs * 2
//     } else if (dogs > 2) {
//       return dogs + 16 * 4
//     }
//   })
// console.log(calcDogToHuman);

//method 2
// const calcDogToHuman = dogAges.map(dogAges => (dogAges <= 2 ? 2 * dogAges : 16 + dogAges * 4))
// console.log(calcDogToHuman);


// const lessEighteen = calcDogToHuman.filter(function (dogs,) {
//   return dogs >= 18
// })
// console.log(calcDogToHuman);
// console.log(lessEighteen);

// finding average 2 3 ()2+3)/2 = 2.5 or (2/2+2/3) = 2.5

// const calcAverage = calcDogToHuman.reduce(
//   (acc, age, i, arr) => acc + age / arr.length, 0)

// const calcAverage = calcDogToHuman.reduce((acc, age, arr) => acc + age, 0) / calcDogToHuman.length

// const calcAverage = calcDogToHuman.reduce(function (acc, age, i, arr) {
//   const average = acc + age
//   return average / arr.length
// }, 0)
//   console.log(calcAverage);
// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//Converting to arrow function and also chaining
// const calcAverageHumanAge = (dogAges) => {
//   const calcDogToHuman = dogAges.map(dogAges => (dogAges <= 2 ? 2 * dogAges : 16 + dogAges * 4))
//     .filter(dogs => dogs >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
//   console.log(calcDogToHuman);
// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


// const deposit = movements.filter(function (mov, i, arr) {
//   return mov > 0
// })
// console.log(deposit);
/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
/* Importants array methods use for Array Transformation */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//using the map method
// const euroToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd
// });
// console.log(movements);
// console.log(movementsUSD);

//using arrow function to make it much cleaner
// const euroToUsd = 1.1;
// const movementsUSD = movements.map(mov => mov * euroToUsd);
// console.log(movements);
// console.log(movementsUSD);

//using forOf loop
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
// console.log(movementsUSDfor);

//extending the map method with tenary
// const movementsDescriptions = movements.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`)
// console.log(movementsDescriptions);

/* using the filter method */
// const deposit = movements.filter(function (mov, i, arr) {
//   return mov > 0
// })
// console.log(deposit);

// const withdrawals = movements.filter(mov => mov < 0)
// console.log(withdrawals);

/* Using forOf loop */
// const depositFor = []
// for (const mov of movements) if (mov > 0) depositFor.push(mov)
// console.log(depositFor);

/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
/* Using the reduce method. Reduce method is a snowball rolling down the hill and getting bigger on its way. .reduce() takes in a callback function which has 4 parameters ie accumulator, current element itself, index and the array */
//accumulator -> snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0)
// console.log(balance);

//using arrow function so as to make it more cleaner
// const balance = movements.reduce((acc, cur, i) => acc + cur, 0)
// console.log(balance);


//using forof loop for the same process but it not clean you need an external variable to hold the accumulator
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

//getting Maximum Value with the reduce Method
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

//Chaining Method also known as the PIPELINE
// const euroToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
// console.log(arr);
//   return mov * euroToUsd
// })
// .map(mov => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
/* Using the finds methods. It use to retrieve one element of an array based on the specified condition. It takes a callback function, loops over an array and returns the first element that match the condition specified. */
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jesica Davis');
// console.log(accounts);

//using forof loop
// for (const [acc, i] of accounts) {
//   accounts.find((acc, i) => acc.owner === 'Jesica Davis')
//   console.log(accounts);
// }


// const acct = [];
// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     acct.push(acc.owner);
//     console.log(acc.owner);
//   }
//   console.log(acc)
// }

// console.log(acct);
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
//The some() method behaves like the .includes() method.
console.log(movements);

//Checking for Equality with .includes()
console.log(movements.includes(-130));

//Checking for CONDITION with .some()
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 5000)
console.log(anyDeposits);

//.every() methods 
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// writing Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
/* .flat() method */
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8]
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]
// console.log(arrDeep.flat());
// console.log(arrDeep.flat(1));
// console.log(arrDeep.flat(2));

/* we can use this to get the overall movement in all the account. Let assume the bank want to do end of the month report of tatal cash in the bank */
// const accountMovements = account.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

//Let use chainning method 
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0)
// console.log(overalBalance);

//.flatMap() method  
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0)
// console.log(overalBalance2);
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
/*ARRAY SORTING */
//SORTING STRINGS
const owners = ['Jonas', 'Zack', 'Adam', 'Martha', 'Ajose', 'Tosin'];
console.log(owners.sort());
console.log(owners);

//Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (Switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

//OR
movements.sort((a, b) => a - b)

console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
//OR
movements.sort((a, b) => b - a);
console.log(movements);
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
/* Programatically filling our array with .fill() method */
/* .fill() method also works like the .slice() methods */
const arr = [1, 2, 3, 4, 5, 6, 7,]
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//populating an array with .fill() method
const x = new Array(7);
// console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
// x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// arr.fill
/////////////////////////////////////////////////////


const arrD = [
  { amount: 3 },
  { amount: 5 },
  { amount: 4 },
  { amount: 6 },
  { amount: 1 },
]

let sum = arrD.reduce((acc, cur) => {
  return { amount: acc.amount + cur.amount }
});
console.log(sum)