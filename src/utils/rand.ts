export function rand(min: number, max: number): number {
	if (max < min) {
		const temp = max;
		max = min;
		min = temp;
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
