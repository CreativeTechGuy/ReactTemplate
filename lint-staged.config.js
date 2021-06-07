/* eslint-env node */

module.exports = {
	"{src,test}/**": "cspell",
	"*.md": "cspell",
	"*.{js,ts,jsx,tsx}": ["eslint --max-warnings 0 --fix"],
	"*": ["prettier --write --ignore-unknown"],
};
