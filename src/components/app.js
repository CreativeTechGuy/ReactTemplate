import Logo from "assets/react.svg";
import constants from "config/constants";
import RandomNumber from "components/randomNumber";

export default function App() {
	return (
		<div className="center">
			<img src={Logo} />
			<br />
			Hello World <RandomNumber min={constants.MIN} max={constants.MAX}></RandomNumber>
		</div>
	);
}