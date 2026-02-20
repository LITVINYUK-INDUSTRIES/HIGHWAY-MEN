import { initRenderer } from './engine-renderer.js';
import { initScene } from './engine-scene.js';
import { initCamera } from './engine-camera.js';
import { startLoop } from './engine-loop.js';
import { Vessel } from '../systems/vessel-class.js';
import { loadSectorEntities } from '../systems/vessel-loader.js';
import { WorldState } from '../systems/vessel-registry.js';

export let scene, camera, renderer;

export function bootEngine() {
    console.warn("ENGINE_START_SEQUENCE");

    scene = initScene();
    camera = initCamera();
    renderer = initRenderer();

    // Spawn local player
    new Vessel({ id: WorldState.localPlayerId, p: [0, 0.35, 0], r: [0] }, scene);

    // Spawn ghost vehicles
    loadSectorEntities(scene);

    startLoop(scene, camera, renderer);
}
