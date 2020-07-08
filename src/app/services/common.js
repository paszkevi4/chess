export const vacantCellsSelection = (board, row, col) => {
    if ( row >= 0 && row <= 7 && col >= 0 && col <= 7 ) {
        board[row][col].vacant = true;
    }
}

export const check = (board, row, col, selected) => {
    let a = row >= 0 && row <= 7 && col >= 0 && col <= 7;
    if ( a && board[row][col].piece && selected.piece.force === board[row][col].piece.force ) {
        board[row][col].vacant = false;
        return a
            && board[row][col].piece
    } else {
        return a
            && board[row][col].piece
    }

}