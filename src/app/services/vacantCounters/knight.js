import {vacantCellsSelection, check} from '../common.js'

const knight = (board, selected) => {
    const {piece, row, col} = selected;
    vacantCellsSelection(board, row-2, col-1);
    check(board, row-2, col-1, selected);
    vacantCellsSelection(board, row-2, +col+1);
    check(board, row-2, +col+1, selected);
    vacantCellsSelection(board, row-1, col-2);
    check(board, row-1, col-2, selected);
    vacantCellsSelection(board, row-1, +col+2);
    check(board, row-1, +col+2, selected);
    vacantCellsSelection(board, +row+1, col-2);
    check(board, +row+1, col-2, selected);
    vacantCellsSelection(board, +row+1, +col+2);
    check(board, +row+1, +col+2, selected);
    vacantCellsSelection(board, +row+2, col-1);
    check(board, +row+2, col-1, selected);
    vacantCellsSelection(board, +row+2, +col+1);
    check(board, +row+2, +col+1, selected);
}

export default knight