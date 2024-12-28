const blockMajorVersion = [
    // Must match the version of Node this package uses
    "@types/node",
];

module.exports = {
    target: (packageName) => {
        if (blockMajorVersion.includes(packageName)) {
            return "minor";
        }
        return "latest";
    },
    groupFunction: (packageName, defaultGroup) => {
        // TypeScript doesn't use SemVer. Both minor and major version changes are major.
        if (packageName === "typescript" && defaultGroup === "minor") {
            return "major";
        }
        // Create custom group for eslint packages since you'll want to review new and changed rules to add.
        if (packageName.includes("eslint-plugin") || packageName === "eslint" || packageName.endsWith("/eslint")) {
            return "ESLint Packages";
        }
        return defaultGroup;
    },
};
