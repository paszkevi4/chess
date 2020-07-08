import whitePawn from './vacantCounters/pawns/whitePawn.js'
import blackPawn from './vacantCounters/pawns/blackPawn.js'
import bishop from './vacantCounters/bishop.js'
import knight from './vacantCounters/knight.js'
import rook from './vacantCounters/rook.js'
import queen from './vacantCounters/queen.js'
import king from './vacantCounters/king.js'

const pieceMoving = (board, selected) => {
    const { piece, row, col } = selected
    console.log(board)
    board.map((_row) => {_row.map((_cell) => {_cell.vacant = false})});
    switch (piece.type) {
        case 'pawn':
            switch (piece.force) {
                case 'white':
                    console.log(piece.force)
                    whitePawn(board, selected);
                    break
                case 'black':
                    console.log(piece.force)
                    blackPawn(board, selected);
                    break
            }
            break
        case 'knight':
            knight(board, selected);
            break
        case 'bishop':
            bishop(board, selected);
            break
        case 'rook':
            rook(board, selected);
            break
        case 'queen':
            queen(board, selected);
            break
        case 'king':
            king(board, selected);
            break
        default:
            return;
    }
    return board;
}

export default pieceMoving