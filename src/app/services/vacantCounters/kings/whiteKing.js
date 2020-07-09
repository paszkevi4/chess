import store from '../../../store/store.js'
import {vacantCellsSelection, check} from '../../common.js'

const castling = (board) => {
    if ( board[7][4].piece && board[7][4].piece.type == 'king'
        && board[7][7].piece && board[7][7].piece.type == 'rook'
        && !board[7][5].piece
        && !board[7][6].piece ) {
        store.castling.shortWhite = true
        board[7][6].vacant = true;
    } else {
        store.castling.shortWhite = false
    }
    if ( board[7][4].piece && board[7][4].piece.type == 'king'
        && board[7][0].piece && board[7][0].piece.type == 'rook'
        && !board[7][1].piece
        && !board[7][2].piece
        && !board[7][3].piece ) {
        store.castling.longWhite = true
        board[7][2].vacant = true;
    } else {
        store.castling.longWhite = false
    }
}

const whiteKing = (board, selected) => {
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

export default whiteKing