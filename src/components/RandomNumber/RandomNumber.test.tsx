import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RandomNumber } from "./RandomNumber";

describe("RandomNumber", () => {
    test("is generated", () => {
        render(<RandomNumber min={0} max={50} />);

        screen.getByRole("button", {
            name: "13",
        });
    });

    test("is regenerated on mouse click", () => {
        render(<RandomNumber min={0} max={10} />);

        userEvent.click(
            screen.getByRole("button", {
                name: "2",
            })
        );
        screen.getByRole("button", {
            name: "10",
        });
    });
});
