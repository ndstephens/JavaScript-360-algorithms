// Palindrome
// Write a function that takes in a string that ignores special character and underscores, is case insensitive, ignores spaces, and test if it is a palindrome

const isPalindrome = str => {
  const forwardStr = str
    .toLowerCase()
    .split('')
    .filter(el => {
      return 'abcdefghijklmnopqrstuvwxyz'.includes(el)
    })
    .join('')
  const reverseStr = forwardStr
    .split('')
    .reverse()
    .join('')

  return forwardStr === reverseStr
}

console.log(isPalindrome('tacocat'))
console.log(isPalindrome('A man, a plan, a canal. Panama'))
console.log(isPalindrome('My age is 0, 0 si ega ym.'))
console.log(isPalindrome('.0_0 (:/-:) 0-0'))
console.log(isPalindrome('Not a palindrome'))

//
//
// or using a regular expression
const isPalindromeRegex = str => {
  const forwardStr = str.toLowerCase().replace(/[\W_]/g, '')
  const reverseStr = forwardStr
    .split('')
    .reverse()
    .join('')

  return forwardStr === reverseStr
}

console.log(isPalindromeRegex('tacocat'))
console.log(isPalindromeRegex('A man, a plan, a canal. Panama'))
console.log(isPalindromeRegex('My age is 0, 0 si ega ym.'))
console.log(isPalindromeRegex('.0_0 (:/-:) 0-0'))
console.log(isPalindromeRegex('Not a palindrome'))
