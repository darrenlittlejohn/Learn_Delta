var express = require('express');
// requiring our new body-parser
var bodyParser = require('body-parser')
var fs = require('fs') // this is the new part

var app = express();

app.set('view engine', 'ejs')

//let the app know we want to use body-parser to handle form data
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static('public'));  //tell Express that well keep files in the /public directory
app.set('view engine', 'ejs');





// var questions = {
//   'coronado-bridge':{
//     question: "Who was the first person to ever drive over the Coronado bridge?",
//     answer: "Ronald Reagan"
//   },
//   'hotel-del':{
//     question: "What is the largest wooden structure in the United States?  (Hint, its located in San Diego)",
//     answer: "Hotel Del Coronado"
//   },
//   'san-diego-county-fair':{
//     question: "What was the original name of the San Diego County Fair?",
//     answer: "Del Mar Fair"
//   },
//   'mission-bay':{
//     question: "How many visitors come to Mission Bay Park every year?",
//     answer: "More than 5 million"
//   },
//   'la-jolla-playhouse':{
//     question: "What famous actor founded the La Jolla Playhouse?",
//     answer: "Gregory Peck"
//   }
// };



// app.get('/', function (request, response) {
//   response.render('index', {'questions': questions});
// });

// app.get('/trivia/:question', function(request, response){
//   var questionKey = request.params.question;
//   var triviaQuestion = questions[questionKey];
//   response.render('trivia', {'question': triviaQuestion.question, 'answer': triviaQuestion.answer});
// });




app.get('/', function (request, response) {
  response.render('form-demo')
});

// app.post('/day-update', function(request, response){
//
//   //because we're using body-parser, incomming form data
//   //is found on request.body
//   let responses = request.body
//
//   //In this case, we're just turning around and dispaying the user input
//   response.render('day-update', responses )
// });

app.post('/day-update', function(request, response){
  let responses = request.body

  //open the data.json file, and parse into a JSON Object
  var dayUpdates = undefined
  var rawFile = fs.readFileSync('data.json')
  var dayUpdates = JSON.parse(rawFile)

  dayUpdates.push(responses)

  //time to save the data back to disk
  fs.writeFileSync('data.json', JSON.stringify(dayUpdates))

  response.render('day-update', { responses: dayUpdates } )
})

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
