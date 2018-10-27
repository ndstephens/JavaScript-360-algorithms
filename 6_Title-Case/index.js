// Title Case
// Write a function that takes in a string (sentence) and capitalizes the first letter of each word

const titleCase = str => {
  return str
    .split(' ')
    .map(word => {
      return word.replace(word[0], word[0].toUpperCase())
    })
    .join(' ')
}

console.log(titleCase('I am a coding guru'))
console.log(titleCase('Everyone want to work at Google'))
