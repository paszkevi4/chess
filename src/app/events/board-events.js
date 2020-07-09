import pieceMoving from '../services/pieceMoving.js'

const castlingMove = ( castling, board, pieces, selected, row, col ) => {
    if (selected.piece.force == 'white' ) {
        if ( row == 7 && col == 2 && castling.longWhite ) {
            board[7][0].piece = null
            board[7][3].piece = pieces.white[3]
        } else if ( row == 7 && col == 6 && castling.shortWhite ) {
            board[7][7].piece = null
            board[7][5].piece = pieces.white[3]
        }
    }
    if (selected.piece.force == 'black' ) {
        if ( row == 0 && col == 2 && castling.longBlack ) {
            board[0][0].piece = null
            board[0][3].piece = pieces.black[3]
        } else if ( row == 0 && col == 6 && castling.shortBlack ) {
            board[0][7].piece = null
            board[0][5].piece = pieces.black[3]
        }
    }
    /*board[7][7].piece = null
    board[7][5].piece = pieces.white[3]*/
}

const boardEvents = (root, store, render) => {
    root.querySelectorAll('.cell').forEach(element => {
        const {row, col} = element.dataset
        element.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        element.addEventListener('drop', (event) => {
            event.preventDefault();
            const id = event.dataTransfer.getData('id');
            let piece = store.pieces.white.find( (_piece) => _piece.id == id );
            if (!piece) piece = store.pieces.black.find( (_piece) => _piece.id == id );
            store.board[+row][+col].piece = { ...piece };
            render();
        });

        element.addEventListener('click', (event) => {
            const piece = store.board[row][col].piece;
            if ( piece && !store.selected.piece ) {
                store.selected = { piece, row, col }
                store.board = pieceMoving(store.board, store.selected)
            }
            if ( piece && store.selected.piece ) {
                if ( store.selected.piece.force === piece.force || !store.board[row][col].vacant ) {
                    store.selected = { piece, row, col }
                    store.board = pieceMoving(store.board, store.selected)
                } else if ( store.board[row][col].vacant && store.selected.piece.force !== piece.force ) {
                    store.board[row][col].piece = store.selected.piece
                    store.board[store.selected.row][store.selected.col].piece = null;
                    store.selected = { piece: null, row: null, col: null }
                    store.board.map((_row) => {_row.map((_cell) => {_cell.vacant = false})});
                }
            }
            if ( !piece && store.board[row][col].vacant ) {
                if ( store.selected.piece.type == 'king' ) {
                    castlingMove( store.castling, store.board, store.pieces, store.selected, row, col )
                }
                store.board[row][col].piece = store.selected.piece
                store.board[store.selected.row][store.selected.col].piece = null;
                store.selected = { piece: null, row: null, col: null }
                store.board.map((_row) => {_row.map((_cell) => {_cell.vacant = false})});
            }
            render();
        })
    });
};

export default boardEvents