import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import RandomNumber from "components/randomNumber";

describe("RandomNumber", () => {
	test("is generated", async () => {
		render(<RandomNumber min={50} max={50} />);

		await screen.findByText("50");
	});

	test("is regenerated on mouse move", () => {
		const { container } = render(<RandomNumber min={1} max={100000000} />);

		const startingText = container.textContent;
		fireEvent.mouseMove(screen.queryByText(container.textContent));
		expect(container.textContent).not.toStrictEqual(startingText);
	});
});