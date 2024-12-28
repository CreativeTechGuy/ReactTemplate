import inspector from "node:inspector";
const isDebuggerAttached = inspector.url() !== undefined;

export default {
    restoreMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
    coverageDirectory: "coverage",
    coverageReporters: ["text-summary", "lcov"],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    errorOnDeprecated: true,
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "test/(.*)$": "<rootDir>/test/$1",
        "~/(.*)$": "<rootDir>/src/$1",
    },
    transform: {
        "\\.[jt]sx?$": "babel-jest",
        "\\.(jpg|jpeg|png|gif|webp|svg|bmp|woff|woff2|ttf)$": "<rootDir>/test/transformers/importPathTransformer.cjs",
    },
    setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
    globalTeardown: "<rootDir>/test/teardown.ts",
    fakeTimers: {
        enableGlobally: true,
    },
    verbose: true,
    testEnvironment: "jsdom",
    testTimeout: isDebuggerAttached ? 10000000 : 5000,
    randomize: true,
};
