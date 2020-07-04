const CELL_COUNT = 8
const ROW_COUNT = CELL_COUNT

let row = (rowIndex) => {
    return new Array(CELL_COUNT)
        .fill(null)
        .map((_, cellIndex) => {
            const isBlack = rowIndex % 2 ===0 ? cellIndex % 2 !== 0 : cellIndex % 2 === 0 ;
            return `<div class="cell ${isBlack ? 'black' : 'white'}"></div>`
        })
        .join("");
}

/*let row1 = new Array(CELL_COUNT).fill(null).map(() => `<div class="cell">1</div>`).join("");*/


const renderBoard = () => {
    let board = new Array(ROW_COUNT)
        .fill(null)
        .map((_, index) => `<div class="row">${row(index)}</div>`)
        .join("");
    return `
        <div id="board">
            ${board}
        </div>
    `;
}

export default renderBoard