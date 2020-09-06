import React, { useState, useCallback } from "react";
import rand from "utils/rand";

export default function RandomNumber(props) {
	const [number, setNumber] = useState(() => rand(props.min, props.max));

	const onMouseMove = useCallback(() => {
		setNumber(rand(props.min, props.max));
	}, [props.min, props.max]);

	return (
		<div onMouseMove={onMouseMove}>{number}</div>
	);
}