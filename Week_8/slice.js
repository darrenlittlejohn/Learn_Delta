let famousProgrammers = [
  "Rich Hickey",
  "Robert Martin",
  "Grace Hopper",
  "Richard Stallman",
  "Dennis Ritchie"
]

let famousGolfers = [
  "Jack Nickolas",
  "Tiger Woods",
  "Sam Snead"
]

let lists = [
  {name: 'programmers', list: famousProgrammers},
  {name: 'golfers', list: famousGolfers}
]

let newList = lists.slice()
let newProList = newList[0].list.slice()
newProList.push("Linus Torvalds")
console.log(famousProgrammers)



