import bishop from './bishop.js'
import rook from './rook.js'

const queen = (board, selected) => {
    bishop(board, selected);
    rook(board, selected);
}

export default queen