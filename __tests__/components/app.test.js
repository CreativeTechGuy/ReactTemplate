import App from "src/components/app";
import { shallow } from "enzyme";

test("App is rendered", () => {
	const wrapper = shallow(<App></App>);
	const instance = wrapper.instance();
});