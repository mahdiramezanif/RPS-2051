const startButton = document.getElementById('startButton');
const myTitle = document.getElementById('myTitle');
const outcome = document.getElementById('outcome');
let user1Score = 0;
let user2Score = 0;
let user1Choice;
let user2Choice;
let user1played;
let user2played;

document.addEventListener('keydown', function (event) {
    console.log(event.key);
    if (event.key === 'a') {
        user1played = 'paper';
    }
    if (event.key === 's') {
        user1played = 'scissors';
    }
    if (event.key === 'd') {
        user1played = 'rock';
    }
    if (event.key === 'ArrowLeft') {
        user2played = 'paper';
    }
    if (event.key === 'ArrowUp') {
        user2played = 'scissors';
    }
    if (event.key === 'ArrowRight') {
        user2played = 'rock';
    }

});

startButton.addEventListener('click', function () {
    if (user1played == null || user2played == null) {
        alert("both player must select")
        return;
    }
    let result;
    if (user1played === user2played) {
        result = `DRAW! ${user1played} against ${user2played}`;
    } else if ((user1played === 'paper' && user2played === 'rock') ||
        (user1played === 'rock' && user2played === 'scissors') ||
        (user1played === 'scissors' && user2played === 'paper')) {
        result = `Player 1 wins with ${user1played} against ${user2played}`;
        user1Score++;
    } else {
        result = `Player 2 wins with ${user1played} against ${user2played}`;
        user2Score++;
    }
    myTitle.textContent = result;
    outcome.textContent = `Player 1: ${user1Score} Player 2: ${user2Score}`;
    if (startButton.textContent === "START") { startButton.textContent = "PLAY AGAIN"; }
    document.querySelectorAll('input[type=radio]').forEach(choice => {
        choice.checked = false;
    });
    user1played = null;
    user2played = null;
});