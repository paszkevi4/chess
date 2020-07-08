import {vacantCellsSelection, check} from '../common.js'

const rook = (board, selected) => {
    const { piece, row, col } = selected;
    for ( let i = 1; i < 8; i++ ) {
        vacantCellsSelection(board, row, +col+i);
        if (check(board, row, +col+i)) break;
    }
    for ( let i = 1; i < 8; i++ ) {
        vacantCellsSelection(board, row, col-i);
        if (check(board, row, col-i)) break;
    }
    for ( let i = 1; i < 8; i++ ) {
        vacantCellsSelection(board, +row+i, col);
        if (check(board, +row+i, col)) break;
    }
    for ( let i = 1; i < 8; i++ ) {
        vacantCellsSelection(board, row-i, col);
        if (check(board, row-i, col)) break;
    }
}

export default rook