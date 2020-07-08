export const vacantPawnSelector = (board, row, col, selected) => {
    if ( !board[row][col].piece ) {
        board[row][col].vacant = true;
    }
    if ( board[row][+col+1].piece ) {
        board[row][+col+1].vacant = true;
    }
    if (board[row][col-1].piece) {
        board[row][col-1].vacant = true;
    }
}

const checker1 = () => {

}