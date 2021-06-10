// const { R_OK } = require("constants");
const { get } = require("prompt");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ********** Global Variables **********//
let total = [];
let payChoice = [];
let currentTransaction = [];
let totalTransactions = {};

const transOptions = new Map();
const choicePayOptions = new Map();
const paymentMethod = new Map();

// ********** Functions **********//

function startProgram() {
  mapObjectsSetup();
  greetUser();
  displayTransOptions();
}

function mapObjectsSetup() {
  transOptions.set("[1]", "Start transaction");
  transOptions.set("[2]", "Current running transaction");
  transOptions.set("[3]", "Exit");

  choicePayOptions.set("[1] - Hot Dog", "4.50");
  choicePayOptions.set("[2] - Soda", "1.50");
  choicePayOptions.set("[3] - Chips", "1.00");
  choicePayOptions.set("[4] - Start Payment Process", null);

  paymentMethod.set("[1]", "Cash");
  paymentMethod.set("[2]", "Credit");
}

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
      currentRunningTransactions();
    } else if (selection == 3) {
      rl.close();
    } else {
      console.log("Invalid entry");
      displayTransOptions();
    }
  });
}

function displayChoicePayOptions() {
  // Reminder:  Remove the dollar sign from Start Payment Process
  // for (let [key, value] of choicePayOptions) console.log(`${key} - $${value}`);
  const foodItem = [...choicePayOptions.keys()];
  const priceOfItem = [...choicePayOptions.values()];

  console.log(
    `${foodItem[0]} - $${priceOfItem[0]} \n${foodItem[1]} - $${priceOfItem[1]} \n${foodItem[2]} - $${priceOfItem[2]} \n${foodItem[3]}`
  );

  rl.question("\nSelect an item: ", function (choice) {
    food1 = foodItem[0].slice(6);
    food2 = foodItem[1].slice(6);
    food3 = foodItem[2].slice(6);

    // Change strings to integer for adding later
    priceFood1 = parseFloat(priceOfItem[0]);
    priceFood2 = parseFloat(priceOfItem[1]);
    priceFood3 = parseFloat(priceOfItem[2]);

    if (choice == 1) {
      currentTransaction.push(priceFood1);
      console.log(`~~ You added a ${food1} ~~\n`);
      displayChoicePayOptions();
    } else if (choice == 2) {
      currentTransaction.push(priceFood2);
      console.log(`~~ You added a ${food2} ~~\n`);
      displayChoicePayOptions();
    } else if (choice == 3) {
      currentTransaction.push(priceFood3);
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
  // reduce returns one value (accumulator, value)
  let foodTotal = currentTransaction.reduce(function (curr, prev) {
    return curr + prev;
  });

  currentTransaction = [];

  console.log(`\nYour Total is: $${foodTotal.toFixed(2)}`);

  for (let [key, value] of paymentMethod) console.log(key + value);
  const payOption = [...paymentMethod.values()];
  let option1 = payOption[0];
  let option2 = payOption[1];

  rl.question("How would you like to pay: ", function (option) {
    // Add zeros on the end, removed after parseFloat
    if (option == 1) {
      total.push(foodTotal.toFixed(2));
      payChoice.push(option1);
      console.log(
        `~~ You have selected ${option1.toLowerCase()} ~~ \n~~ Thank you for choosing Wally\'s! ~~`
      );
    } else if (option == 2) {
      total.push(foodTotal.toFixed(2));
      payChoice.push(option2);
      console.log(
        `~~ You have selected ${option2.toLowerCase()} ~~ \n~~ Thank you for choosing Wally\'s! ~~`
      );
    } else {
      console.log("Invalid entry");
    }
    greetUser();
    displayTransOptions();
  });
}

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
      currentRunningTransactions();
    } else if (selection == 3) {
      finalTransactionsAndTotalSales();
    } else {
      console.log("Invalid entry");
      displayTransOptions();
    }
  });
}

function currentRunningTransactions() {
  console.log(`~~Here are the current transactions so far~~`);

  let totalNumbers = total.length;
  for (let i = 0; i < totalNumbers; i++) {
    totalTransactions[i + 1] = `$${total[i]} - ${payChoice[i]}`;
  }
  if (totalNumbers == 0) {
    // console.log('{$0.00}')  
    console.log('Transactions: 0  \nTotal Sales: $0.00')
  } else {
    console.log(totalTransactions);
  }

  greetUser();
  displayTransOptions();
}

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
      currentRunningTransactions();
    } else if (selection == 3) {
      finalTransactionsAndTotalSales();
    } else {
      console.log("Invalid entry");
      displayTransOptions();
    }
  });
}

function finalTransactionsAndTotalSales() {
  let totalNumberOfTransactions = total.length;
  let sum = 0;
  for (i = 0; i < total.length; i++) {
    sum += parseFloat(total[i]);
  }
  totalSales = sum.toFixed(2);

  console.log(
    `\n~~ WOO HOO! Day is over ~~ \nGreat Job Today: \nTransactions: ${totalNumberOfTransactions}  \nTotal Sales: $${totalSales}`
  );

  rl.close();
}

startProgram();

rl.on("close", function () {
  console.log("\n\n~~ GOODBYE ~~\n");
  process.exit(0);
});
