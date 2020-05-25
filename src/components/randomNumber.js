import rand from "utils/rand";

export default function RandomNumber({
	min = 0,
	max = 100
}) {
	const [number, setNumber] = useState(() => rand(min, max));

	const onMouseMove = useCallback(() => {
		setNumber(rand(min,max));
	}, [min, max]);

	return (
		<div onMouseMove={onMouseMove}>{number}</div>
	);
}