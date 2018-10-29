// Sum of Differences
// Write a function that takes a number array with two positive numbers and finds the sum of all the numbers between and including the smallest and largest values (the two original numbers in the array)

const sumOfDiff = numArr => {
  const [minNum, maxNum] = numArr.sort((num1, num2) => {
    return num1 - num2
  })
  let total = 0

  for (let i = minNum; i <= maxNum; i++) {
    total += i
  }
  return total
}

console.log(sumOfDiff([10, 5]))
console.log(sumOfDiff([3, 7]))
