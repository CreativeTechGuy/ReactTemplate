import { rand } from "~/utils/rand";

describe("rand", () => {
	test("generates random number", () => {
		jest.spyOn(Math, "random").mockReturnValue(0.5);
		expect(rand(0, 10)).toStrictEqual(5);
	});

	test("swaps inverted arguments", () => {
		expect(rand(100, -100)).toBeGreaterThanOrEqual(-100);
	});
});
