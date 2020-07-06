import app from './app/app.js';

const root = document.getElementById('root');

if (!root) {
    throw new Error('Root is missing')
}

app(root);