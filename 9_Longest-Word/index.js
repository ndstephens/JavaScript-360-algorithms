// Longest Word
// Write a function that takes in a string (sentence) and returns the longest word (excluding all special characters)

const longestWord = str => {
  return str
    .split(' ')
    .map(word => {
      return word.replace(/[\W_]/g, '')
    })
    .sort((word1, word2) => {
      return word2.length - word1.length
    })[0]
}

console.log(longestWord('Ready..., steady, go!!!!!!!'))
console.log(longestWord('Hey there guy'))
