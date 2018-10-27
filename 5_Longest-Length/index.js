// Longest Length
// Write a function that takes in a string (a sentence) and returns the length of the longest string (longest word in that sentence)

const longestLength = str => {
  return str.split(' ').sort((word1, word2) => {
    return word2.length - word1.length
  })[0].length
}

console.log(longestLength('I am a coding guru'))
console.log(longestLength('Here and there and everywhere'))
console.log(longestLength('The longest string'))

//
//
// or using a forEach loop
const longestLengthLoop = str => {
  let maxLength = 0

  str.split(' ').forEach(word => {
    maxLength = maxLength < word.length ? word.length : maxLength
  })

  return maxLength
}

console.log(longestLengthLoop('I am a coding guru'))
console.log(longestLengthLoop('Here and there and everywhere'))
console.log(longestLengthLoop('The longest string'))
