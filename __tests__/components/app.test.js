import React from "react";
import { render, screen } from "@testing-library/react";

import App from "components/app";

describe("App", () => {
	test("is rendered", async () => {
		render(<App />);
		await screen.findByText("Hello World", {
			exact: false
		});
	});
});