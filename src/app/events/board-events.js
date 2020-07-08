import pieceMoving from '../services/pieceMoving.js'

const boardEvents = (root, store, render) => {
    root.querySelectorAll('.cell').forEach(element => {
        const {row, col} = element.dataset

        element.addEventListener('dragover', (event) => {
            event.preventDefault();
            console.log ('drag over')
        });

        element.addEventListener('drop', (event) => {
            event.preventDefault();
            const id = event.dataTransfer.getData('id');
            let piece = store.pieces.white.find( (_piece) => _piece.id == id );
            if (!piece) piece = store.pieces.black.find( (_piece) => _piece.id == id );
            console.log (store.board);
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