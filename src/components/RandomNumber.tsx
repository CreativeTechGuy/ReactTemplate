import { useState, useCallback } from "react";
import type { ReactElement } from "react";
import { rand } from "~/utils/rand";

type RandomNumberProps = {
	min: number;
	max: number;
};

export function RandomNumber(props: RandomNumberProps): ReactElement {
	const [number, setNumber] = useState(() => rand(props.min, props.max));

	const onClick = useCallback(() => {
		setNumber(rand(props.min, props.max));
	}, [props.min, props.max]);

	return <button onClick={onClick}>{number}</button>;
}
