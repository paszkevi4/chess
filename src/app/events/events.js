import boxEvents from './box-events.js'
import boardEvents from './board-events.js'

const initEvents = (root, store, render) => {
    boxEvents(root, render)
    boardEvents(root, store, render)
}

export default initEvents