import type { ReactElement } from "react";
import Logo from "./react.svg";
import { RandomNumber } from "~/components/RandomNumber";
import { randomDefaults } from "~/config/constants";

export function App(): ReactElement {
    return (
        <div className="center">
            <img src={Logo} alt="React Logo" />
            <br />
            Hello World <RandomNumber min={randomDefaults.MIN} max={randomDefaults.MAX} />
        </div>
    );
}
