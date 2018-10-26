// Reverse a String
// Write a function that takes in a string and reverses its value
// ('code') => 'edoc'

const reverseString = str => {
  return str
    .split('')
    .reverse()
    .join('')
}

console.log(reverseString('code'))
console.log(reverseString('reverse'))
console.log(reverseString('hey buddy'))

//
//
// or using a for-loop
const reverseStringLoop = str => {
  let revstr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    // revstr += str.charAt(i)
    revstr += str[i]
  }
  return revstr
}

console.log(reverseStringLoop('code'))
console.log(reverseStringLoop('reverse'))
console.log(reverseStringLoop('hey buddy'))
