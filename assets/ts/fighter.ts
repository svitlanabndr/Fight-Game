export interface IFighter {
    readonly name: string;
    readonly fullHealth: number;
    health: number;
    readonly attack: number;
    readonly defense: number;
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
    readonly name: string;
    readonly fullHealth: number;
    health: number;
    readonly attack: number;
    readonly defense: number;

    public getHitPower() {
        const criticalHitChance = Math.random() + 1;
        return this.attack * criticalHitChance;
    }

    public getBlockPower() {
        const dodgeChance = Math.random() + 1;
        return this.defense * dodgeChance;
    }
}
