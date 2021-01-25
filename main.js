console.log("Clicking Game");

//select lead display
let leadPlayer = document.querySelector("#leadPlayer")
// select score displays
let smallScoreOne = document.querySelector("#smallScoreOne");
let largeScoreOne = document.querySelector("#largeScoreOne");
let smallScoreTwo = document.querySelector("#smallScoreTwo");
let largeScoreTwo = document.querySelector("#largeScoreTwo");
// select player buttons
let playerOne = document.querySelector("#playerOne");
let playerTwo = document.querySelector("#playerTwo");

// BONUS
let winningNumberBtns = document.querySelectorAll(".winningNumberBtn");
winningNumberBtns[0].classList.add("selectedButton");
updateStopCounting = (event) => {
    // console.log("Update Stop Counting");
    // console.log(parseInt(event.target.innerText));
    stopCounting = parseInt(event.target.innerText);
    winningNumberBtns.forEach(btn => {
        btn.classList.remove("selectedButton");
    });
    event.target.classList.add("selectedButton");
}
winningNumberBtns.forEach(btn => {
    btn.addEventListener("click", updateStopCounting);
});

// BONUS
let plumCounterBtn = document.querySelector(".plumCounterBtn");
let blueCounterBtn = document.querySelector(".blueCounterBtn");
let purpleCounterBtn = document.querySelector(".purpleCounterBtn");
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

updatePlayerOneScore = () => {
    playerOneScore++;
    // console.log(playerOneScore);
    smallScoreOne.innerText = `Score : ${playerOneScore}`;
    largeScoreOne.innerText = `${playerOneScore}`;
    updateLeadPlayer();
}
updatePlayerTwoScore = () => {
    playerTwoScore++;
    // console.log(playerTwoScore);
    smallScoreTwo.innerText = `Score : ${playerTwoScore}`;
    largeScoreTwo.innerText = `${playerTwoScore}`;
    updateLeadPlayer();
}

updateLeadPlayer = () => {
    // console.log(`One : ${playerOneScore}`);
    // console.log(`Two : ${playerTwoScore}`);
    if (playerOneScore == stopCounting || playerTwoScore == stopCounting) {

        if (playerOneScore > playerTwoScore) {
            alert("Player One Won!");
        } else if (playerOneScore < playerTwoScore) {
            alert("Player Two Won!");
        }

        leadPlayer.innerText = "Click a player button to start!";

        resetGame();
    } else if (playerOneScore > playerTwoScore) {
        leadPlayer.innerText = "Player One";
    } else if (playerOneScore < playerTwoScore) {
        leadPlayer.innerText = "Player Two";
    } else {
        leadPlayer.innerText = "TIE";
    }
}

resetGame = () => {
    // console.log("Reset Game!");
    playerOneScore = 0;
    playerTwoScore = 0;
    smallScoreOne.innerText = `Score : ${playerOneScore}`;
    largeScoreOne.innerText = `${playerOneScore}`;
    smallScoreTwo.innerText = `Score : ${playerTwoScore}`;
    largeScoreTwo.innerText = `${playerTwoScore}`;

    // BONUS
    winningNumberBtns.forEach(btn => {
        btn.classList.remove("selectedButton");
    });
}

playerOne.addEventListener("click", updatePlayerOneScore);
playerTwo.addEventListener("click", updatePlayerTwoScore);