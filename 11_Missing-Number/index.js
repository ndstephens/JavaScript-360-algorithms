// Missing Number
// Write a function that takes in an array of numbers (between 0 and 9) and finds what number is missing

// assuming array is between 0 and 9 and only one num is missing
const missingNumberBasic = numArr => {
  const totalPossible = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
  const arrTotal = numArr.reduce((acc, num) => {
    return acc + num
  }, 0)
  return totalPossible - arrTotal
}

console.log(missingNumberBasic([0, 3, 5, 8, 4, 6, 1, 9, 7]))
console.log(missingNumberBasic([1, 2, 5, 0, 6, 7, 9, 3, 4]))

//
//
// assuming a sequence of any positive numbers and one is missing (between the lowest and greatest numbers in the sequence)
const missingNumberAny = numArr => {
  return (
    numArr
      .sort((num1, num2) => {
        return num1 - num2
      })
      .find((num, i, array) => {
        // every number in the array minus its index should equal the first number, so return the first number that doesn't (it's the number after the missing number)
        return num - i !== array[0]
      }) - 1
  )
}

console.log(missingNumberAny([7, 5, 8, 4]))
console.log(missingNumberAny([1, 2, 5, 0, 6, 7, 9, 3, 4]))
console.log(missingNumberAny([345, 349, 347, 346]))
