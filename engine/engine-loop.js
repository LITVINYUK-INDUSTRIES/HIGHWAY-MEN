import { updateVehicle } from '../systems/vehicle-controller.js';

let animId = null;
let lastTime = 0;
let isPaused = false;

export function startLoop(scene, camera, renderer) {
    function loop(t = 0) {
        animId = requestAnimationFrame(loop);

        const dt = t - lastTime;
        lastTime = t;

        if (!isPaused) {
            updateVehicle(scene, camera, dt);
            renderer.render(scene, camera);
        }
    }

    loop();
}
