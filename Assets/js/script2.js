// variables to reference DOM elements
var scoreListEl = document.querySelector("#scoreList");   //scoreList
var gobackButton = document.querySelector("#goback");  //Button to return landing page
var clearButton = document.querySelector("#clear");  //Button to clear scores
var highscores = ["abc win 200", "cde win 300","fgh win 400","fgh win 400"];

var highscores = JSON.parse(localStorage.getItem("myHighscore"));




gobackButton.addEventListener("click", goback);

function goback(){
    window.location.assign("index.html");
}



  

renderHighScores();

function renderHighScores() {
    var li =[];
    for (var i = 0; i < highscores.length; i++) {
      li[i]= document.createElement("li");
      li[i].textContent=highscores[i].userName;
      scoreListEl.appendChild(li[i]);
    }
}


function clearScores(){
    highscores = [];
}

clearButton.addEventListener("click", clearScores);




// function setWins() {
//     win.textContent = winCounter;
//     localStorage.setItem("winCount", winCounter);
//   }


// function resetGame() {
//     // Resets win and loss counts
//     winCounter = 0;
//     loseCounter = 0;
//     // Renders win and loss counts and sets them into client storage
//     setWins()
//     setLosses()
//   }
//   // Attaches event listener to button
//   resetButton.addEventListener("click", resetGame);
