export const WorldState = {
    vessels: {},
    localPlayerId: "v_001"
};

export function registerVessel(vessel) {
    WorldState.vessels[vessel.id] = vessel;
}

export function getVessel(id) {
    return WorldState.vessels[id];
}
