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

  let getTrans = selectTrans(transaction1, transaction2, transaction3);
  console.log(getTrans);
  let getChoice = selectItem(item1, item2, item3, item4);
  console.log(getChoice);
}

function selectTrans(transaction1, transaction2, transaction3) {
  return `~~~ Welcome to Wally\'s Hogdogs ~~~ \n\n${transaction1} \n${transaction2} \n${transaction3}`;
}

function selectItem(item1, item2, item3, item4) {
  rl.question('Make selection: ', function (selection) {
console.log(`${item1} ${item2} ${item3} ${item4}`)
    // console.log(`${item1} ${item2} ${item3} ${item4}`);
    // console.log('test')
    // rl.close()
  });
}

return startProgram();

