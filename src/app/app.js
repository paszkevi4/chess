import renderBoard from './render/board.js';
import renderBox from './render/box.js';
import store from './store/store.js'

const app = (root) => {
    const render = () => {
        root.innerHTML = `
            ${renderBoard(store)}
            ${renderBox(store.pieces)}
        `
    };

    render();
}

export default app;