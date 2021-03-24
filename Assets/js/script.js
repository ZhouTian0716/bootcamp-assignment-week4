var startButton = document.querySelector("#startQuiz")  //Start Quiz Button
var h1El = document.querySelector(".h1El")  //Quiz Title
var pEl = document.querySelector("#pElement")    //Quiz instruction message
var timeEl = document.querySelector("#timer")   //Time Counting
var totalTime = document.querySelector("#totalTime");
var main= document.querySelector("main");
totalTime.textContent = 100000;    //Set the Quiz Time here.
var secondsLeft = parseInt(totalTime.textContent);
//QUESTIONS
//------------------------------------
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
//------------------------------------

function endPage(){
    h1El.textContent = "All done!";
    pEl.setAttribute("style", "display: block; text-align: left");
    pEl.textContent = "Your final score is " + secondsLeft + ".";
}





function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft 
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        endPage();
      }
    }, 1000);
  }

startButton.addEventListener("click", setTime);




startButton.addEventListener("click", startQuiz);

function startQuiz(){
    
    h1El.textContent = questions[0].title;
    h1El.setAttribute("style", "font-size: 180%; text-align: left");
    pEl.setAttribute("style", "display: none");
    startButton.remove();
    
    var listEl = document.createElement("ol");
    main.appendChild(listEl);
    var li = ['li1', 'li2', 'li3', 'li4'];
    for (var i=0; i<li.length; i++){
        li[i] = document.createElement("li");
        li[i].textContent = questions[0].choices[i];
        listEl.appendChild(li[i]);
    }
    
    
   
    
    
    

    //FUNCTION CLICKING ON QUESTIONS
    //EventListener is set to ol Element

    function clickOnQuest(event){
        var element = event.target;
        listEl.disabled = true;
        if (element.matches("li")){
            
            var userAns = element.textContent;
            var message = document.createElement("p"); 
            main.appendChild(message);
            //Actions for right Ans
            if (userAns === questions[0].answer){
                listEl.setAttribute("style", "border-bottom: 5px solid black"); 
                message.textContent = "Correct!"
            }
            //Actions for Wrong Ans
            else{
                listEl.setAttribute("style", "border-bottom: 5px solid black");
                message.textContent = "Wrong!"
            }
            
        }
        else {
            return;
        }
    }
    
    listEl.addEventListener("click", clickOnQuest);
    



}






















// var choiceButtons = document.querySelector("ol");
//     function checker(){
//         document.body.setAttribute("style","background-color: blue");
//     }
//     choiceButtons.addEventListener("click", checker);