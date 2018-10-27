// Repeat String
// Write a function that takes in a string and a number, and repeats the string that number of times

const repeatString = (str, num) => {
  let repeatedStr = ''
  while (num > 0) {
    repeatedStr += str
    num--
  }
  return repeatedStr
}

console.log(repeatString('Hello', 4))
console.log(repeatString('Bacon', 3))
console.log(repeatString('hey', 1))
console.log(repeatString('word', 0))

//
//
// or super simple
const easyStrRepeat = (str, num) => {
  return str.repeat(num)
}

console.log(easyStrRepeat('Hello', 4))
console.log(easyStrRepeat('Bacon', 3))
console.log(easyStrRepeat('hey', 1))
console.log(easyStrRepeat('word', 0))
