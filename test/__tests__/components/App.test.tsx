import { render, screen } from "@testing-library/react";
import { App } from "~/components/App";

describe("App", () => {
    test("is rendered", async () => {
        render(<App />);
        await screen.findByText("Hello World", {
            exact: false,
        });
    });
});
