// ./jack.js

const Counter = require('./counter');

let jackCounter = new Counter()

function reportjackCount(count) {
  console.log("My jack count is now", count)
}

console.log("Welcome to a game of jacks.")
reportjackCount(jackCounter.getValue())

console.log("You give me one of your jacks.")
jackCounter.increase()

reportjackCount(jackCounter.getValue())
console.log("I give you one of my jacks.")

jackCounter.decrease()
reportjackCount(jackCounter.getValue())
