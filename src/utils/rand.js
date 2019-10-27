export default function rand(min, max) {
	min = parseInt(min, 10);
	max = parseInt(max, 10);
	if (max < min) {
		const temp = max;
		max = min;
		min = temp;
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}