const boxEvents = (root) => {
    root.querySelectorAll('.piece').forEach( (element) =>
        element.addEventListener ('dragstart', (event) => {
            event.dataTransfer.setData('piece_type', 'king');
            console.log ('drag start')
        })
    )
}

export default boxEvents;