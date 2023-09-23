import { describe, test, expect } from "@jest/globals";
import { Random } from "~/utils/random";
import { SeededRandom } from "./seededRandom";

describe("seededRandom", () => {
    test("seed creates a deterministic series", () => {
        const random = new SeededRandom(100000);
        expect(random.random()).toBeCloseTo(0.45954178320243955);
    });

    test("can update seed", () => {
        const random = new SeededRandom(100000);
        random.setSeed(9999999999);
        expect(random.random()).toBeCloseTo(0.8015434315893799);
    });

    test("seeded random updates seed", () => {
        const random = new SeededRandom(100000);
        expect(random.random()).toBeCloseTo(0.45954178320243955);
        expect(random.random()).toBeCloseTo(0.7448947750963271);
    });

    test("is instance of Random", () => {
        const random = new SeededRandom(100000);
        expect(random).toBeInstanceOf(Random);
    });
});
