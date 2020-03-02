import RandomNumber from "src/components/randomNumber";

test("RandomNumber is generated", () => {
	const wrapper = shallow(<RandomNumber min={50} max={50}></RandomNumber>);

	expect(wrapper.text()).toBe("50");
});

test("RandomNumber is regenerated on mouse move", () => {
	const wrapper = shallow(<RandomNumber min={1} max={100000000}></RandomNumber>);
	const startingText = wrapper.text();
	wrapper.simulate("mousemove");
	expect(wrapper.text()).not.toBe(startingText);
});