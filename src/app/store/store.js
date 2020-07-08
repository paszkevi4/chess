const CELL_COUNT = 8,
    ROW_COUNT = CELL_COUNT;

let cell = {
    piece: null,
    vacant: false,
}

let store = {
    board: new Array(ROW_COUNT).fill(null).map(() => new Array(CELL_COUNT).fill(null).map(() => ({ ...cell }))),
    selected: {
        piece: null,
        row: null,
        col: null,
    },
    pieces: {
        white: [
            {id: 11, type: 'pawn', force: 'white', symbol: '♙',},
            {id: 13, type: 'knight', force: 'white', symbol: '♘',},
            {id: 14, type: 'bishop', force: 'white', symbol: '♗',},
            {id: 15, type: 'rook', force: 'white', symbol: '♖',},
            {id: 19, type: 'queen', force: 'white', symbol: '♕',},
            {id: 10, type: 'king', force: 'white', symbol: '♔',},
        ],
        black: [
            {id: 21, type: 'pawn', force: 'black', symbol: '♟',},
            {id: 23, type: 'knight', force: 'black', symbol: '♞',},
            {id: 24, type: 'bishop', force: 'black', symbol: '♝',},
            {id: 25, type: 'rook', force: 'black', symbol: '♜',},
            {id: 29, type: 'queen', force: 'black', symbol: '♛',},
            {id: 20, type: 'king', force: 'black', symbol: '♚',},
        ],
    },

}

store.board[1].map( (cell) => {cell.piece = store.pieces.black[0]} )
store.board[0][0].piece = store.pieces.black[3]
store.board[0][1].piece = store.pieces.black[1]
store.board[0][2].piece = store.pieces.black[2]
store.board[0][3].piece = store.pieces.black[4]
store.board[0][4].piece = store.pieces.black[5]
store.board[0][5].piece = store.pieces.black[2]
store.board[0][6].piece = store.pieces.black[1]
store.board[0][7].piece = store.pieces.black[3]

store.board[6].map( (cell) => {cell.piece = store.pieces.white[0]} )
store.board[7][0].piece = store.pieces.white[3]
store.board[7][1].piece = store.pieces.white[1]
store.board[7][2].piece = store.pieces.white[2]
store.board[7][3].piece = store.pieces.white[4]
store.board[7][4].piece = store.pieces.white[5]
store.board[7][5].piece = store.pieces.white[2]
store.board[7][6].piece = store.pieces.white[1]
store.board[7][7].piece = store.pieces.white[3]

export default store