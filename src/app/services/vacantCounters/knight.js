import {vacantCellsSelection} from '../common.js'

const knight = (board, selected) => {
    const {piece, row, col} = selected;
    vacantCellsSelection(board, row-2, col-1);
    vacantCellsSelection(board, row-2, +col+1);
    vacantCellsSelection(board, row-1, col-2);
    vacantCellsSelection(board, row-1, +col+2);
    vacantCellsSelection(board, +row+1, col-2);
    vacantCellsSelection(board, +row+1, +col+2);
    vacantCellsSelection(board, +row+2, col-1);
    vacantCellsSelection(board, +row+2, +col+1);
}

export default knight