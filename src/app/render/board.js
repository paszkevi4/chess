let row = (rowIndex, cellCount) => {
    return new Array(cellCount)
        .fill(null)
        .map((_, cellIndex) => {
            const isBlack = rowIndex % 2 ===0 ? cellIndex % 2 !== 0 : cellIndex % 2 === 0 ;
            return `<div class="cell ${isBlack ? 'black' : 'white'}">${rowIndex}</div>`
        })
        .join('');
}

const renderBoard = (store) => {
    let board = new Array(store.ROW_COUNT)
        .fill(null)
        .map((_, index) => `<div class='row'>${row(index, store.CELL_COUNT)}</div>`)
        .join('');
    return `
        <div id='board'>
            ${board}
        </div>
    `;
}

export default renderBoard