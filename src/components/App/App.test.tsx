import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
    test("is rendered", () => {
        render(<App />);
        screen.getByText("Hello World", {
            exact: false,
        });
        expect(screen.getByRole("img")).toHaveAttribute("src", "react.svg");
    });
});
