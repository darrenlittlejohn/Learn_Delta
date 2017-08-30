var express = require('express');
var app = express();
// requiring our new body-parser


app.set('view engine', 'ejs')


app.use(express.static('public'));  //tell Express that well keep files in the /public directory
app.set('view engine', 'ejs');


app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});


var questions = {
  'coronado-bridge':{
    question: "Who was the first person to ever drive over the Coronado bridge?",
    answer: "Ronald Reagan",
    image:  '/images/ronald.jpg',
    link: '/trivia/hotel-del'
  },
  'hotel-del':{
    question: "What is the largest wooden structure in the United States?  (Hint, its located in San Diego)",
    answer: "Hotel Del Coronado",
    image:  '/images/hotel.jpg',
    link: 'san-diego-county-fair'
  },
  'san-diego-county-fair':{
    question: "What was the original name of the San Diego County Fair?",
    answer: "Del Mar Fair",
    image:  '/images/fair.jpeg',
    link: 'mission-bay'
  },
  'mission-bay':{
    question: "How many visitors come to Mission Bay Park every year?",
    answer: "More than 5 million",
    image:  '/images/bay.jpeg',
    link: 'la-jolla-playhouse'
  },
  'la-jolla-playhouse':{
    question: "What famous actor founded the La Jolla Playhouse?",
    answer: "Gregory Peck",
    image:  '/images/play.jpg',
    link: 'coronado-bridge'
  }
};



app.get('/', function (request, response) {
  response.render('index', {'questions': questions});
});

app.get('/trivia/:question', function(request, response){
  var questionKey = request.params.question;
  var triviaQuestion = questions[questionKey];
  response.render('trivia', {'question': triviaQuestion.question, 'answer': triviaQuestion.answer, 'image': triviaQuestion.image, 'link': triviaQuestion.link});
});

app.get('/trivia/answer/:question', function(request, response){
  var questionKey = request.params.question;
  var triviaQuestion = questions[questionKey];
  response.render('trivia', {'question': triviaQuestion.question, 'answer': triviaQuestion.answer, 'image': triviaQuestion.image, 'link': triviaQuestion.link});
});
