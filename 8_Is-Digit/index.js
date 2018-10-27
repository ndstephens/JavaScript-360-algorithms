// Is Digit
// Write a function that takes in a STRING and returns a boolean on whether or not it is a digit.  A digit is defined as a number between 0-9

const isDigit = str => {
  if (str.length !== 1) return false
  return '0123456789'.includes(str)
}

console.log(isDigit('16'))
console.log(isDigit('6'))
console.log(isDigit('d'))
