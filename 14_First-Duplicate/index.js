// First Duplicate
// Write a function that takes in an array of positive numbers and returns the first number that is duplicated.  If no duplicates occur, return -1.

const firstDuplicate = numArr => {
  const containerObj = {}

  for (const num of numArr) {
    if (containerObj[num]) {
      return num
    }
    containerObj[num] = 1
  }
  return -1
}

console.log(firstDuplicate([2, 3, 3, 1, 5, 2]))
console.log(firstDuplicate([2, 2]))
console.log(firstDuplicate([2, 1, 3]))
