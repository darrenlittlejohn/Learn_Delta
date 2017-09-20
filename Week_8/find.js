let famousProgrammers = [
  {name: "Rich Hickey", language: 'Closure'},
  {name:"Robert Martin", language: 'Java'},
  {name: "Grace Hopper", language: 'Cobol'},
  {name: "Richard Stallman", language: 'lisp'},
  {name: "Dennis Ritchie", language: 'C'}
]

let cobolProgrammer = famousProgrammers.find((programmer)=>{
  console.log("looking at", programmer.name)
  return programmer.language === "Cobol"
})
console.log(cobolProgrammer)
/*
looking at Rich Hickey
looking at Robert Martin
looking at Grace Hopper
{ name: 'Grace Hopper', language: 'Cobol' }
 */
