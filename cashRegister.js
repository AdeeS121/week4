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
      currentRunningTransactions();
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

total = 0;

function startPaymentProcess() {
 

for (var i = 0; i < totalTransaction.length; i++) {
    total += totalTransaction[i];
  }

  
// totalTransaction = map.keys()
// console.log(totalTransaction)
// // let testTotal = [
// //   {
// //     food: food1,
// //     total: total,
// //     isCredit: true
// //   }

// // ]




// // console.log('foodItem', food1)
// // console.log('total', total)
// // console.log('testTotal', testTotal[1])

// //   console.log('totalTrans', totalTransaction)
//   // console.log('total', total)

// you probably want to apply that array that’s created from all the transactions,
// add it up and apply it to a map/object that just increments the keys by 1.






  // Add zeros on the end, removed after parseFloat
  total = total.toFixed(2);

  console.log(`\nYour Total is: $${total}`);

  for (let [key, value] of paymentMethod) console.log(key + value);

  const payOption = [...paymentMethod.values()];
  let option1 = payOption[0];
  let option2 = payOption[1];

  rl.question("How would you like to pay: ", function (option) {
    // for (let[key, value] of paymentMethod) console.log(key + value)

    if (option == 1) {
      console.log(
        `~~ You have selected ${option1.toLowerCase()} ~~ \n~~ Thank you for choosing Wally\'s! ~~`
      );
     
      greetUser();
      displayTransOptions();
      // currentRunningTransactions()
    } else if (option == 2) {
      console.log(
        `~~ You have selected ${option2.toLowerCase()} ~~ \n~~ Thank you for choosing Wally\'s! ~~`
      );
      greetUser();
      displayTransOptions();
      // currentRunningTransactions()
    }
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
      rl.close();
    } else {
      console.log("Invalid entry");
      displayTransOptions();
      1;
    }
  });
}

function currentRunningTransactions() {

  
  console.log(
    `~~Here are the current transactions so far~~\n{\n\n1:['$${total}'`);
// bring in string 
  console.log();

  rl.close();
}



startProgram();



// rl.on("close", function () {
//   console.log("\nBYE BYE !!!");
//   process.exit(0);
// });
