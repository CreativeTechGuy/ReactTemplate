import RandomNumber from "src/components/randomNumber";
import { shallow } from "enzyme";

test("RandomNumber is generated", () => {
	const wrapper = shallow(<RandomNumber min={50} max={50}></RandomNumber>);
	const instance = wrapper.instance();

	expect(instance.state.number).toBe(50);
});