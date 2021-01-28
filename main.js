console.log("Clicking Game");

//select lead display
let leadPlayer = document.querySelector("#leadPlayer");
// select score displays
let smallScoreOne = document.querySelector("#smallScoreOne");
let largeScoreOne = document.querySelector("#largeScoreOne");
let smallScoreTwo = document.querySelector("#smallScoreTwo");
let largeScoreTwo = document.querySelector("#largeScoreTwo");
// select player buttons
let playerOne = document.querySelector("#playerOne");
let playerTwo = document.querySelector("#playerTwo");

// BONUS -------------------------------------------

// select winning number buttons
let winningNumberBtns = document.querySelectorAll(".winningNumberBtn");
// add an outline to the 10 button by default
winningNumberBtns[0].classList.add("selectedButton");
// function to determine the winning number and update the styling of the selected button
updateStopCounting = (event) => {
    // console.log("Update Stop Counting"); // check that function is being called
    // console.log(parseInt(event.target.innerText)); // check that winning number can be set by button text

    // update winning number
    stopCounting = parseInt(event.target.innerText);
    // update styling of non-selected buttons
    winningNumberBtns.forEach(btn => {
        btn.classList.remove("selectedButton");
    });
    // update styling of selected button
    event.target.classList.add("selectedButton");
}
// add event listener to all winning number buttons
winningNumberBtns.forEach(btn => {
    btn.addEventListener("click", updateStopCounting);
});

// BONUS -------------------------------------------

// select color buttons
let plumCounterBtn = document.querySelector(".plumCounterBtn");
let blueCounterBtn = document.querySelector(".blueCounterBtn");
let purpleCounterBtn = document.querySelector(".purpleCounterBtn");

// add event listeners to all color buttons to change the score styling according to the button
plumCounterBtn.addEventListener("click", () => {
    largeScoreOne.setAttribute("style", "color:#A03E99");
    largeScoreTwo.setAttribute("style", "color:#A03E99");
});
blueCounterBtn.addEventListener("click", () => {
    largeScoreOne.setAttribute("style", "color:#7A93AC");
    largeScoreTwo.setAttribute("style", "color:#7A93AC");
})
purpleCounterBtn.addEventListener("click", () => {
    largeScoreOne.setAttribute("style", "color:#AFB3F7");
    largeScoreTwo.setAttribute("style", "color:#AFB3F7");
});

// values to keep up with scores
let playerOneScore = 0;
let playerTwoScore = 0;
// value for winning number
let stopCounting = 10;

// update the player one score on click
updatePlayerOneScore = () => {
    playerOneScore++; // increase the player score
    // console.log(playerOneScore); // check that the function works

    // update the score displays
    smallScoreOne.innerText = `Score : ${playerOneScore}`; 
    largeScoreOne.innerText = `${playerOneScore}`;

    // call function to update the lead player
    updateLeadPlayer();
}
// update the player two score on click
updatePlayerTwoScore = () => {
    playerTwoScore++; // increase the player score
    // console.log(playerTwoScore); // check that the function works

    // update the score displays
    smallScoreTwo.innerText = `Score : ${playerTwoScore}`;
    largeScoreTwo.innerText = `${playerTwoScore}`;
    
    // call function to update the lead player
    updateLeadPlayer();
}
// update the lead player when the player one or player two score are updated
updateLeadPlayer = () => {
    // check that the function is being called
    // console.log(`One : ${playerOneScore}`); 
    // console.log(`Two : ${playerTwoScore}`);

    // determine winning player or lead player
    if (playerOneScore == stopCounting || playerTwoScore == stopCounting) {
        // if either player has reached the winning number alert the lead player
        if (playerOneScore > playerTwoScore) {
            alert("Player One Won!");
        } else if (playerOneScore < playerTwoScore) {
            alert("Player Two Won!");
        }
        // call a function to reset the game
        resetGame();
    } else if (playerOneScore > playerTwoScore) {
        // if player one is in the lead update lead player accordingly
        leadPlayer.innerText = "Player One";
    } else if (playerOneScore < playerTwoScore) {
        // if player two is in the lead update lead player accordingly
        leadPlayer.innerText = "Player Two";
    } else {
        // if players are tied update lead player accordingly
        leadPlayer.innerText = "TIE";
    }
}

// reset the game when the lead player has reaching the winning number
resetGame = () => {
    // console.log("Reset Game!"); // check that the function is being called
    
    // update lead player display to placeholder
    leadPlayer.innerText = "Click a player button to start!";
    // reset player scores to zero
    playerOneScore = 0;
    playerTwoScore = 0;
    // reset player score displays
    smallScoreOne.innerText = `Score : ${playerOneScore}`;
    largeScoreOne.innerText = `${playerOneScore}`;
    smallScoreTwo.innerText = `Score : ${playerTwoScore}`;
    largeScoreTwo.innerText = `${playerTwoScore}`;

    // BONUS -------------------------------------------
    // reset winning number to default
    stopCounting = 10;
    // update styling of non-selected buttons
    winningNumberBtns.forEach(btn => {
        btn.classList.remove("selectedButton");
    });
    // update styling of default selected button
    winningNumberBtns[0].classList.add("selectedButton");
}

// add event listeners to the both player buttons
playerOne.addEventListener("click", updatePlayerOneScore);
playerTwo.addEventListener("click", updatePlayerTwoScore);