const board = document.querySelector(".container");

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
