import { keys } from './input-manager.js';

let vehicle;

export function updateVehicle(scene, camera, dt) {
    if (!vehicle) {
        const geo = new THREE.BoxGeometry(1.8, 0.7, 4);
        const mat = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
        vehicle = new THREE.Mesh(geo, mat);
        scene.add(vehicle);
    }

    // Basic WASD movement
    if (keys['w']) vehicle.translateZ(-0.1);
    if (keys['s']) vehicle.translateZ(0.1);
    if (keys['a']) vehicle.rotation.y += 0.03;
    if (keys['d']) vehicle.rotation.y -= 0.03;

    // Camera follow
    const offset = new THREE.Vector3(0, 5, 12).applyQuaternion(vehicle.quaternion);
    camera.position.lerp(vehicle.position.clone().add(offset), 0.1);
    camera.lookAt(vehicle.position);
}
