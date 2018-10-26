// Classic Fizz-Buzz
// Write a function that takes in a number and will return "Fizz" if it's divisible by 3, "Buzz" if divisible by 5, or "Fizz-Buzz" if divisible by 15

const fizzBuzz = num => {
  if (num % 15 === 0) {
    return 'Fizz-Buzz'
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
  return num % 15 === 0
    ? 'Fizz-Buzz'
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
