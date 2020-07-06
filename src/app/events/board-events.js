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
            console.log ([row, col], id, piece);
            store.board[+row][+col] = piece;
            render();
        });
    });
};

export default boardEvents