const board = document.querySelector(".container");

function scoreDisplay(board) {
    const scoreDiv = document.createElement("div");
    scoreDiv.setAttribute("class", "score");
    const scoreText = document.createElement("h2");
    scoreText.innerHTML = "Your Score:";
    const scoreValue = document.createElement("h2");
    scoreValue.innerHTML = 0;

    board.append(scoreDiv);
    scoreDiv.append(scoreText);
    scoreDiv.append(scoreValue);
}

scoreDisplay(board)

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
