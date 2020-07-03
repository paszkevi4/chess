const CELL_COUNT = 8
const ROW_COUNT = CELL_COUNT

let row = new Array(CELL_COUNT).fill(`<div id="cell">1</div>`).join("");
let board = new Array(ROW_COUNT).fill(`<div id="row">${row}</div>`).join("");

const renderBoard = () => `
    <div id="board">
        ${board}
    </div>
`

console.log(board)

export default renderBoard