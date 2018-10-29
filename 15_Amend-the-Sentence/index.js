// Amend the Sentence
// Write a function that takes in a string that has no spaces, but new words are denoted with capital letters and return a lowercase spaced out string

// separate out all words that start with a capital and possibly include a run of lowercase letters and special characters (creates some array elements of empty strings...i don't fully understand why, but they then get filtered)
const amendSentence = str => {
  return str
    .split(/([A-Z][a-z\W]+)/)
    .filter(el => el !== '')
    .map(el => el.toLowerCase())
    .join(' ')
}

console.log(amendSentence("ARichManDoesn'tWork"))

//
//
// another option
const amendSentence2 = str => {
  const splitStr = str.split('')
  let newStr = ''
  for (const char of splitStr) {
    if (char !== char.toLowerCase()) {
      newStr += ' ' + char
    } else {
      newStr += char
    }
  }
  return newStr.trim().toLowerCase()
}

console.log(amendSentence2("ARichManDoesn'tWork"))
