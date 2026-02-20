export function initScene() {
    const scene = new THREE.Scene();

    const grid = new THREE.GridHelper(500, 50, 0x004400, 0x111111);
    scene.add(grid);

    return scene;
}
