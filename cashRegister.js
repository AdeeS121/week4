const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startProgram() {
  greetUser();
  displayTransOptions();
}

const transOptions = new Map();
transOptions.set("[1] -", " Start transaction");
transOptions.set("[2] -", " Current running transaction");
transOptions.set("[3] -", " Exit");

const choicePayOptions = new Map();
choicePayOptions.set("[1] - Hot Dog -", " $4.50");
choicePayOptions.set("[2] - Soda -", " $1.50");
choicePayOptions.set("[3] - Chips -", " $1.00");
choicePayOptions.set("[4] -", " Start Payment Process");

function greetUser() {
  console.log("\n~~~ Welcome to Wally's HotDogs ~~~\n");
}

function displayTransOptions() {
  for (let [key, value] of transOptions) console.log(" " + key +  value);
  rl.question("\nMake selection: ", function (selection) {
    if (selection == 1) {
      console.log("\n~~ Starting New Transaction ~~\n");
      displayChoicePayOptions();
    } else if (selection == 2) {
    } else if (selection == 3) {
      rl.close();
    } else {
      console.log("Invalid entry");
      displayTransOptions();
    }
  });
}

let totalTransaction = [];

function displayChoicePayOptions() {

  for (let [key, value] of choicePayOptions)
  console.log(key +  value);

  rl.question("\nSelect an item: ", function (choice) {
let productPrice = [...choicePayOptions.values()];
let item1 = productPrice[0];
let item2 = productPrice[1];
let item3 = productPrice[2]
// // totalTransaction = (item1, item2, item3)
// console.log('inside tt', totalTransaction)

 for (let i = 0; i < productPrice; i++) {
    productPrice++
 }
    if (choice == 1) {
    totalTransaction.push(item1);
      console.log("~~ You added a Hot Dog ~~\n");
      displayChoicePayOptions();
      // console.log(totalTransaction)
    } else if (choice == 2) {
      totalTransaction.push(item2);
      console.log("~~ You added a Soda ~~\n");
      displayChoicePayOptions();
    } else if (choice == 3) {
      totalTransaction.push(item3);
      console.log("~~ You added Chips ~~\n");
      displayChoicePayOptions();
    } else if(choice == 4) {
      console.log('~~ STARTING PAYMENT ~~');
    //  console.log(totalTransaction);
     displayPaymentProcess();
    } else {
      console.log('Invalid entry')
      displayChoicePayOptions();
    }
  });
}

function displayPaymentProcess() {

console.log('payProcess')

  rl.close();

}
// displayPaymentProcess()
startProgram();


// rl.on("close", function () {
//   console.log("\nBYE BYE !!!");
//   process.exit(0);
// });
