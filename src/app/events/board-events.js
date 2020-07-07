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
            if ( !piece ) { return }
            store.selected = { piece, row, col }
            console.log (store.selected);
            store.board = pieceMoving(store.board, +row, +col, piece)
            render();
        })
    });
};

export default boardEvents