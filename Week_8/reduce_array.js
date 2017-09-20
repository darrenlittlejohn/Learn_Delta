let famousProgrammers = [
  {name: "Rich Hickey", language: 'Closure', years: 15},
  {name:"Robert Martin", language: 'Java', years: 25},
  {name: "Grace Hopper", language: 'Cobol', years: 50},
  {name: "Richard Stallman", language: 'lisp', years: 45},
  {name: "Dennis Ritchie", language: 'C', years: 30}
]

let collectorFunction = (sum, item)=>{
  return sum + item.years
}
let startingValue = 0
array.reduce(collectorFunction, startingValue)

//let yearsExperience = famousProgrammers.reduce((sum, programmer)=>{
//  return sum + programmer.years
//},0)
//
//let paragraph = famousProgrammers.reduce((text, programmer)=>{
//  return `${text} ${programmer.name} has been programming ${programmer.language} for ${programmer.years} years.`
//},'')
//
console.log(collectorFunction)
//console.log(paragraph)