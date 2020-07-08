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

export default store