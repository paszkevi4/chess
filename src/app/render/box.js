
const renderBox = (pieces) => {
    let whitePieces = pieces.map((piece) => `<div class="white-piece">${piece.symbol}</div>`).join('')
    let blackPieces = pieces.map((piece) => `<div class="black-piece">${piece.symbol}</div>`).join('')
    return `
        <div>${whitePieces}</div>
        <div>${blackPieces}</div>
    `
}

export default renderBox