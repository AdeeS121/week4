const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// *****************test zone *************************//

function startProgram() {
  greetUser();
  displayTransOptions();
  // currentRunningTransactions();

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

const paymentMethod = new Map();
paymentMethod.set("[1]", "Cash");
paymentMethod.set("[2]", "Credit");

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
      console.log('so far so good')
      currentRunningTransactions()
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
  // Reminder:  Remove the dollar sign from Start Payment Process
  for (let [key, value] of choicePayOptions)
    console.log(key + " " + "- " + "$" + value);
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
      startPaymentProcess();
    } else {
      console.log("Invalid entry");
      displayChoicePayOptions();
    }
  });
}

function startPaymentProcess() {
  count = 0;
  for (var i = 0; i < totalTransaction.length; i++) {
    count += totalTransaction[i];
  }
 
  // Add zeros on the end, removed after parseFloat
  console.log(`\nYour Total is: $${count.toFixed(2)}`);

for (let [key, value] of paymentMethod)
    console.log(key + value);
    const payOption = [...paymentMethod.values()];
    cash = payOption[0].toLowerCase(1);
    credit = payOption[1].toLowerCase(1);

  rl.question("How would you like to pay: ", function (choice) {
    // for (let[key, value] of paymentMethod) console.log(key + value)

    if (choice == 1) {
      console.log( `~~ You have selected ${cash} ~~ \n~~ Thank you for choosing Wally\'s! ~~`);
      greetUser()
    } else if (choice == 2) {
      console.log(
        `~~ You have selected ${credit} ~~ \n~~ Thank you for choosing Wally\'s! ~~`);
        greetUser()
        displayTransOptions()
        // currentRunningTransactions()
    }



    function greetUser() {
      console.log("\n~~~ Welcome to Wally's HotDogs ~~~\n");
      displayTransOptions()
      // displayChoicePayOptions()
    }


    function currentRunningTransactions() {

console.log('it is working')


    }


    rl.close();
  });
}


startProgram();



// rl.on("close", function () {
//   console.log("\nBYE BYE !!!");
//   process.exit(0);
// });
