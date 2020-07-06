import boxEvents from './box-events.js'
import boardEvents from './board-events.js'

const initEvents = (root) => {
    boxEvents(root)
    boardEvents(root)
}

export default initEvents