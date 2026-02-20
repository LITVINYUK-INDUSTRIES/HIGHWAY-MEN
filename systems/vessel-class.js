import { WorldState, registerVessel } from './vessel-registry.js';

export class Vessel {
    constructor(data, scene) {
        this.id = data.id;
        this.isLocal = (this.id === WorldState.localPlayerId);

        const geo = new THREE.BoxGeometry(1.8, 0.7, 4);
        const mat = new THREE.MeshBasicMaterial({
            color: this.isLocal ? 0xff0000 : 0x4444ff,
            wireframe: true,
            transparent: !this.isLocal,
            opacity: this.isLocal ? 1.0 : 0.4
        });

        this.mesh = new THREE.Mesh(geo, mat);
        this.mesh.position.set(data.p[0], data.p[1], data.p[2]);
        scene.add(this.mesh);

        registerVessel(this);
    }
}
