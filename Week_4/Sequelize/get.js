let Country = require('./models/country')

//loads country instance, just one record
Country.findById(1).then(function(country){
  console.log(country.get('name'))
})

//pulls all rows from country
//Country.all().then(function(countries){
//  let mapped = countries.map(function(country){
//    return country.get()
//  })
//  console.log(mapped)
//})
//
////pulls all with a limit of 2
//Country.all({limit: 2}).then(function(countries){
//  let mapped = countries.map(function(country){
//    return country.get()
//  })
//  console.log(mapped)
//})

//Country.all({ limit:2,
//  where: {
//    continent: 'Europe'
//  }
//}) .then(function(countries){
//  let mapped = countries.map(function(country){
//    return country.get()
//  })
//  console.log(mapped)})

Country.all({ 
  where: {
    code: 'DZA'
  }
}) .then(function(countries){
  let mapped = countries.map(function(country){
    return country.get()
  })
  console.log(mapped)})