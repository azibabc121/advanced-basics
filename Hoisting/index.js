console.log(myName) // Hoisted but not initialized - undefined in console

var myName = "Azib Rasheed"

console.log(myEmail) // ReferenceError: Cannot access 'myEmail' before initialization - creates a "temporal dead zone" from the start of the block until the declaration is encountered.
let myEmail = "azibabc121@gmail.com"

console.log(myLinkedin) // ReferenceError: Cannot access 'myLinkedin' before initialization - creates a "temporal dead zone" from the start of the block until the declaration is encountered.
const myLinkedin = "https://www.linkedin.com/in/azib-rasheed"

getMyEmail() // Function declaration & functin definition both are hoisted & it will work
function getMyEmail() {
    console.log(myEmail)
}

getMyLinkedin() // TypeError: getMyLinkedin is not a function because function definition is not hoisted only it's declaration is hoisted with undefined
var getMyLinkedin = function () {
    console.log(myLinkedin)
}