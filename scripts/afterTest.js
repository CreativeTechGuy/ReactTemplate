const path = require("path");

module.exports = () => {
	console.log(`
================================================================================
View Coverage Report (Open in Browser): ${path.relative(process.cwd(), path.join(__dirname, "../coverage/lcov-report/index.html"))}
================================================================================
`);
};