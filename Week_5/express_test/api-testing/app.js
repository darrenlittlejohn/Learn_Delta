const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  res.json({greeting: "Hello World"})
})

module.exports = app
