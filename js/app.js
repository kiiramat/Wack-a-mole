const board = document.querySelector(".container");
const numDivs = 9;

function scoreDisplay(board) {
    const scoreDiv = document.createElement("div");
    scoreDiv.setAttribute("class", "scoreDiv");
    const scoreLabel = document.createElement("h2");
    scoreLabel.innerHTML = "Your Score:";
    const scoreValue = document.createElement("h2");
    scoreValue.setAttribute("class", "score");
    scoreValue.innerHTML = 0;

    board.append(scoreDiv);
    scoreDiv.append(scoreLabel);
    scoreDiv.append(scoreValue);
}

scoreDisplay(board);

function timerDisplay(board) {
    const timerDiv = document.createElement("div");
    timerDiv.setAttribute("class", "timerDiv");
    const timerLabel = document.createElement("h2");
    timerLabel.innerHTML = "Time left:";
    const timerValue = document.createElement("h2");
    timerValue.setAttribute("class", "time-left");
    timerValue.innerHTML = 60;

    board.append(timerDiv);
    timerDiv.append(timerLabel);
    timerDiv.append(timerValue);
}

timerDisplay(board);

function startButton() {
    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "buttonDiv");
    const button = document.createElement("button");
    button.innerHTML = "Start";
    button.addEventListener("click", () => {
        buttonDiv.classList.add("hidden");
        moveMole();
    });

    board.append(buttonDiv);
    buttonDiv.append(button);
}

startButton();

function drawBoard(board) {
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid");

    for (let i = 0; i < numDivs; i ++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.setAttribute("id", i);
        grid.append(square);
    }

    board.append(grid);
}

drawBoard(board, 9);

const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole");
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");
}

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 500);
}

