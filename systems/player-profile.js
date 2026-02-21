// FILE: systems/player-profile.js
export const PlayerProfile = {
    // Identity (Future Clerk Data)
    id: "v_001",
    username: "Highway_Nomad",

    // Economy (Future Supabase Data)
    credits: 5000,
    inventory: [],
    
    // Truck Stats
    fuel: 100,
    damage: 0,

    addCredits(amount) {
        this.credits += amount;
        // Trigger a UI update event if needed
        console.log(`Economy: ${this.credits}`);
    },

    consumeFuel(amount) {
        this.fuel = Math.max(0, this.fuel - amount);
    }
};