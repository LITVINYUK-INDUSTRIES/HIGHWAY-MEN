// FILE: systems/vehicle-controller.js

// 1. These "Imports" are like telling the file which tools it's allowed to use
import { keys } from './input-manager.js';
import { log } from '../ui/ui-console.js';
import { WorldState } from './vessel-registry.js';
import { PlayerProfile } from './player-profile.js'; // The "Gas Tank"
import { updateHUD } from '../ui/ui-hud.js';         // The "Dashboard"

export function updateVehicle(scene, camera, dt) {
    // Grab your car from the Registry
    const playerVessel = WorldState.vessels[WorldState.localPlayerId];
    if (!playerVessel || !playerVessel.mesh) return;
    const vehicle = playerVessel.mesh;
    
    // --- NEW: REFUEL LOGIC (SIMPLIFIED) ---
    const stationPos = { x: 10, z: -10 };
    const dist = vehicle.position.distanceTo(new THREE.Vector3(stationPos.x, 0.35, stationPos.z));

    if (dist < 3) { // If within 3 units of the "Station"
        if (PlayerProfile.fuel < 100) {
            PlayerProfile.fuel = 100;
            log("FUEL_RESERVES_REPLENISHED", "warn");
        }
    }
    // --------------------------------------

    // 2. The Movement Logic with Fuel Check
    if (keys['w'] || keys['s']) {
        // Only move if fuel is greater than 0
        if (PlayerProfile.fuel > 0) {
            const moveSpeed = 0.1;
            
            if (keys['w']) vehicle.translateZ(-moveSpeed);
            if (keys['s']) vehicle.translateZ(moveSpeed);
            
            // 3. Subtract a tiny bit of fuel every frame we move
            PlayerProfile.consumeFuel(0.01); 
        } else {
            // This will show up in your yellow console if you run dry
            console.warn("OUT_OF_FUEL");
        }
    }

    if (keys['a']) vehicle.rotation.y += 0.03;
    if (keys['d']) vehicle.rotation.y -= 0.03;

    // 4. Camera Follow
    const offset = new THREE.Vector3(0, 5, 12).applyQuaternion(vehicle.quaternion);
    camera.position.lerp(vehicle.position.clone().add(offset), 0.1);
    camera.lookAt(vehicle.position);

    // 5. Tell the HUD to refresh the numbers on the screen
    updateHUD();
}