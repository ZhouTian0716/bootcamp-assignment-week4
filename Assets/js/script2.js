// variables to reference DOM elements
var scoreListEl = document.querySelector("#scoreList");   //scoreList
var gobackButton = document.querySelector("#goback");  //Button to return landing page
var clearButton = document.querySelector("#clear");  //Button to clear scores

var storedScores = JSON.parse(localStorage.getItem("highScoresString")); // Array contains Objects of user names and scores





gobackButton.addEventListener("click", goback);

function goback(){
    window.location.assign("index.html");
}



  

renderHighScores();


function renderHighScores() {
    var scoreList = [];
    scoreList.length = storedScores.length;
    for (var i = 0; i < storedScores.length; i++) {
       
        scoreList[i] = document.createElement("li");
        scoreList[i].textContent = storedScores[i].userName + "  got  " + storedScores[i].score + "  points.";
      scoreListEl.appendChild(scoreList[i]);
    }
}


function clearScores(){
    localStorage.setItem("highScoresString" , null);
    window.location.assign("highscore.html");
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
