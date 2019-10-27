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
		"^src/(.*)$": "<rootDir>/src/$1",
		"^__tests__/(.*)$": "<rootDir>/__tests__/$1"
	},
	"setupFiles": [
		"<rootDir>/jest.setup.js"
	],
	"testMatch": [
		"<rootDir>/__tests__/**/*.test.js"
	],
	"collectCoverage": true,
	"collectCoverageFrom": [
		"<rootDir>/src/**/*.js",
		"!**/utils/**",
		"!**/config/**"
	],
	"coverageThreshold": {
		"global": {
			"statements": 75,
			"functions": 75,
			"lines": 75
		}
	},
	"coverageReporters": ["text-summary", "lcov"],
	"clearMocks": true,
	"verbose": true
};