import {vacantPawnSelector} from './pawnChecker.js'

const blackPawn = (board, selected) => {
    const {piece, row, col} = selected;
    vacantPawnSelector(board, +row+1, col);
}

export default blackPawn