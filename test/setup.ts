import { configure } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import "./mocks/mockRandom";

configure({
    throwSuggestions: true,
});
