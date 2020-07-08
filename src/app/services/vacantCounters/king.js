import {vacantCellsSelection} from '../common.js'

const king = (board, selected) => {
    const {piece, row, col} = selected;
    for ( let i = -1; i < 2; ++i ) {
        vacantCellsSelection(board, row, +col+i);
        vacantCellsSelection(board, +row+1, +col+i);
        vacantCellsSelection(board, row-1, +col+i);
    }
}

export default king