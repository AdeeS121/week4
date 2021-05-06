const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startProgram() {
  greetUser();
  displayTransOptions();
  // displayChoicePayOptions();
}

const transOptions = new Map();
transOptions.set("[1] - ", "Start transaction");
transOptions.set("[2] - ", "Current running transaction");
transOptions.set("[3] - ", "Exit");

const choicePayOptions = new Map();
choicePayOptions.set('[1] - Hot Dog - ', '$4.50');
choicePayOptions.set('[2] - Soda - ', '$1.50');
choicePayOptions.set('[3] - Chips - ', '$1.00');
choicePayOptions.set('[4] - ', 'Start Payment Process');

function greetUser() {
  console.log("Welcome to Wally's HotDogs");
}

function displayTransOptions() {
  for (let [key, value] of transOptions) 
  console.log(key + value);
  rl.question('\nMake selection: ', function (selection) {

    if (selection == 1) {
   displayChoicePayOptions()
    }
    else if (selection == 2) {
     currentTransactions()
    } else if (selection == 3) {
      rl.close();
    } else {
     console.log('Invalid entry');
    }
   
  })
}

 //   rl.on('line', function (item) {
    //       if (selection == 5) {
    //         rl.close()
    //       } else if (item == 1) {
    //       console.log(`\nSelect an Item: ${item}`)
    //          console.log(`~~ You added a Hot Dog ~~ \n\n${item1} \n${item2} \n${item3} \n${item4}`);
    //          console.log('Select an Item: ')

    //       } else if (item == 2){
    //         console.log(`\nSelect an Item: ${item}`);
    //         console.log(`~~ You added a Soda ~~ \n\n${item1} \n${item2} \n${item3} \n${item4}`);
    //           console.log('Select an Item: ');
    //       } else if (item ==3) {
    //         console.log(`\nSelect an Item: ${item}`)
    //         console.log(`~~ You added Chips ~~ \n\n${item1} \n${item2} \n${item3} \n${item4}`);
    //         console.log('Select an Item: ');

    //       } else {
    //        rl.close()
    //       }
    // })

function displayChoicePayOptions() {
  for (let [key, value] of choicePayOptions) 
  console.log(key + value);

}

function currentTransactions() {
    console.log('currentTransactions')
}




// function displayChoicePayOptions() {

// for (let [key, value] of choicePayOptions) 
//   console.log(key + value);

//  rl.question("Selection an item: ", function (choice) {

//    if (choice == 1) {



//  {
      
//     }
//      console.log('Another successful try')
//    }
//   });
// }

// // greetUser();
// // displayTransOptions();
// displayChoicePayOptions();

startProgram();

// startProgram()
// add to the array
//   choicePayOptions.set('Cookies', 50)
//   console.log(choicePayOptions)

//  // get value of the key(Hot Dog)
//   console.log(choicePayOptions.get('Hot Dog'))

//   // can delete an element by its key
//   choicePayOptions.delete('Cookies')
//   console.log(choicePayOptions)

// const transOptions = new Map();
// transOptions.set(1, "[1] - Start transaction");
// transOptions.set(2, "[2] - Current running transaction");
// transOptions.set(3, "[3] - Exit");

// function startProgram() {
//   const transOptions = new Map();
//   transOptions.set(1, "[1] - Start transaction");
//   transOptions.set(2, "[2] - Current running transaction");
//   transOptions.set(3, "[3] - Exit");
//   // let transaction1 = transOptions.get(1);
//   // let transaction2 = transOptions.get(2);
//   // let transaction3 = transOptions.get(3);

//   const choicePayOptions = new Map();
//   choicePayOptions.set(1, "[1] - Hot Dog - $4.50");
//   choicePayOptions.set(2, "[2] - Soda - $1.50");
//   choicePayOptions.set(3, "[3] - Chips - $1.00");
//   choicePayOptions.set(4, "[4] - Start Payment Process");
//   // let item1 = choicePayOptions.get(1);
//   // let item2 = choicePayOptions.get(2);
//   // let item3 = choicePayOptions.get(3);
//   // let item4 = choicePayOptions.get(4);

//   // greetUser();
//   // displayTransOptions(transOptions)
//   // displayOptions(choicePayOptions)
//   // displayUserChoice()
// }
//

// function greetUser() {
// console.log('Welcome to Wally\'s HotDogs ');
// }

// function displayTransOptions(transOptions) {
//   for (list in transOptions)
// console.log('${list')

// }

// function displayOptions(choicePayOptions) {
//   for (choice in choicePayOptions)
// console.log(choice)
// }

// function displayUserChoice() {

// }

// function displayChoice

// startProgram()

// function greetUser(transaction1, transaction2, transaction3) {
//   console.log(`Welcome to Wally's HotDogs \n\n${transaction1} \n${transaction2} \n${transaction3}`);
// }

// function selectItem(item1, item2, item3, item4) {
//   rl.question('\nMake selection: ', function (selection) {

//     if (selection == 1) {
//       console.log(`\n~~ Starting New Transaction ~~ \n\n${item1} \n${item2} \n${item3} \n${item4}`);
//       console.log(`\nSelect an Item: `);
//     }
//     else if (selection == 2) {
//       console.log(getSum(item1, item2, item3))
//     } else if (selection == 3) {
//       rl.close();
//     } else {
//      console.log('Invalid entry');
//     }

//       rl.on('line', function (item) {
//           if (selection == 5) {
//             rl.close()
//           } else if (item == 1) {
//           console.log(`\nSelect an Item: ${item}`)
//              console.log(`~~ You added a Hot Dog ~~ \n\n${item1} \n${item2} \n${item3} \n${item4}`);
//              console.log('Select an Item: ')

//           } else if (item == 2){
//             console.log(`\nSelect an Item: ${item}`);
//             console.log(`~~ You added a Soda ~~ \n\n${item1} \n${item2} \n${item3} \n${item4}`);
//               console.log('Select an Item: ');
//           } else if (item ==3) {
//             console.log(`\nSelect an Item: ${item}`)
//             console.log(`~~ You added Chips ~~ \n\n${item1} \n${item2} \n${item3} \n${item4}`);
//             console.log('Select an Item: ');

//           } else {
//            rl.close()
//           }
//     })
//   })
// }

// rl.on("close", function () {
//   console.log("\nBYE BYE !!!");
//   process.exit(0);
// });
