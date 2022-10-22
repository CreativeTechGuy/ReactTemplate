/* eslint-env node */

module.exports = {
    groupFunction: (packageName, defaultGroup) => {
        // TypeScript doesn't use SemVer. Both minor and major version changes are major.
        if (packageName === "typescript" && defaultGroup === "minor") {
            return "major";
        }
        // Create custom group for eslint packages since you'll want to review new and changed rules to add.
        if (packageName.includes("eslint")) {
            return "ESLint Packages";
        }
        return defaultGroup;
    },
};
