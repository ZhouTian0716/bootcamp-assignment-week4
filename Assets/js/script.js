// variables to reference DOM elements
var timeEl = document.querySelector("#timer");   //Time Counting
var startButton = document.querySelector("#startQuiz");  //Start Quiz Button
var submitButton = document.querySelector("#submit");  //Submit Quiz Button
var qTitle = document.querySelector("#qTitle");  //Question Title
var choicesEl = document.querySelector("#choices"); //Question Choices
var messageEl = document.querySelector("#message"); //message of correct or wrong
var totalTime = document.querySelector("#totalTime"); //totalTime on landingPage
totalTime.textContent = 150;    //Set the Quiz Time here.
var secondsLeft = parseInt(totalTime.textContent);
var landingPageEl = document.querySelector(".landingPage"); //Set up for hide/unhide
var questionPageEl = document.querySelector(".questionPage"); //Set up for hide/unhide
var endPageEl = document.querySelector(".endPage"); //Set up for hide/unhide
var pEl = document.querySelector("#userScore"); //userScore message on endPage
var userNameInput = document.querySelector("#userName"); //userInitial here
var isDone = false;

var highScores = []; //empty array for localStorage

//QUESTIONS
//------------------------------------------------------------------------------------------------
var questions=[
    {
        title:"Q1: Commonly used data types DO NOT include:",
        choices:["A.strings","B.booleans","C.alerts","D.numbers"],
        answer:"C.alerts"
    },
    {
        title:"Q2: The condition in an if/else statement is enclosed within___.",
        choices:["A.quotes","B.curly brackets","C.parentheses","D.square brackets"],
        answer:"C.parentheses"
    },
    {
        title:"Q3: Arrays in JavaScript can be used to store___.",
        choices:["A.numbers and strings","B.other arrays","C.booleans","D.all of the above"],
        answer:"D.all of the above"
    },
    {
        title:"Q4: Which JavaScript method can target elements in HTML?",
        choices:["A.querySelector","B.getElementById","C.getElementByClass","D.all of the above"],
        answer:"D.all of the above"
    },
    {
        title:"Q5: Which of the following method can make a timer?",
        choices:["A.setInterval","B.clearInterval","C.timeInterval","D.setTime"],
        answer:"A.setInterval"
    },
]

var j = 0; //set questions array index
//--------------------------------------------------------------------------------------------


// Calls init to retrieve data to the page on load
init();

function init(){
    var storedScores = JSON.parse(localStorage.getItem("highScoresString")); 
    if (storedScores !== null){
       highScores = storedScores; 
    } else{ return; }
}
//------------------------------------------------------------------------------------------

function endPage(){
    questionPageEl.setAttribute("style", "display: none");
    endPageEl.setAttribute("style", "display: block");
    pEl.textContent = "Your final score is " + secondsLeft + ".";   
}

//------------------------------------------------------------------------------------------

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft 
  
      if(isDone || secondsLeft <= 0) {
        clearInterval(timerInterval);
        endPage();
      }
    }, 1000);
  }

startButton.addEventListener("click", setTime);

//------------------------------------------------------------------------------------------

startButton.addEventListener("click", startQuiz);

function startQuiz(){
    landingPageEl.setAttribute("style", "display: none");
    questionPageEl.setAttribute("style", "display: block");
    qTitle.textContent = questions[j].title;
    var li = ['li1', 'li2', 'li3', 'li4'];
    for (var i=0; i<li.length; i++){
        li[i] = document.createElement("li");
        li[i].classList.add('choiceList');
        li[i].textContent = questions[j].choices[i];
        choicesEl.appendChild(li[i]);
    }
    //FUNCTION TO GET NEXT QUESTION
    function nextQuestion(){
        qTitle.textContent = questions[j].title;
        for (var i=0; i<li.length; i++){
            li[i].textContent = questions[j].choices[i];
        }
    }
   
    //FUNCTION CLICKING ON QUESTIONS
    //EventListener is set to ol Element

    function clickOnQuest(event){
        
        var element = event.target;
        var userAns = element.textContent;
        if (element.matches("li")){
            //Check user Answer
            if (userAns === questions[j].answer){
                messageEl.textContent = "Correct!"
            }
            else{
                secondsLeft = secondsLeft - 15;
                messageEl.textContent = "Wrong!"
            };
            messageEl.setAttribute("style", "opacity: 1");
            
            //Move to next question
            j++;
            if(j<questions.length){
            nextQuestion();  
            }
            else { 
                isDone = true; 
                endPage();
            }
        }
        else {
            return;
        }
    }
    choicesEl.addEventListener("click", clickOnQuest);
    qTitle.addEventListener("click", checker);
    function checker(){
        messageEl.setAttribute("style", "opacity: 0");
    }
}
//------------------------------------------------------------------------------------------

function submit(){
    var scoreOb = {
        userName:userNameInput.value,
        score:secondsLeft
    }
    userNameInput.value = "";
    highScores.push(scoreOb);
    highScoresString = JSON.stringify(highScores);
    localStorage.setItem("highScoresString", highScoresString);

    window.location.assign("highscore.html");  
}

//------------------------------------------------------------------------------------------
// Submit By Click or Enter
submitButton.addEventListener("click", submit);

userNameInput.addEventListener("keydown", function(e){
    if (13==e.keyCode){
        submit();
    }
});

















// var choiceButtons = document.querySelector("ol");
//     function checker(){
//         document.body.setAttribute("style","background-color: blue");
//     }
//     choiceButtons.addEventListener("click", checker);