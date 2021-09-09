/* eslint-env node */

const path = require("path");

module.exports = {
    "*.{js,ts,jsx,tsx,json,html,xml,svg,css,scss,sass,md}": "cspell --no-must-find-files",
    "*.{js,ts,jsx,tsx}": "eslint --max-warnings 0 --fix",
    "*": "prettier --write --ignore-unknown",
    "src/**/*.{js,ts,jsx,tsx}": (paths) => {
        const relativePaths = paths.map((filePath) =>
            path.relative(__dirname, filePath).split(path.sep).join(path.posix.sep)
        );
        return `jest --runInBand --bail --collectCoverageFrom '(${relativePaths.join(
            "|"
        )})' --coverage --findRelatedTests ${paths.join(" ")}`;
    },
};
