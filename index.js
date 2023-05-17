console.log("hello mate !")
//Calculator part
// let firstValue = parseInt(prompt("Enter a number"))
// let operator = prompt("Enter an operator")
// let secondValue = parseInt(prompt("Enter a second number"))

// function calculator(firstNumber, myOperator, secondNumber) {
//   let result
//   switch (myOperator) {
//     case "+":
//       result = firstNumber + secondNumber
//       break
//     case "-":
//       result = firstNumber - secondNumber
//       break
//     case "/":
//       result =
//         secondNumber === 0
//           ? "You'll blow the universe"
//           : firstNumber / secondNumber
//       break
//     case "*":
//       result = firstNumber * secondNumber
//       break
//     default:
//       break
//   }

//   let message
//   if (isNaN(firstNumber) || isNaN(secondNumber) || !result) {
//     message = "Please enter a correct prompt"
//   } else {
//     message = `${firstNumber} ${myOperator} ${secondNumber} = ${result}`
//   }
//   return message
// }

// console.log(calculator(firstValue, operator, secondValue))

// The perfect price
const userName = prompt("Enter your name")
console.log(`Hello ${userName}`)
const rightPrice = Math.ceil(Math.random() * 100)
let result
let hasWon = false
for (let i = 1; !hasWon; i++) {
  let guessPrice = parseInt(prompt("select a number between 0 and 100"))
  if (isNaN(guessPrice)) {
    result = "please enter a number"
  } else {
    if (guessPrice < rightPrice) {
      result = "it's higher"
    } else if (guessPrice > rightPrice) {
      result = "it's lower"
    } else {
      hasWon = true
      result = `You won dude ! It took you ${i} turn.s`
    }
  }
  console.log(result)
}
