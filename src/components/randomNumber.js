import rand from "utils/rand";

export default function RandomNumber({
	min = 0,
	max = 100
}) {
	let [number, setNumber] = useState(() => rand(min, max));

	return (
		<div onMouseMove={() => setNumber(rand(min,max))}>{number}</div>
	);
}