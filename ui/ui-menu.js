import { bootEngine } from '../engine/engine-core.js';

export function createMenu(container) {
    const menu = document.createElement('div');
    menu.id = 'ui-mainmenu';
    menu.style.cssText =
        "position:absolute; width:100%; height:100%; background:#000; display:none; " +
        "flex-direction:column; justify-content:center; align-items:center; z-index:7000;";

    menu.innerHTML = `
        <h1 style="letter-spacing:10px;">HIGHWAY-MEN</h1>
        <button id="main-start-btn"
            style="margin:5px; padding:10px 40px; background:none; color:#0f0; border:1px solid #0f0; cursor:pointer;">
            CONTINUE
        </button>
        <button id="main-reload-btn"
            style="margin:5px; padding:5px 20px; background:none; color:#444; border:1px solid #444; cursor:pointer; font-size:10px;">
            HARD_REFRESH
        </button>
    `;

    container.appendChild(menu);

    document.getElementById('main-start-btn').onclick = () => {
        menu.style.display = 'none';
        bootEngine();
    };

    document.getElementById('main-reload-btn').onclick = () => location.reload();
}
