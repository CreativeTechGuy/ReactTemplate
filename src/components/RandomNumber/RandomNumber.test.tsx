import { describe, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { userEventSetup } from "test/helpers/userEventSetup";
import { RandomNumber } from "./RandomNumber";

describe("RandomNumber", () => {
    test("is generated", () => {
        render(<RandomNumber min={0} max={50} />);

        screen.getByRole("button", {
            name: "13",
        });
    });

    test("is regenerated on mouse click", async () => {
        render(<RandomNumber min={0} max={10} />);
        const user = userEventSetup();

        await user.click(
            screen.getByRole("button", {
                name: "2",
            })
        );
        screen.getByRole("button", {
            name: "10",
        });
    });
});
