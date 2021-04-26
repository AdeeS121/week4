
function startProgram(){
const transOptions = new Map()
transOptions.set(1, '[1] - Start transaction')
transOptions.set(2, '[2] - Current running transaction')
transOptions.set(3, '[3] - Exit')

transaction1 = transOptions.get(1)
transaction2 = transOptions.get(2)
transaction3 = transOptions.get(3)

console.log(`~~~ Welcome to Wally's Hotdogs ~~~ \n${transaction1} \n${transaction2} \n${transaction3}`)


}
console.log(startProgram())



