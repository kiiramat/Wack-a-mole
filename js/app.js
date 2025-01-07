const board = document.querySelector(".container");

function scoreDisplay(board) {
    const scoreDiv = document.createElement("div");
    scoreDiv.setAttribute("class", "scoreDiv");
    const scoreText = document.createElement("h2");
    scoreText.innerHTML = "Your Score:";
    const scoreValue = document.createElement("h2");
    scoreValue.setAttribute("class", "score");
    scoreValue.innerHTML = 0;

    board.append(scoreDiv);
    scoreDiv.append(scoreText);
    scoreDiv.append(scoreValue);
}

scoreDisplay(board);

function timerDisplay(board) {
    const timerDiv = document.createElement("div");
    timerDiv.setAttribute("class", "timerDiv");
    const timerText = document.createElement("h2");
    timerText.innerHTML = "Time left:";
    const timerValue = document.createElement("h2");
    timerValue.setAttribute("class", "time-left");
    timerValue.innerHTML = 60;

    board.append(timerDiv);
    timerDiv.append(timerText);
    timerDiv.append(timerValue);
}

timerDisplay(board);

function drawBoard(board, numDivs) {
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid");

    for (let i = 0; i < numDivs; i ++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.setAttribute("id", i+1);
        grid.append(square);
    }

    board.append(grid);
}

drawBoard(board, 9);
