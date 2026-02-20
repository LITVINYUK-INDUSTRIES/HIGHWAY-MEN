import { log } from './ui-console.js';

export function createOptions(container) {
    const options = document.createElement('div');
    options.id = 'ui-options';
    options.style.cssText =
        "position:absolute; width:100%; height:100%; background:rgba(0,0,0,0.85); display:none; " +
        "flex-direction:column; justify-content:center; align-items:center; z-index:7500; color:#fff;";

    options.innerHTML = `
        <h2 style="color:#ffff00; letter-spacing:5px;">OPTIONS</h2>
        <button id="opt-continue"
            style="margin:10px; padding:10px; width:200px; background:none; border:1px solid #fff; color:#fff; cursor:pointer;">
            CONTINUE
        </button>
        <button id="opt-reload"
            style="margin:10px; padding:10px; width:200px; background:none; border:1px solid #ffff00; color:#ffff00; cursor:pointer;">
            RELOAD GAME
        </button>
        <button id="opt-exit"
            style="margin:10px; padding:10px; width:200px; background:none; border:1px solid #ff4444; color:#ff4444; cursor:pointer;">
            EXIT
        </button>
    `;

    container.appendChild(options);

    document.getElementById('opt-continue').onclick = () => {
        options.style.display = 'none';
        window.isPaused = false;
        log("UI_OVERLAY_DISABLED", 'warn');
    };

    document.getElementById('opt-reload').onclick = () => {
        log("RESTARTING_SIMULATION...", 'warn');
        location.reload();
    };

    document.getElementById('opt-exit').onclick = () => {
        log("CLEAN_EXIT_INITIATED", 'error');
        location.reload();
    };
}
