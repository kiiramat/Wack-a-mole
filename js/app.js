const mainContainer = document.querySelector(".container");
let time = 5;
let myTimer = null;

function scoreDisplay(mainContainer) {
    const scoreDiv = document.createElement("div");
    scoreDiv.setAttribute("class", "scoreDiv");
    const scoreLabel = document.createElement("h2");
    scoreLabel.innerHTML = "Your Score:";
    const scoreValue = document.createElement("h2");
    scoreValue.setAttribute("class", "score");
    scoreValue.innerHTML = 0;

    mainContainer.append(scoreDiv);
    scoreDiv.append(scoreLabel);
    scoreDiv.append(scoreValue);
}

function timerDisplay(mainContainer) {
    const timerDiv = document.createElement("div");
    timerDiv.setAttribute("class", "timerDiv");
    const timerLabel = document.createElement("h2");
    timerLabel.innerHTML = "Time left:";
    const timerValue = document.createElement("h2");
    timerValue.setAttribute("class", "time-left");
    timerValue.innerHTML = time;

    mainContainer.append(timerDiv);
    timerDiv.append(timerLabel);
    timerDiv.append(timerValue);
}

function startButton() {
    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "buttonDiv");
    const button = document.createElement("button");
    button.innerHTML = "Start";
    button.addEventListener("click", () => {
        buttonDiv.classList.add("hidden");
        moveMole();
        myTimer = setInterval(countDown, 1000);
    });

    mainContainer.append(buttonDiv);
    buttonDiv.append(button);
}

function drawBoard(mainContainer, numDivs) {
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", "gridDiv");

    for (let i = 0; i < numDivs; i ++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.setAttribute("id", i);
        gridDiv.append(square);
    }

    mainContainer.append(gridDiv);
}

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole");
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");

    hitPosition = randomSquare.id;
}

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 500);
}

function countDown() {
    time --;
    timeLeft.innerHTML = time;
}

scoreDisplay(mainContainer);
timerDisplay(mainContainer);
startButton();
drawBoard(mainContainer, 9);

const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector(".time-left");
const score = document.querySelector(".score");

let result = 0;
let hitPosition

squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if (square.id == hitPosition) {
            result ++;
            score.innerHTML = result;
            hitPosition = null;
        }
    })
})