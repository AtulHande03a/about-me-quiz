var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name?");
var score =0;

console.log(`Welcome ${userName}! , lets play a game.`);
console.log(`Answer few questions about Atul.`);



function play(question , answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("right");
    score++;
  }else{
    console.log("wrong");
  }
  console.log("Score is: " + score);
  console.log("--------------");
}



var questions = [{
  question: "Where does Atul lives?",
  answer: "pune"
}, {
  question: "What is Atul's favorite sport?",
  answer: "cricket"
},{
  question: "Whats is his native state?",
  answer: "Maharashtra"
}
];

for(var i=0; i< questions.length ; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question , currentQuestion.answer);
}

console.log(`Your total score is: ${score}`);
