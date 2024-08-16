function fizzBuzz(num1, num2) {
  //write your code here
 const result = []
 const min = Math.min(num1, num2)
 const max = Math.max(num1, num2)
  for (let i = min; i <= max; i++) {
    result.push(i)
  }
  result.forEach((number, index) => {
    if (number % 3 === 0 && number % 5 === 0) {
      result[index] = "fizzbuzz"
    } else if (number % 3 === 0) {
      result[index] = "fizz"
    } else if (number % 5 === 0) {
      result[index] = "buzz"
    }

  })

 return result
}

module.exports = fizzBuzz