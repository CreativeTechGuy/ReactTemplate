import rand from "utils/rand";

describe("rand", () => {
	test("generates random number", async () => {
		const numbers = [];
		for (let i = 0; i < 10; i++) {
			numbers.push(rand(-50, 100));
		}
		let anyDifferent = false;
		for (let i = 0; i < numbers.length; i++) {
			if (numbers[i] !== numbers[0]) {
				anyDifferent = true;
			}
			
		}
		expect(anyDifferent).toStrictEqual(true);
	});

	test("swaps inverted arguments", async () => {
		expect(rand(100, -100)).toBeGreaterThanOrEqual(-100);
	});
});