// FILE: engine/engine-scene.js
export function initScene() {
    const scene = new THREE.Scene();

    const grid = new THREE.GridHelper(500, 50, 0x004400, 0x111111);
    scene.add(grid);

    // ADD A REFUEL PAD (A simple green glowing square)
    const padGeo = new THREE.PlaneGeometry(5, 5);
    const padMat = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true, side: THREE.DoubleSide });
    const pad = new THREE.Mesh(padGeo, padMat);
    pad.rotation.x = Math.PI / 2; // Lay it flat
    pad.position.set(10, 0.01, -10); // Match the stationPos in the controller
    scene.add(pad);

    return scene;
}