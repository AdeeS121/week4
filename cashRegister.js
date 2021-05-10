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
      currentTransactions();
    } else if (selection == 3) {
      rl.close();
    } else {
      console.log("Invalid entry");
      displayTransOptions();
    }
  });
}

let tester = []

function displayChoicePayOptions() {

  for (let [key, value] of choicePayOptions) 
  console.log(key +  value);

  rl.question("\nSelect an item: ", function (choice) {
let itemPrices = [...choicePayOptions.values()]
 for (let i = 0; i < itemPrices; i++) {
    itemPrices++
 }

    if (choice == 1) {
    //  itemPrice.push('test')
    tester.push(itemPrices[0])
    //  console.log('Will this work', tester)
      console.log("~~ You added a Hot Dog ~~\n");
      displayChoicePayOptions();
    } else if (choice == 2) {
      tester.push(itemPrices[1])
      console.log("~~ You added2 a Soda ~~\n");
      displayChoicePayOptions();
    } else if (choice == 3) {
      tester.push(itemPrices[2])
      console.log("~~ You added Chips ~~\n");
      displayChoicePayOptions();
    } else {
      // console.log("Invalid entry")
    
     displayPaymentProcess();
     
    }
      console.log(tester)

  });
 
}

function displayPaymentProcess(tester) {
 
     console.log(tester);

  rl.close();
}

startProgram();


// rl.on("close", function () {
//   console.log("\nBYE BYE !!!");
//   process.exit(0);
// });
