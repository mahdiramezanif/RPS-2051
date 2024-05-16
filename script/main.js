const form = document.getElementById('gameForm');
const startButton = document.getElementById('startButton');
const outcome = document.getElementById('outcome');
const myTitle = document.getElementById('myTitle');
let userScore = 0;
let aiScore = 0;

document.querySelectorAll('.gameForm input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', () => {
        document.querySelectorAll('.gameForm input[type="radio"]').forEach(otherRadio => {
            if (otherRadio !== radio) {
                otherRadio.checked = false;
            }
        });
    });
});
startButton.addEventListener('click', function () {
    let selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (!selectedChoice) {
        alert("Please select one option!");
        return;
    }

    const userChoice = parseInt(selectedChoice.value);
    const aiChoice = Math.floor(Math.random() * 3) + 1;

    let result;
    let myColor;
    if (userChoice === aiChoice) {
        result = "DRAW";
        myColor = "color: white;";
    } else if ((userChoice === 1 && aiChoice === 3) ||
        (userChoice === 2 && aiChoice === 1) ||
        (userChoice === 3 && aiChoice === 2)) {
        result = "You Win!";
        myColor = "color: var(--grWin);";
        userScore++;
    } else {
        result = "You Lost!";
        myColor = "color: var(--reLost);";
        aiScore++;
    }

    const choices = ["rock", "paper", "scissors"];
    myTitle.textContent = `${result}`;
    myTitle.style = myColor;
    outcome.textContent = `Computer Chose ${choices[aiChoice - 1]}`;
    document.querySelector('p').textContent = `You ${userScore} : ${aiScore} AI`;

    if (startButton.textContent === "START") {
        startButton.textContent = "PLAY AGAIN";
    }

    selectedChoice.checked = false;
});