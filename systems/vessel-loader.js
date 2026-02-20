import { Vessel } from './vessel-class.js';
import { log } from '../ui/ui-console.js';

export function loadSectorEntities(scene) {
    log("FETCHING_LOCAL_SECTOR_DATA...", 'warn');

    const remoteData = [
        { id: "v_offline_99", p: [10, 0.35, -20], r: [0] },
        { id: "v_offline_102", p: [-15, 0.35, -5], r: [1.5] }
    ];

    remoteData.forEach(data => {
        new Vessel(data, scene);
        log(`SPAWNED_GHOST: ${data.id}`, 'info');
    });
}
