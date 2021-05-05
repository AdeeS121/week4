const { cpuUsage, removeAllListeners } = require("process");
const readline = require("readline");
const { callbackify } = require("util");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startProgram() {
  const transOptions = new Map();
  transOptions.set(1, "[1] - Start transaction");

  transOptions.set(2, "[2] - Current running transaction");
  transOptions.set(3, "[3] - Exit");
  let transaction1 = transOptions.get(1);
  let transaction2 = transOptions.get(2);
  let transaction3 = transOptions.get(3);

  const choicePayOptions = new Map();
  choicePayOptions.set(1, "[1] - Hot Dog - $4.50");
  choicePayOptions.set(2, "[2] - Soda - $1.50");
  choicePayOptions.set(3, "[3] - Chips - $1.00");
  choicePayOptions.set(4, "[4] - Start Payment Process");
  let item1 = choicePayOptions.get(1);
  let item2 = choicePayOptions.get(2);
  let item3 = choicePayOptions.get(3);
  let item4 = choicePayOptions.get(4);

  greetUser(transaction1, transaction2, transaction3);
  selectItem(item1, item2, item3, item4);
  payment(item1, item2, item3)
}

function greetUser(transaction1, transaction2, transaction3) {
  console.log(`Welcome to Wally's HotDogs \n\n${transaction1} \n${transaction2} \n${transaction3}`);
}

function selectItem(item1, item2, item3, item4) {
  rl.question('\nMake selection: ', function (selection) {
  
    if (selection == 1) {
      console.log(`\n~~ Starting New Transaction ~~ \n\n${item1} \n${item2} \n${item3} \n${item4}`);
      console.log(`\nSelect an Item: `);
    }
    else if (selection == 2) {
      console.log('help me')
    } else if (selection == 3) {
      rl.close();
    } else {
     console.log('Invalid entry');
    }
//  rl.question('Select an Item: ', function(item) {    
// if (item == 1 || selection == 2 || selection == 3) {
// console.log('Selectivrerereee')
// rl.close();
// }
//     })

      rl.on('line', function (item) {
          if (selection == 5) {
            rl.close()
          } else if (item == 1) {
          console.log(`\nSelect an Item: ${item}`)
             console.log(`~~ You added a Hot Dog ~~ \n\n${item1} \n${item2} \n${item3} \n${item4}`);
             console.log('Select an Item: ')

          } else if (item == 2){
            console.log(`\nSelect an Item: ${item}`);
            console.log(`~~ You added a Soda ~~ \n\n${item1} \n${item2} \n${item3} \n${item4}`);
              console.log('Select an Item: '); 
          } else if (item ==3) {
            console.log(`\nSelect an Item: ${item}`) 
            console.log(`~~ You added Chips ~~ \n\n${item1} \n${item2} \n${item3} \n${item4}`);
            console.log('Select an Item: '); 

          } else {
           rl.close()
          }         
    })  
  })
}
function payment(item1, item2, item3) {
  // console.log('Help is on the way')
}




return startProgram();



