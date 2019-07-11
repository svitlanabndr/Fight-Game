export interface IFighter {
    name: string;
    fullHealth: number;
    health: number;
    attack: number;
    defense: number;
    getHitPower: () => number;
    getBlockPower: () => number;
}

export default class Fighter implements IFighter {
    constructor(obj: { [key: string]: string }) {
        this.name = obj.name;
        this.fullHealth = parseInt(obj.health);
        this.health = parseInt(obj.health);
        this.attack = parseInt(obj.attack);
        this.defense = parseInt(obj.defense);
    }

    name: string;
    fullHealth: number;
    health: number;
    attack: number;
    defense: number;

    getHitPower() {
        const criticalHitChance = Math.random() + 1;
        return this.attack * criticalHitChance;
    }

    getBlockPower() {
        const dodgeChance = Math.random() + 1;
        return this.defense * dodgeChance;
    }
}
