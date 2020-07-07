const pieceMoving = (board, row, col, piece) => {
    /*const piece = board[row][col].piece;*/
    console.log(board)
    switch (piece.type) {
        case 'pawn':
            board.map((_row) => {_row.map((_cell) => {_cell.vacant = true})});
        case 'knight':
            board.map((_row) => {_row.map((_cell) => {_cell.vacant = true})});
        case 'bishop':
            board.map((_row) => {_row.map((_cell) => {_cell.vacant = true})});
        case 'rook':
            board.map((_row) => {_row.map((_cell) => {_cell.vacant = true})});
        case 'queen':
            board.map((_row) => {_row.map((_cell) => {_cell.vacant = true})});
        case 'king':
            board.map((_row) => {_row.map((_cell) => {_cell.vacant = true})});
    }
    return board;
}

export default pieceMoving