const fs = require("fs");
const path = require("path");

for (const deletePath of process.argv.slice(2)) {
	try {
		fs.rmdirSync(path.join(process.cwd(), deletePath), { recursive: true });
	// eslint-disable-next-line no-empty
	} catch (e) {}
}