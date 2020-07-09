export const vacantPawnSelector = (board, row, col, selected) => {
    if ( !board[row][col].piece ) {
        board[row][col].vacant = true;
    }
    if ( board[row][+col+1] && board[row][+col+1].piece && board[row][+col+1].piece.force !== selected.piece.force) {
        board[row][+col + 1].vacant = true;
    }
    if ( board[row][col-1] && board[row][+col-1].piece && board[row][col-1].piece.force !== selected.piece.force ) {
        board[row][col-1].vacant = true;
    }
    if ( row == 5 && selected.piece.force == 'white' ) {
        board[row-1][col].vacant = true;
    }
    if ( row == 2 && selected.piece.force == 'black' ) {
        board[+row+1][col].vacant = true;
    }
}