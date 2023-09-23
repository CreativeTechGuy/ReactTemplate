import { describe, test, expect } from "@jest/globals";
import { random } from "./random";

describe("random", () => {
    test("randInt generates random integer in range", () => {
        expect(random.randInt(10, 20)).toBe(12);
    });

    test("randFloat generates random float in range", () => {
        expect(random.randFloat(10, 20)).toBeCloseTo(12.577907438389957);
    });

    test("pick random item from array", () => {
        expect(random.pick([1, 2, 3, 4, 5, 6])).toBe(2);
    });
});
