import store from '../../../store/store.js'
import {vacantCellsSelection, check} from '../../common.js'

const castling = (board) => {
    if ( board[0][4].piece && board[0][4].piece.type == 'king'
        && board[0][7].piece && board[0][7].piece.type == 'rook'
        && !board[0][5].piece
        && !board[0][6].piece ) {
                store.castling.shortBlack = true
                board[0][6].vacant = true;
                console.log(store.castling)
    } else {
        store.castling.shortBlack = false
    }
    if ( board[0][4].piece && board[0][4].piece.type == 'king'
        && board[0][0].piece && board[0][0].piece.type == 'rook'
        && !board[0][1].piece
        && !board[0][2].piece
        && !board[0][3].piece ) {
                store.castling.longBlack = true
                board[0][2].vacant = true;
    } else {
        store.castling.longBlack = false
    }
}

const king = (board, selected) => {
    const {piece, row, col} = selected;
    for ( let i = -1; i < 2; ++i ) {
        vacantCellsSelection(board, row, +col+i);
        check(board, row, +col+i, selected);
        vacantCellsSelection(board, +row+1, +col+i);
        check(board, +row+1, +col+i, selected);
        vacantCellsSelection(board, row-1, +col+i);
        check(board, row-1, +col+i, selected);
        castling(board);
    }
}

export default king