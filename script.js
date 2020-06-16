var currentQuestion = -1;
var score = 0;
var timer;
var timeLeft = 0;

//when user clicks start button the timer starts to countdown
function start() {
  timeLeft = 60;
  document.getElementById("timeLeft").innerHTML = timeLeft;
  timer = setInterval(function () {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    //if timer reaches 0 then game will end
    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
  next();
}

// loops through the questions
function next() {
  currentQuestion++;
  if (currentQuestion > questions.length - 1) {
    endGame();
    return;
  }
  var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>";

  for (
    var buttonLoop = 0;
    buttonLoop < questions[currentQuestion].choices.length;
    buttonLoop++
  ) {
    var buttonCode = '<button onclick="[ANS]">[CHOICE]</button>';
    buttonCode = buttonCode.replace(
      "[CHOICE]",
      questions[currentQuestion].choices[buttonLoop]
    );
    if (
      questions[currentQuestion].choices[buttonLoop] ==
      questions[currentQuestion].answer
    ) {
      buttonCode = buttonCode.replace("[ANS]", "correct()");
    } else {
      buttonCode = buttonCode.replace("[ANS]", "incorrect()");
    }
    quizContent += buttonCode;
  }
  document.getElementById("quizBody").innerHTML = quizContent;
}
