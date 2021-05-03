const { cpuUsage } = require("process");
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

  // let getTrans = selectTrans(transaction1, transaction2, transaction3);
  // console.log(getTrans);
  // let getChoice = selectItem(item1, item2, item3, item4);
  // console.log(getChoice);
}


// return startProgram();

// function is invoked one have answer from the terminal
// answer invoked as an argument
console.log('~~ Welcome to Wally\'s Hotdogs ~~')
console.log('[1] - Start new transaction \n[2] - Current running transaction \n[3] - Exit');
rl.question('Make selection: ', function(){
  // if (selection = 1)
  console.log('[1] - Hot Dog - $4.50 \n[2] - Soda - $1.50 \n[3] - Chips - $1.00 \n[4] - Start Payment Process');

  rl.on('line', function (selection){
  if (selection == 4) {
    rl.close() 
  } else if (selection == 1) {
    console.log('~~ You added a Hot Dog ~~')
  } else if (selection == 2){
    console.log('~~ You added a Soda ~~')
  } else if (selection ==3) {
    console.log('You added Chips')
  }
  console.log('[1] - Hot Dog - $4.50 \n[2] - Soda - $1.50 \n[3] - Chips - $1.00 \n[4] - Start Payment Process');  

  console.log('Select an item: ')
});


  
})

  
//   rl.question('Select item: ', function() {
// if (selection == 1) {
//   console.log('~~ You added a Hot Dog ~~')
//   rl.question('select again')
//   // rl.close()
// } else if (selection == 2) {
//   console.log('~~ You added a Soda ~~')
// } else if (selection == 3){
//   console.log('You added Chips')
// }

//   })







