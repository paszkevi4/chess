const boardEvents = (root) => {
    root.querySelectorAll('.cell').forEach(element => {
        element.addEventListener('dragover', (event) => {
            event.preventDefault();
            console.log ('drag over')
        });
        element.addEventListener('drop', (event) => {
            event.preventDefault();
            const piece_type = event.dataTransfer.getData('piece_type');
            console.log (piece_type)
        });
    });
};

export default boardEvents