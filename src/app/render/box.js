
const renderBox = (pieces) => {
    let whitePieces = pieces.map((piece) => `<div  class="piece white-piece" draggable="true">${piece.symbol}</div>`).join('')
    let blackPieces = pieces.map((piece) => `<div  class="piece black-piece" draggable="true">${piece.symbol}</div>`).join('')
    return `
        <div>${whitePieces}</div>
        <div>${blackPieces}</div>
    `
}

export default renderBox