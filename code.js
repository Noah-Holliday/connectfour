let currentPlayer = "red";

let board = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
]

const columns = document.querySelectorAll(".column");
console.log(columns);


checkClick = function (event) {
    let cell = event.target;
    let cellid = event.target.id;
    if (board[cellid].length > 5) {
        return;
    }
    if (currentPlayer === "red") {
        let checker = document.createElement("div");
        checker.classList.add("checker", "red");
        cell.appendChild(checker);
        board[cellid].push(0);
        console.log(board);
        checkWin();
        currentPlayer = "black";
    }
    else if (currentPlayer = "black") {
        let checker = document.createElement("div");
        checker.classList.add("checker", "black");
        cell.appendChild(checker);
        board[cellid].push(1);
        console.log(board);
        checkWin();
        currentPlayer = "red";
    }
}



function checkWin() {

    for (let x = 0; x < board.length; x++) {
        let column = board[x];
        console.log("This is column " + x + ": " + column)
        for(let y = 0; y < column.length; y++) {
            let row = column[y];
            console.log("This is row " + y + ": " + row)
        
        
        if(row === board[x][y+1] && row === board[x][y+2] && row === board[x][y+3]){
            alert (currentPlayer + " win");
        }  
        if(row === board[x+1][y] && row === board[x+2][y] && row === board[x+3][y]) {
            alert (currentPlayer + " win");
        }
        if(row === board[x+1][y+1] && row === board[x+2][y+2] && row === board[x+3][y+3]){
            alert (currentPlayer + " win");
        }  
        }}}

for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener('click', checkClick);
}
