export class Random {
    private readonly rng: () => number;
    public constructor(rng: () => number) {
        this.rng = rng;
    }
    /**
     * Generates a random integer [min, max]
     */
    public randInt(min: number, max: number): number {
        return Math.floor(this.rng() * (max - min + 1) + min);
    }
    /**
     * Generates a random float [min, max]
     */
    public randFloat(min: number, max: number): number {
        return this.rng() * (max - min) + min;
    }
    /**
     * Picks a random item from an array
     */
    public pick<Item>(arr: Item[]): Item {
        return arr[this.randInt(0, arr.length - 1)];
    }
    /**
     * Generates a random float [0, 1)
     */
    public random(): number {
        return this.rng();
    }
}

export const random = new Random(() => Math.random());
