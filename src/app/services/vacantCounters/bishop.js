import {vacantCellsSelection, check} from '../common.js'

const bishop = (board, selected) => {
    const { piece, row, col } = selected;
    for ( let i = 1; i < 8; i++ ) {
        vacantCellsSelection(board, +row+i, +col+i);
        if (check(board, +row+i, +col+i)) break;
    }
    for ( let i = 1; i < 8; i++ ) {
        vacantCellsSelection(board, row-i, col-i);
        if (check(board, row-i, col-i)) break;
    }
    for ( let i = 1; i < 8; i++ ) {
        vacantCellsSelection(board, +row+i, col-i);
        if (check(board, +row+i, col-i)) break;
    }
    for ( let i = 1; i < 8; i++ ) {
        vacantCellsSelection(board, row-i, +col+i);
        if (check(board, row-i, +col+i)) break;
    }
}

export default bishop