import type { ReactElement } from "react";
import { RandomNumber } from "~/components/RandomNumber";
import { randomDefaults } from "~/config/constants";
import Logo from "./react.svg";

export function App(): ReactElement {
    return (
        <div className="center">
            <img src={Logo} alt="React Logo" />
            <br />
            Hello World <RandomNumber min={randomDefaults.MIN} max={randomDefaults.MAX} />
        </div>
    );
}
