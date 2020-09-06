module.exports = {
	"moduleFileExtensions": ["js"],
	"moduleDirectories": [
		"node_modules",
		"src"
	],
	"moduleNameMapper": {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
		"\\.html$": "<rootDir>/__mocks__/fileMock.js",
		"\\.(css|scss)$": "identity-obj-proxy",
		"file-loader": "<rootDir>/__mocks__/fileMock.js",
		"^test/(.*)$": "<rootDir>/__tests__/$1"
	},
	"setupFilesAfterEnv": [
		"<rootDir>/jest.setup.js"
	],
	"globalTeardown": "<rootDir>/scripts/afterTest.js",
	"testMatch": [
		"<rootDir>/__tests__/**/*.test.js"
	],
	"collectCoverage": true,
	"collectCoverageFrom": [
		"<rootDir>/src/**/*.js",
		"!**/config/**"
	],
	"coverageThreshold": {
		"global": {
			"statements": 85,
			"functions": 85,
			"lines": 85
		}
	},
	"coverageReporters": ["text-summary", "lcov"],
	"clearMocks": true,
	"verbose": true
};