import { useState, useCallback, type ReactElement } from "react";
import { random } from "~/utils/random";

type RandomNumberProps = {
    min: number;
    max: number;
};

export function RandomNumber(props: RandomNumberProps): ReactElement {
    const [number, setNumber] = useState(() => random.randInt(props.min, props.max));

    const onClick = useCallback(() => {
        setNumber(random.randInt(props.min, props.max));
    }, [props.min, props.max]);

    return <button onClick={onClick}>{number}</button>;
}
