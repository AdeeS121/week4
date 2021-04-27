const ps = require("prompt-sync");
const prompt = ps();


function startProgram(){
const transOptions = new Map()
transOptions.set(1, '[1] - Start transaction')
transOptions.set(2, '[2] - Current running transaction')
transOptions.set(3, '[3] - Exit')
let transaction1 = transOptions.get(1)
let transaction2 = transOptions.get(2)
let transaction3 = transOptions.get(3)

welcome = welcomeMsg(transaction1, transaction2, transaction3)
console.log(welcome)
getChoice = displayChoices(transaction1, transaction2, transaction3)
console.log(getChoice)

}
// if selecton is start transaction show list of items to choose from
function welcomeMsg(transaction1, transaction2, transaction3) {
console.log(`~~~ Welcome to Wally's Hotdogs ~~~ \n${transaction1} \n${transaction2} \n${transaction3}`)
// prompt('Please make a selection: ') 
userSelection = prompt('Please make a selection: ')

if (userSelection == 1){ 
console.log(displayChoices()) 
// console.log(userSelection)
} else {
    console.log('Choose another code')
}
}

// function to show food options if transacton 1 choosen
function displayChoices() {
    // if (transaction1 === 1){
    //  console.log('testerbester')   
    // } else {
        // console.log('failed test')
    // }


}




console.log(startProgram())
// console.log(welcomeMsg())


