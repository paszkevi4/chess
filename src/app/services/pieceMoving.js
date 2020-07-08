const vacantCellsSelection = (board, row, col) => {
    if ( row >= 0 && row <= 7 && col >= 0 && col <= 7) {
        board[row][col].vacant = true;
    }
}

const pieceMoving = (board, selected) => {
    const { piece, row, col } = selected
    console.log(board)
    board.map((_row) => {_row.map((_cell) => {_cell.vacant = false})});
    switch (piece.type) {
        case 'Pawn':
            vacantCellsSelection(board, row-1, col);
            break
        case 'knight':
            vacantCellsSelection(board, row-2, col-1);
            vacantCellsSelection(board, row-2, +col+1);
            vacantCellsSelection(board, row-1, col-2);
            vacantCellsSelection(board, row-1, +col+2);
            vacantCellsSelection(board, +row+1, col-2);
            vacantCellsSelection(board, +row+1, +col+2);
            vacantCellsSelection(board, +row+2, col-1);
            vacantCellsSelection(board, +row+2, +col+1);

            break
        case 'bishop':
            for ( let i = 0; i < 8; i++ ) {
                vacantCellsSelection(board, +row+i, +col+i);
                vacantCellsSelection(board, row-i, col-i);
                vacantCellsSelection(board, +row+i, col-i);
                vacantCellsSelection(board, row-i, +col+i);
            }
            break
        case 'rook':
            for ( let i = 0; i < 8; i++ ) {
                vacantCellsSelection(board, i, col);
                vacantCellsSelection(board, row, i);
            }
            break
        case 'queen':
            for ( let i = 0; i < 8; i++ ) {
                vacantCellsSelection(board, i, col);
                vacantCellsSelection(board, row, i);
                vacantCellsSelection(board, +row+i, +col+i);
                vacantCellsSelection(board, row-i, col-i);
                vacantCellsSelection(board, +row+i, col-i);
                vacantCellsSelection(board, row-i, +col+i);
            }
            break
        case 'king':

            for ( let i = -1; i < 2; ++i ) {
                vacantCellsSelection(board, row, +col+i);
                vacantCellsSelection(board, +row+1, +col+i);
                vacantCellsSelection(board, row-1, +col+i);
            }
            break
        default:
            return;
    }
    return board;
}

export default pieceMoving