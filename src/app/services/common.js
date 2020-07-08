export const vacantCellsSelection = (board, row, col) => {
    if ( row >= 0 && row <= 7 && col >= 0 && col <= 7 ) {
        board[row][col].vacant = true;
    }
}

export const check = (board, row, col) => {
    let a = row >= 0 && row <= 7 && col >= 0 && col <= 7;
    return a
        && board[row][col].piece
}