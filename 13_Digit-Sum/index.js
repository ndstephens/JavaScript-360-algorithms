// Digit Sum
// Write a function that takes a string and parses out all the numbers and adds them together

// **** BEST SOLUTION AT THE BOTTOM ****

const digitSum = str => {
  return str
    .split(' ')
    .map(word => {
      return word
        .split('')
        .filter(char => {
          return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(parseInt(char))
        })
        .join('')
    })
    .reduce((acc, num) => {
      if (num) {
        return acc + parseInt(num)
      }
      return acc
    }, 0)
}

console.log(digitSum('2 apples, 12 oranges'))
console.log(digitSum('3 and 20ish apples'))
console.log(digitSum('1234'))
console.log(digitSum('No nums in here'))

//
//
// or using a regex (turn string into array, remove all letters and special characters, then sum up values left in array)
const digitSumRegex = str => {
  return str
    .split(' ')
    .map(word => {
      return word.replace(/[\W_A-Z]/gi, '')
    })
    .reduce((acc, num) => {
      // if not an empty string
      if (num) {
        return acc + parseInt(num)
      }
      return acc
    }, 0)
}

console.log(digitSumRegex('2 apples, 12 oranges'))
console.log(digitSumRegex('3!! apples && 20ish Oranges!'))
console.log(digitSumRegex('1234'))
console.log(digitSumRegex('No nums in here'))

//
//
// another regex option
const digitSumRegex2 = str => {
  // need to have the '|| []' 'or blank array' b/c otherwise 'null' is returned
  const nums = str.match(/\d+/g) || []
  return nums.reduce((acc, num) => {
    return acc + parseInt(num)
  }, 0)
}

console.log(digitSumRegex2('2 apples, 12 oranges'))
console.log(digitSumRegex2('3!! apples && 20ish Oranges!'))
console.log(digitSumRegex2('1234'))
console.log(digitSumRegex2('No nums in here'))
