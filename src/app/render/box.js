
const renderBox = (pieces) => {
    let whitePieces = pieces.white.map((piece) => `<div data-id=${piece.id} class="piece white-piece" draggable="true">${piece.symbol}</div>`).join('')
    let blackPieces = pieces.black.map((piece) => `<div data-id=${piece.id} class="piece black-piece" draggable="true">${piece.symbol}</div>`).join('')
    return `
        <div class="piece-box">${whitePieces}</div>
        <div class="piece-box">${blackPieces}</div>
    `
}

export default renderBox