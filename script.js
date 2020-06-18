// setting variables
var CurrentQuestion = 0;
var score = 0;
var timerleft;
var timer;
var totQuestions = questions.length;

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var optA = document.getElementById("optA");
var optB = document.getElementById("optB");
var optC = document.getElementById("optC");
var optD = document.getElementById("optD");
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

// this loads the questions
function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  questionEl.textContent = questionIndex + 1 + ". " + q.question;
  optA.textContent = q.optionA;
  optB.textContent = q.optionB;
  optC.textContent = q.optionC;
  optD.textContent = q.optionD;
}

// if you do not choose an option you will get an alert
function loadNextQuestion() {
  var selectedOption = document.querySelector("input[type=radio]:checked");
  if (!selectedOption) {
    alert("Please select your answer!");
    return;
  }

  // if question is correct you will score 10 points
  var answer = selectedOption.Value;
  if (questions[CurrentQuestion].answer == answer) {
    score += 10;
  }

  // before last question  the next button text changes to "Finish"
  selectedOption.checked = false;
  CurrentQuestion++;
  if (CurrentQuestion == totQuestions - 1) {
    nextButton.textContent = "Finish";
  }

  // this hides question container and loads new container for score results
  if (CurrentQuestion == totQuestions) {
    container.style.display = "none";
    resultCont.style.display = "";
    resultCont.textContent = "Your Score: " + score;
  }
  loadQuestion(CurrentQuestion);
}
// manually loads first question
loadQuestion(CurrentQuestion);
