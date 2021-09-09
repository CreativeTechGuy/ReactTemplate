import { configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import "./mocks/mockRandom";

configure({
    throwSuggestions: true,
});
