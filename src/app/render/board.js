let cells = (row, rowIndex, selected) =>
    row
        .map(( {piece, vacant} , colIndex) => {
            const isBlack = rowIndex % 2 ===0 ? colIndex % 2 !== 0 : colIndex % 2 === 0 ;
            return (
            `<div data-row=${rowIndex} data-col=${colIndex} class="cell 
                ${ isBlack ? 'black' : 'white' } 
                ${ vacant ? 'vacant' : '' } 
                ${ piece ? piece.id > 19 ? 'black-piece' : 'white-piece' : '' }
                ${ selected.piece && selected.row == rowIndex && selected.col == colIndex ? 'selected' : '' }">
                    ${piece ? piece.symbol : ''}
            </div>`)
        })
        .join('')

const renderBoard = (store) => {
    let board = store.board
        .map((row, rowIndex) => `<div class='row'>${cells(row, rowIndex, store.selected)}</div>`)
        .join('')
    return `
        <div id='board'>
            ${board}
        </div>
    `;
}

export default renderBoard