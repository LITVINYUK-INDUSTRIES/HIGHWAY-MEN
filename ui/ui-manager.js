// FILE: ui/ui-manager.js
import { createConsole } from './ui-console.js';
import { createMenu } from './ui-menu.js';
import { createOptions } from './ui-options.js';
import { createLoader } from './ui-loader.js';
import { createHUD } from './ui-hud.js'; // Order doesn't matter, but putting it here is clean.

export function createUI() {
    const container = document.getElementById('game-container');
    container.innerHTML = '';

    // The order of these CALLS does matter for "Z-Index" (what sits on top)
    createConsole(container); // Bottom layer
    createHUD(container);     // HUD sits behind menus
    createLoader(container);  // Loader sits on top of everything initially
    createMenu(container);    // Main menu
    createOptions(container); // Options menu (hidden)
}