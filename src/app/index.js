import renderBoard from './render/board.js';
console.log('indexAPP');

const app = (root) => {
    root.innerHTML = `
        <div>Hello, World!</div>
        ${renderBoard()}
    `;
}

export default app;