import { createConsole } from './ui-console.js';
import { createMenu } from './ui-menu.js';
import { createOptions } from './ui-options.js';
import { createLoader } from './ui-loader.js';

export function createUI() {
    const container = document.getElementById('game-container');
    container.innerHTML = '';

    createConsole(container);
    createLoader(container);
    createMenu(container);
    createOptions(container);
}
