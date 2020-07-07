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
            {id: 11, type: 'pawn', symbol: '♙',},
            {id: 13, type: 'knight', symbol: '♘',},
            {id: 14, type: 'bishop', symbol: '♗',},
            {id: 15, type: 'rook', symbol: '♖',},
            {id: 19, type: 'queen', symbol: '♕',},
            {id: 10, type: 'king',symbol: '♔',},
        ],
        black: [
            {id: 21, type: 'pawn', symbol: '♟',},
            {id: 23, type: 'knight', symbol: '♞',},
            {id: 24, type: 'bishop', symbol: '♝',},
            {id: 25, type: 'rook', symbol: '♜',},
            {id: 29, type: 'queen', symbol: '♛',},
            {id: 20, type: 'king',symbol: '♚',},
        ],
    },
}

export default store