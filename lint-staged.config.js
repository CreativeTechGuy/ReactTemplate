/* eslint-env node */

const path = require("path");

module.exports = {
    "*.{js,ts,jsx,tsx,json,html,xml,svg,css,scss,sass,md}": "cspell --no-progress --no-must-find-files",
    "*.{js,ts,jsx,tsx}": "eslint --max-warnings 0 --fix",
    "*": "prettier --write --ignore-unknown --loglevel warn",
    "src/**/*.{js,ts,jsx,tsx}": (paths) => {
        const relativePaths = paths.map((filePath) =>
            path.relative(__dirname, filePath).split(path.sep).join(path.posix.sep)
        );
        // Running unit tests is the largest contributor to the speed of a commit.
        // If you are running all of your validations in PR before merging then remove this and depend on PR checks.
        // This is only useful if you are directly pushing code and not creating PRs.
        return `jest --runInBand --bail --collectCoverageFrom '(${relativePaths.join(
            "|"
        )})' --coverage --findRelatedTests ${paths.join(" ")}`;
    },
};
