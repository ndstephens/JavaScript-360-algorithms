// Duplicate Numbers
// Write a function that takes in an array of numbers and returns if there are any duplicate numbers or not

// on a long array this method could be inefficient
const containsDupNums = numArr => {
  let isDup = false
  numArr.forEach((num, i, array) => {
    // check if index of current number is the same if searched from the end of the array (it didn't find a duplicate along the way at a different index)
    if (i !== array.lastIndexOf(num)) {
      isDup = true
    }
  })
  return isDup
}

console.log(containsDupNums([1, 2, 3, 1]))
console.log(containsDupNums([1, 2, 3]))
console.log(containsDupNums([0, 4, 5, 0, 3, 6]))

//
//
// using sort then find on a very long array could be more efficient
const containsDubNumsSort = numArr => {
  let dupNum = numArr
    .sort((num1, num2) => {
      return num1 - num2
    })
    .find((num, i, array) => {
      if (i < array.length - 1) {
        // go through the sorted array and check if current number is equal to its following number in the array
        return num === array[i + 1]
      }
    })
  // if dupNum is a number, including 0 or negative, return true
  return dupNum !== undefined ? true : false
}

console.log(containsDubNumsSort([1, 2, 3, 1]))
console.log(containsDubNumsSort([1, 2, 3]))
console.log(containsDubNumsSort([0, 4, 5, 0, 3, 6]))
