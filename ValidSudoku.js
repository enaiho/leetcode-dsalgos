

const isValidSudoku = (board) =>{

    const seen = new Set();
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){

            if( board[i][j] != "." ) {


                let a = seen.has(` ${board[i][j]} in row ${i}`);
                let b = seen.has(` ${board[i][j]} in col ${j}`);
                let c = seen.has(` ${board[i][j]} in row and col ${Math.floor(i / 3)} - ${Math.floor(j / 3)}`)

                if(a || b || c ) {
                    return false;
                }

                seen.add(` ${board[i][j]} in row ${i}`);
                seen.add(` ${board[i][j]} in col ${j}`);
                seen.add(` ${board[i][j]} in row and col ${Math.floor(i / 3)} - ${Math.floor(j / 3)}`);
            }
        }
    }

    return true;
}


const output = isValidSudoku([
    [".",".",".",".","5",".",".","1","."],
    [".","4",".","3",".",".",".",".","."],
    [".",".",".",".",".","3",".",".","1"],
    ["8",".",".",".",".",".",".","2","."],
    [".",".","2",".","7",".",".",".","."],
    [".","1","5",".",".",".",".",".","."],
    [".",".",".",".",".","2",".",".","."],
    [".","2",".","9",".",".",".",".","."],
    [".",".","4",".",".",".",".",".","."]
]);

console.log(output);