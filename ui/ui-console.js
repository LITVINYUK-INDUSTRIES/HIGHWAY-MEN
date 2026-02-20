export function log(msg, type = 'info') {
    const content = document.getElementById('log-content');
    if (!content) return;

    const color =
        type === 'error' ? '#ff4444' :
        type === 'warn'  ? '#ffff00' :
                           '#00ff00';

    content.innerHTML += `<div style="color:${color}">[${new Date().toLocaleTimeString()}] ${msg}</div>`;
    const logBox = document.getElementById('ui-logbox');
    logBox.scrollTop = logBox.scrollHeight;
}

export function createConsole(container) {
    const logBox = document.createElement('div');
    logBox.id = 'ui-logbox';
    logBox.style.cssText =
        "position:fixed; bottom:0; left:0; width:100%; height:25px; " +
        "background:rgba(0,10,0,0.95); border-top:1px solid #0f0; z-index:9000; " +
        "overflow:hidden; font-family:monospace; font-size:11px; color:#0f0; " +
        "transition:0.2s; cursor:pointer;";

    logBox.innerHTML = "<div id='log-content' style='padding:5px'>> SYSTEM_STABLE...</div>";

    logBox.onclick = () =>
        logBox.style.height = logBox.style.height === "200px" ? "25px" : "200px";

    container.appendChild(logBox);

    window.onerror = (message, source, lineno) => {
        log(`FATAL: ${message} (Line: ${lineno})`, 'error');
        return false;
    };
}
