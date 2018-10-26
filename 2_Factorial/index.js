// Factorial
// Write a function that takes in a number and returns the factorial
// ex. (5) 1*2*3*4*5 = 120
// gotcha: (0) needs to equal 1

const factorializeNumber = num => {
  let sum = 1

  for (let i = 2; i <= num; i++) {
    sum *= i
  }
  return sum
}

console.log(factorializeNumber(5))
console.log(factorializeNumber(4))
console.log(factorializeNumber(0))
console.log(factorializeNumber(1))
console.log(factorializeNumber(2))
console.log(factorializeNumber(10))
console.log(factorializeNumber(-5))
