let cells = (row, rowIndex) =>
    row
        .map((piece, colIndex) => {
            const isBlack = rowIndex % 2 ===0 ? colIndex % 2 !== 0 : colIndex % 2 === 0 ;
            return `<div data-row=${rowIndex} data-col=${colIndex} 
                class="cell ${isBlack ? 'black' : 'white'} ${piece ? piece.id > 19 ? 'black-piece' : 'white-piece' : ''}">
                ${piece ? piece.symbol : ''}
            </div>`
        })
        .join('')

const renderBoard = (store) => {
    let board = store.board
        .map((row, rowIndex) => `<div class='row'>${cells(row, rowIndex)}</div>`)
        .join('')
    return `
        <div id='board'>
            ${board}
        </div>
    `;
}

export default renderBoard