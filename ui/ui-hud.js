// FILE: ui/ui-hud.js
import { PlayerProfile } from '../systems/player-profile.js';

export function createHUD(container) {
    const hud = document.createElement('div');
    hud.id = 'ui-hud';
    hud.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        text-align: right;
        color: #0f0;
        font-family: monospace;
        z-index: 5000;
        display: none; 
        pointer-events: none;
    `;

    hud.innerHTML = `
        <div style="font-size: 1.5em;">CREDITS: <span id="hud-credits">0</span></div>
        <div>FUEL: <span id="hud-fuel">0</span>%</div>
    `;

    container.appendChild(hud);
}

export function updateHUD() {
    const creds = document.getElementById('hud-credits');
    const fuel = document.getElementById('hud-fuel');
    
    if (creds) creds.innerText = PlayerProfile.credits.toLocaleString();
    if (fuel) fuel.innerText = Math.floor(PlayerProfile.fuel);
}

export function showHUD(visible = true) {
    const hud = document.getElementById('ui-hud');
    if (hud) hud.style.display = visible ? 'block' : 'none';
}