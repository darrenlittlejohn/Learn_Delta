let Country = require('./models/country')
let connection = require('./models/sequelize-connection')

//let genovia = Country.build({
//  code: 'GEN',
//  name: 'Genovia',
//  continent: 'Europe',
//  region: 'Make Believe'
//})
//
//genovia.save()
//  .then(function(){
//    //whatever you need to do afterwards
//  })
//  .catch(function(error){
//  })

//let florin = Country.create({
//  code: 'FLR',
//  name: 'Florin',
//  continent: 'Europe',
//  region: 'Make Believe'
//})
//  .then(function(){
//    //whatever you need to do afterwards
//  })
//  .catch(function(error){
//  })

//let florin = Country.create({
//  code: 'FLR',
//  name: 'Florin',
//  continent: 'Europe',
//  region: 'Make Believe'
//})
//  .then(function(country){
//    country.region = "Storyland"  // <-- this is where we update its values
//    return country.save() // a promise
//  })
//  .catch(function(error){
//  })

//Country.findAll({
//  attributes: ['code','name']
//})

//Country.findAll({
//  where:{
//    region: 'Europe'
//  }
//})

//Country.findById(1).then(function(country){
//    country.name = country.name.toLowerCase()// <-- this is where we update its values
//    console.log(country.name)
//    return country.save() // a promise
//  })
//  .catch(function(error){
//  })
  

let Spaceland = Country.create({
  code: 'SPC',
  name: 'Spaceland',
  continent: 'Africa',
  region: 'Outer Space'
})
.then(function(r){
      console.log(r.code)
})
.catch(function(error){
    console.log(error)
})

//Country.all({
//    where: { code: 'SPC'}
//}).then(function(r){
//  let mapped = r.map(function(country){
//    return country.get()
//  })
//  console.log(mapped)
//})
//  
//let genovia = Country.build({
//  code: 'GEN',
//  name: 'Genovia',
//  continent: 'Europe',
//  region: 'Make Believe'
//})
//
//genovia.save()
//  .then(function(){
//    //whatever you need to do afterwards
//  })
//  .catch(function(error){
//  })



