
function startProgram(){
const transOptions = new Map()
transOptions.set(1, '[1] - Start transaction')
transOptions.set(2, '[2] - Current running transaction')
transOptions.set(3, '[3] - Exit')

item1 = transOptions.get(1)
item2 = transOptions.get(2)
item3 = transOptions.get(3)

console.log(`~~~ Welcome to Wally's Hotdogs ~~~ \n${item1} \n${item2} \n${item3}`)
}
console.log(startProgram())



