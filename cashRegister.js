const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// *****************test zone *************************//

function startProgram() {
  greetUser();
  displayTransOptions();
}

const transOptions = new Map();
transOptions.set("[1]", "Start transaction");
transOptions.set("[2]", "Current running transaction");
transOptions.set("[3]", "Exit");

const choicePayOptions = new Map();
choicePayOptions.set("[1] - Hot Dog", "4.50");
choicePayOptions.set("[2] - Soda", "1.50");
choicePayOptions.set("[3] - Chips", "1.00");
choicePayOptions.set("[4]", "Start Payment Process");

function greetUser() {
  console.log("\n~~~ Welcome to Wally's HotDogs ~~~\n");
}

function displayTransOptions() {
  for (let [key, value] of transOptions) console.log(key + " " + "- " + value);

  rl.question("\nMake selection: ", function (selection) {
    if (selection == 1) {
      console.log("\n~~ Starting New Transaction ~~ \n");
      displayChoicePayOptions();
    } else if (selection == 2) {
    } else if (selection == 3) {
      rl.close();
    } else {
      console.log("Invalid entry");
      displayTransOptions();
      1;
    }
  });
}

let totalTransaction = [];

function displayChoicePayOptions() {
  for (let [key, value] of choicePayOptions) console.log(key + " " + "- " + "$" + value);
const foodItem = [...choicePayOptions.keys()];
  const priceOfItem = [...choicePayOptions.values()];

  rl.question("\nSelect an item: ", function (choice) {

    food1 = foodItem[0].slice(6);
    food2 = foodItem[1].slice(6);
    food3 = foodItem[2].slice(6);

  // Change strings to integer for adding later
    priceFood1 = parseFloat(priceOfItem[0]);
    priceFood2 = parseFloat(priceOfItem[1]);
    priceFood3 = parseFloat(priceOfItem[2]);
    
    console.log(priceFood1)

    if (choice == 1) {
      totalTransaction.push(priceFood1);
      console.log(`~~ You added a ${food1} ~~\n`);
      displayChoicePayOptions();
    } else if (choice == 2) {
      totalTransaction.push(priceFood2);
      console.log(`~~ You added a ${food2} ~~\n`);
      displayChoicePayOptions();
    } else if (choice == 3) {
      totalTransaction.push(priceFood3);
      console.log(`~~ You added ${food3} ~~\n`);
      displayChoicePayOptions();
    } else if (choice == 4) {
      console.log("~~ STARTING PAYMENT ~~");
      displayPaymentProcess();
    } else {
      console.log("Invalid entry");
      displayChoicePayOptions();
    }
  });
}

function displayPaymentProcess() {

  count = 0
    for(var i= 0; i < totalTransaction.length; i++) {
       count += totalTransaction[i];
    }
  console.log(totalTransaction)
  console.log(count.toFixed(2))


  rl.close();
}

// let num1 = "$45";
// let num2 = "$70";

// function getValue(num) {
//   return parseInt(num.split('$')[1]);
// }

// let sum =  getValue(num1) + getValue(num2);

// console.log("$" + sum);

// "$" + (parseInt(allInputs[22].value.substring(1)) + parseInt(allInputs[22].value.substring(1)))

startProgram();

// *****************test zone *************************//

// function startProgram() {
//   greetUser();
//   displayTransOptions();
// }

// const transOptions = new Map();
// transOptions.set("[1] -", " Start transaction");
// transOptions.set("[2] -", " Current running transaction");
// transOptions.set("[3] -", " Exit");

// const choicePayOptions = new Map();
// choicePayOptions.set("[1] - Hot Dog -", " $4.50");
// choicePayOptions.set("[2] - Soda -", " $1.50");
// choicePayOptions.set("[3] - Chips -", " $1.00");
// choicePayOptions.set("[4] -", " Start Payment Process");

// console.log(choicePayOptions)

// function greetUser() {
//   console.log("\n~~~ Welcome to Wally's HotDogs ~~~\n");
// }

// function displayTransOptions() {
//   for (let [key, value] of transOptions) console.log(" " + key +  value);
//   rl.question("\nMake selection: ", function (selection) {
//     if (selection == 1) {
//       console.log("\n~~ Starting New Transaction ~~\n");
//       displayChoicePayOptions();
//     } else if (selection == 2) {
//     } else if (selection == 3) {
//       rl.close();
//     } else {
//       console.log("Invalid entry");
//       displayTransOptions();
//     }
//   });
// }

// let totalTransaction = [];

// function displayChoicePayOptions() {

//   for (let [key, value] of choicePayOptions)
//   console.log(key +  value);

//   rl.question("\nSelect an item: ", function (choice) {
// let productPrice = [...choicePayOptions.values()];
// let item1 = productPrice[0];
// let item2 = productPrice[1];
// let item3 = productPrice[2];
// //  for (let i = 0; i < productPrice; i++) {
// //     productPrice++
// //  }
//     if (choice == 1) {
//     totalTransaction.push(item1);
//       console.log("~~ You added a Hot Dog ~~\n");
//       displayChoicePayOptions();
//     } else if (choice == 2) {
//       totalTransaction.push(item2);
//       console.log("~~ You added a Soda ~~\n");
//       displayChoicePayOptions();
//     } else if (choice == 3) {
//       totalTransaction.push(item3);
//       console.log("~~ You added Chips ~~\n");
//       displayChoicePayOptions();
//     } else if(choice == 4) {
//       console.log('~~ STARTING PAYMENT ~~');
//      displayPaymentProcess();
//     } else {
//       console.log('Invalid entry')
//       displayChoicePayOptions();
//     }
//   });
// }

// function displayPaymentProcess() {

//   // finalPrice = parseInt(totalTransaction)

//   console.log(totalTransaction)

//   var count = 0;

//   for(var i=0; i < totalTransaction.length; i++) {
//      count += totalTransaction[i];
//   }

// console.log(count)

//   rl.close();

// }

// // let num1 = "$45";
// // let num2 = "$70";

// // function getValue(num) {
// //   return parseInt(num.split('$')[1]);
// // }

// // let sum =  getValue(num1) + getValue(num2);

// // console.log("$" + sum);

// // "$" + (parseInt(allInputs[22].value.substring(1)) + parseInt(allInputs[22].value.substring(1)))

// startProgram();

// rl.on("close", function () {
//   console.log("\nBYE BYE !!!");
//   process.exit(0);
// });
