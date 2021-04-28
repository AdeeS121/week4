const { cpuUsage } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('~~ Welcome to Wally\'s HotDogs ~~~', function () {
   const transOptions = new Map()
transOptions.set(1, '[1] - Start transaction');
transOptions.set(2, '[2] - Current running transaction');
transOptions.set(3, '[3] - Exit');
let transaction1 = transOptions.get(1);
let transaction2 = transOptions.get(2);
let transaction3 = transOptions.get(3);

const choicePayOptions = new Map()
choicePayOptions.set(1, '[1] - Hot Dog - $4.50');
choicePayOptions.set(2, '[2] - Soda - $1.50');
choicePayOptions.set(3, '[3] - Chips - $1.00');
choicePayOptions.set(4, '[4] - Start Payment Process');
let item1 = choicePayOptions.get(1);
let item2 = choicePayOptions.get(2);
let item3 = choicePayOptions.get(3);
let item4 = choicePayOptions.get(4);



    for (let choice of transOptions) { 
        choice++   
         
    }
  console.log(`${transaction1} \n${transaction2} \n${transaction3}`); 
        
  
    rl.question('\nPlease make a selection: ', function (selection) {
        if (selection == 1){
            console.log(`${item1} \n${item2} \n${item3} \n${item4}`)
        } else if (selection == 2){
            console.log('Running')
        } else {
            rl.close()
        } 
         
    //   movies.push("The Secret Life of Pets");
    //   for (let i = 0; i < movies.length; i++) {
    //     if (i % 2 === 1) {
    //       console.log(movies[i]);
    //
    //   }
    //   rl.question('Select an item:', function (favMovie) {
    //     rl.question("\nHere is the new movie list: ", function () {
    //       movies.push(favMovie);
    //       for (let i = 0; i < movies.length; i++) 
    //       console.log(movies[i]);
          rl.close();
        });

      });
    // });
//   });
  
  rl.on("close", function () {
    // console.log("\nBYE BYE !!!");
    process.exit(0);
  });
  







// function startProgram(){
// const transOptions = new Map()
// transOptions.set(1, '[1] - Start transaction')
// transOptions.set(2, '[2] - Current running transaction')
// transOptions.set(3, '[3] - Exit')
// let transaction1 = transOptions.get(1)
// let transaction2 = transOptions.get(2)
// let transaction3 = transOptions.get(3)


// let userChoice = transSelection(transaction1, transaction2, transaction3)
// let userSelection = rl.question('Please enter selection: ', function(){

// })

// const choicePayOptions = new Map()
// choicePayOptions.set(1, '[1] - Hot Dog - $4.50')
// choicePayOptions.set(2, '[2] - Soda - $1.50')
// choicePayOptions.set(3, '[3] - Chips - $1.00')
// choicePayOptions.set(4, '[4] - Start Payment Process')
// let item1 = choicePayOptions.get(1)
// let item2 = choicePayOptions.get(2)
// let item3 = choicePayOptions.get(3)
// let item4 = choicePayOptions.get(4)
// console.log(userChoice)
// console.log(userSelection)

//   rl.close()
// } 
// rl.question('Please enter selection: ', function(selection){
// if (selection == 1) {
//     console.log("Hi")
// }
// })

 


// console.log(startProgram())











// welcome = welcomeMsg(transaction1, transaction2, transaction3)
// console.log(welcome)
// getChoice = displayChoices(item1, item2, item3, item4)
// console.log(getChoice)


// rl.question('~~~ Welcome to Wally\'s Hotdogs ~~~', function(transaction1, transaction2, transaction3) {
//     console.log(`${transaction1} ${transaction2}, ${transaction3}`)
//     // rl.question("Where do you live ? ", function(country) {
//     //     console.log(`${name}, is a citizen of ${country}`);
//         rl.close();

// });
// }
// rl.on("close", function() {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });




// // if selecton is start transaction show list of items to choose from
// function welcomeMsg(transaction1, transaction2, transaction3) {
// console.log(`~~~ Welcome to Wally's Hotdogs ~~~ \n${transaction1} \n${transaction2} \n${transaction3}`)
// // prompt('Please make a selection: ') 
// // userSelection = prompt('Please make a selection: ')
// }



// show food options with option to start payment
// add object map for selecting items
// function displayChoices(item1, item2, item3, item4) {

//     // if (userSelection == 1){ 
//     //     console.log('Hi') 
//     //     // console.log(userSelection)
//     //     } else {
//     //         console.log('Choose another code')
//     //     }
    
    
// //    console.log(`${item1} \n${item2} \n${item3} \n${item4}`)
// //    prompt('Select an item: ') 
// //    userSelection = prompt('Please make a selection: ')

//     // if (transaction1 === 1){
//     //  console.log('testerbester')   
//     // } else {
//         // console.log('failed test')
//     // }
// }




// console.log(startProgram())
// console.log(welcomeMsg())


