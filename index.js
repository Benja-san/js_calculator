console.log("hello mate !")

// let firstValue = Number(prompt("please enter a number"))
// let operator = prompt("please enter an operator")
// let secondValue = Number(prompt("please enter a second number"))

// // use isNaN function to check if my prompt is an integer
// if (!isNaN(firstValue) && !isNaN(secondValue)) {
//   let answer
//   switch (operator) {
//     case "+":
//       answer = firstValue + secondValue
//       break
//     case "-":
//       answer = firstValue - secondValue
//       break
//     case "*":
//       answer = firstValue * secondValue
//       break
//     case "/":
//       answer = firstValue / secondValue
//       break
//     default:
//       answer = "incorrect operator"
//       break
//   }
//   console.log(answer)
// } else console.log("incorrect numbers")

const playerName = prompt("Select your player name")
console.log(`Hello ${playerName}`)
const rightPrice = Math.ceil(Math.random() * 100)

let magicNumber
let message
let turn = 0
let hasWon = false

while (!hasWon) {
  turn++
  console.log(`round number ${turn}`)
  if (magicNumber === undefined) message = "Please select a number"
  else if (isNaN(magicNumber))
    message = "incorrect value, please use your brain"
  if (magicNumber > rightPrice) {
    message = "It is lower"
  }
  if (magicNumber < rightPrice) {
    message = "It is higher"
  }
  if (magicNumber === rightPrice) {
    hasWon = true
    message = `Congratulation ${playerName} it took you ${turn} rounds!`
  }
  console.log(message)
  if (!hasWon) magicNumber = parseInt(prompt("Enter a price"))
}
