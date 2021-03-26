// variables to reference DOM elements
var scoreListEl = document.querySelector("#scoreList");   //scoreList
var gobackButton = document.querySelector("#goback");  //Button to return landing page
var clearButton = document.querySelector("#clear");  //Button to clear scores
// Array contains Objects of user names and scores
var storedScores = JSON.parse(localStorage.getItem("highScoresString"));

//Re-render page every time
renderPage();

function renderPage(){
    sortStorage();
    renderList();
}

//Rearrange local storedScores to sort it in decending order
function sortStorage(){
    if(storedScores !== null) {
    storedScores = storedScores.sort((a,b) => {
        if (a.score > b.score){
            return -1
        } else {
            return 1
        }
    })}
}

  
//Access to localStorage and Render page.


function renderList() {
    if(storedScores !== null) {
        var scoreList = [];
        var j = 0;
        scoreList.length = storedScores.length;
        for (var i = 0; i < storedScores.length; i++) {
            j++;
            scoreList[i] = document.createElement("li");
            scoreList[i].classList.add('scoreList');
            scoreList[i].textContent = "#No "+ j + ": "+ storedScores[i].userName + 
            "  got  " + storedScores[i].score + "  points.";
        scoreListEl.appendChild(scoreList[i]);
        }
    }
}


//Click to go back new quiz
gobackButton.addEventListener("click", goback);

function goback(){
    window.location.assign("index.html");
}


//Click to Clear localStorage
clearButton.addEventListener("click", clearScores);

function clearScores(){
    localStorage.setItem("highScoresString" , null);
    window.location.assign("highscore.html");
}





