// Unique Values
// Write a function that takes in two arrays and returns an array of the unique values

// not bad, but all unique values are used as object keys, so when put back into an array they're all strings, and out of original order
const uniqueValuesObj = (arr1, arr2) => {
  const allValues = [...arr1, ...arr2]
  const tempObj = allValues.reduce((obj, val) => {
    if (obj[val]) {
      obj[val]++
    } else {
      obj[val] = 1
    }
    return obj
  }, {})

  return Object.entries(tempObj)
    .filter(el => el[1] === 1)
    .map(el => el[0])
}

console.log(uniqueValuesObj([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(uniqueValuesObj([1, 'calf', 3, 'piglet'], [7, 'filly']))
console.log(uniqueValuesObj([2, 1, 3], [3, 2, 1]))

//
//
// using Map instead of an object, which returns all values as they original type, and in the same order
const uniqueValuesMap = (arr1, arr2) => {
  const allValues = [...arr1, ...arr2]
  const uniqueValMap = allValues.reduce((tempMap, val) => {
    if (tempMap.has(val)) {
      tempMap.set(val, tempMap.get(val) + 1)
    } else {
      tempMap.set(val, 1)
    }
    return tempMap
  }, new Map())

  return Array.from(uniqueValMap.entries())
    .filter(el => el[1] === 1)
    .map(el => el[0])
}

console.log(uniqueValuesMap([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(uniqueValuesMap([1, 'calf', 3, 'piglet'], [7, 'filly']))
console.log(uniqueValuesMap([2, 1, 3], [3, 2, 1]))

//
//
// Using loops (good, but technically not most efficient)
const uniqueValuesLoops = (arr1, arr2) => {
  const uniqueArr = []

  for (const val of arr1) {
    if (!arr2.includes(val) && !uniqueArr.includes(val)) {
      uniqueArr.push(val)
    }
  }
  for (const val of arr2) {
    if (!arr1.includes(val) && !uniqueArr.includes(val)) {
      uniqueArr.push(val)
    }
  }

  return uniqueArr
}

console.log(uniqueValuesLoops([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(uniqueValuesLoops([1, 'calf', 3, 'piglet'], [7, 'filly']))
console.log(uniqueValuesLoops([2, 1, 3], [3, 2, 1]))
