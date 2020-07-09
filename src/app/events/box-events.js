const boxEvents = (root) => {
    root.querySelectorAll('.piece').forEach( (element) => {
        const id = element.dataset.id
        element.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('id', id);
        })
    })
}

export default boxEvents;