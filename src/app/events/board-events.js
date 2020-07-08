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
            if ( !piece && store.board[row][col].vacant ) {
                store.board[row][col].piece = store.selected.piece
                store.board[store.selected.row][store.selected.col].piece = null;
                store.selected = { piece: null, row: null, col: null }
                store.board.map((_row) => {_row.map((_cell) => {_cell.vacant = false})});
            } else if ( piece ) {
                store.selected = { piece, row, col }
                console.log (store.selected);
                store.board = pieceMoving(store.board, store.selected)
            }
            render();
        })
    });
};

export default boardEvents