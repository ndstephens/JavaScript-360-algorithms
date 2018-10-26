// Classic Fizz-Buzz
// Write a function that takes in a number and will return "Fizz" if it's divisible by 3, "Buzz" if divisible by 5, or "Fizz-Buzz" if divisible by both

const fizzBuzz = num => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz'
  } else if (num % 3 === 0) {
    return 'Fizz'
  } else if (num % 5 === 0) {
    return 'Buzz'
  } else {
    return num
  }
}

console.log(fizzBuzz(15))
console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(4))

//
// or using a Ternary expression
const fizzBuzzTernary = num => {
  return num % 3 === 0 && num % 5 === 0
    ? 'FizzBuzz'
    : num % 3 === 0
      ? 'Fizz'
      : num % 5 === 0
        ? 'Buzz'
        : num
}

console.log(fizzBuzzTernary(15))
console.log(fizzBuzzTernary(3))
console.log(fizzBuzzTernary(5))
console.log(fizzBuzzTernary(4))

//
// or using string concatenation
const fizzBuzzStrCon = num => {
  let str = ''
  str += num % 3 === 0 ? 'Fizz' : ''
  str += num % 5 === 0 ? 'Buzz' : ''
  return str || num
}

console.log(fizzBuzzStrCon(15))
console.log(fizzBuzzStrCon(3))
console.log(fizzBuzzStrCon(5))
console.log(fizzBuzzStrCon(4))
