import { log } from './ui-console.js';

export function createLoader(container) {
    const loader = document.createElement('div');
    loader.id = 'ui-loader';
    loader.style.cssText =
        "position:absolute; width:100%; height:100%; background:#000; display:flex; " +
        "flex-direction:column; justify-content:center; align-items:center; z-index:8000; color:#0f0;";

    loader.innerHTML = `
        <h3>INITIALIZING_VAULT</h3>
        <div style="width:200px; height:2px; background:#111;">
            <div id='loader-bar' style="width:0%; height:100%; background:#0f0; transition:0.5s;"></div>
        </div>
    `;

    container.appendChild(loader);

    setTimeout(() => {
        const bar = document.getElementById('loader-bar');
        if (bar) bar.style.width = "100%";
        log("BOOT_RESOURCES_LOADED", 'warn');

        setTimeout(() => {
            loader.style.display = 'none';
            document.getElementById('ui-mainmenu').style.display = 'flex';
        }, 600);
    }, 100);
}
