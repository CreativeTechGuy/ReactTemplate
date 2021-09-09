/* eslint-disable no-bitwise */
// mulberry32

import { Random } from "~/utils/random";

export class SeededRandom extends Random {
    private seed: number;
    /**
     * Set the seed of the random number generator
     */
    public constructor(seed: number) {
        super((): number => {
            return this.next();
        });
        this.seed = seed;
    }
    /**
     * Reset the seed of the random number generator
     */
    public setSeed(seed: number): void {
        this.seed = seed;
    }
    /**
     * Get the next number in the series - equivalent to Math.random()
     */
    private next(): number {
        this.seed |= 0;
        this.seed = (this.seed + 0x6d2b79f5) | 0;
        let t = Math.imul(this.seed ^ (this.seed >>> 15), 1 | this.seed);
        // eslint-disable-next-line operator-assignment
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
}
