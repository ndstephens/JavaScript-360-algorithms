// Add Up Digits
// Write a function that takes in a number and adds up the sum of its digits

const sumDigits = num => {
  return num
    .toString()
    .split('')
    .reduce((sum, num) => {
      return sum + parseInt(num)
    }, 0)
}

console.log(sumDigits(9))
console.log(sumDigits(29))
console.log(sumDigits(329))
console.log(sumDigits(1329))
