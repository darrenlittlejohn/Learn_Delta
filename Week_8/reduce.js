let numbers = [10, 15, 30]

let numSum = numbers.reduce((sum, number)=>{
  return sum + number
},0)
console.log(numSum)