import renderBoard from './render/board.js';
import renderBox from './render/box.js';
import store from './store/store.js'
import initEvents from './events/events.js'

const app = (root) => {
    const render = () => {
        root.innerHTML = `
            ${renderBoard(store)}
            ${renderBox(store.pieces)}
        `;
        initEvents(root, store, render)
    };

    render();
}

export default app;