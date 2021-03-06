​
//------------------------------------
//QUESTIONS
//------------------------------------
​
// list of all questions, choices, and answers (could use separate js file)
​
​
//------------------------------------
//GAME LOGIC
//------------------------------------
​
//EVENT LISTENERS
//start event listenter
//submit score listener
​
​
//variables to keep track of quiz state
// variables to reference DOM elements
// import sound effects (optional)
​
//STARTING QUIZ
	// hide start screen
	// un-hide questions section
	// start timer (see TIME)
	// show starting time
​
//GETTING QUESTIONS
	// get current question object from array
	// update title with current question
	// clear out any old question choices
	// loop over choices
	// create new button for each choice
	// attach click event listener to each choice
	// display on the page
​
​
//CLICKING ON QUESTIONS
	// check if user guessed wrong
	// penalize time
	// display new time on page
	// play "wrong" sound effect
	// play "right" sound effect
	// flash right/wrong feedback on page for half a second
	// move to next question
	// check if we've run out of questions
​
​
//ENDING QUIZ - either when question ends or time endss
	// stop timer
	// show end screen
	// show final score
	// hide questions section
​
​
// TIME
	// update time
	// check if user ran out of time
​
​
// SAVING SCORE
	// get value of input box
	// make sure value wasn't empty
	// get saved scores from localstorage, or if not any, set to empty array
	// format new score object for current user
	// save to localstorage
	// redirect to next page
	// "13" represents the enter key
	// user clicks button to submit initials
	// user clicks button to start quiz
​
​
//------------------------------------
//HIGHSCORES LOGIC
//------------------------------------
​
​
//HIGH SCORE LOGIC (separate script for separate html page)
	// either get scores from localstorage or set to empty array
	// sort highscores by score property in descending order
	// create li tag for each high score
	// display on page
	// run function when page loads