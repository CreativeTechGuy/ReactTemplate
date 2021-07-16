import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RandomNumber } from "~/components/RandomNumber";

describe("RandomNumber", () => {
    test("is generated", () => {
        render(<RandomNumber min={50} max={50} />);

        screen.getByText("50");
    });

    test("is regenerated on mouse click", () => {
        jest.spyOn(Math, "random").mockReturnValueOnce(0.5).mockReturnValueOnce(0.7);
        render(<RandomNumber min={0} max={10} />);

        userEvent.click(screen.getByText("5"));
        screen.getByText("7");
    });
});
