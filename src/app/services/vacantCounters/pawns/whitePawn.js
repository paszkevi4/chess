import {vacantPawnSelector} from './pawnChecker.js'

const whitePawn = (board, selected) => {
    const {piece, row, col} = selected;
    vacantPawnSelector(board, row-1, col, selected);
}

export default whitePawn