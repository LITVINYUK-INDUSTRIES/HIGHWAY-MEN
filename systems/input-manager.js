export const keys = {};

window.onkeydown = (e) => {
    keys[e.key.toLowerCase()] = true;
};

window.onkeyup = (e) => {
    keys[e.key.toLowerCase()] = false;
};

window.keys = keys;

