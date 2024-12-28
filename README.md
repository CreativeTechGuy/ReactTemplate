# React Template

This repository exists as a starting point for a new React 18 application (with hooks). The build system, testing, linting, formatting, compiling, spellchecking and more are all pre-configured.

This repository should be generic enough that most people can use it out of the box. It comes with an existing "hello world" application which you can build and run right away.

It also includes all of the nice-to-haves to ensure that you code is high quality and follows best practices. This is very helpful for a beginner who needs nudges in the right direction but also helps an expert focus on the higher level problems and not worry about missing smaller errors.

## Setup

- Be sure you have [the current LTS version of Node.js installed](https://nodejs.org/)
- If you are on Windows, you probably want to be using either [GitBash which comes with Git](https://git-scm.com/download/win) or [WSL](https://docs.microsoft.com/en-us/windows/wsl/install).
- Run `npm ci` to install dependencies
- Run `npm run start` to start the dev server and visit the link provided in the terminal to view it in your browser

## Core Dependencies Included

- [React](https://react.dev/learn) (JavaScript UI framework)
- [Webpack](https://webpack.js.org/) (Asset bundling)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html) (JavaScript with Types)
- [Babel](https://babeljs.io/docs/en/) (Transpiling JavaScript for older browsers)
- [ESLint](https://eslint.org/) (Identifying and reporting errors in code)
- [Prettier](https://prettier.io/docs/en/index.html) (Code formatter)
- [CSpell](https://github.com/streetsidesoftware/cspell) (Code Spellchecker)
- [SCSS](https://sass-lang.com/guide) (Enhanced CSS)
- [Jest](https://jestjs.io/docs/en/getting-started) (Unit test framework)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) (React unit test utilities)
- [Husky](https://typicode.github.io/husky) (Git hooks - run commands on commit)

## NPM scripts

- `npm clean-install` - install all dependencies. _Do this first before anything else_
- `npm run start` - starts a local server which can be accessed at http://localhost:7579. As long as this server is running it'll auto refresh whenever you save changes.
- `npm run release` - creates a release build of your application. All output files will be located in the dist folder. This also runs all of the checks to ensure the code works, is formatted, etc.
- `npm run verify` - checks the application without building
- `npm run bundle-analysis` - opens a bundle analysis UI showing the file size of each dependency in your output JavaScript bundle.
- `npm run lint` - runs ESLint enforcing good coding style and habits and erroring if any are broken.
    - `npm run lint:fix` - fixes any auto-fixable ESLint errors
- `npm run format` - runs Prettier to reformat all files
- `npm run autofix` - fix all autofixable issues
- `npm run ts-check` - runs the TypeScript compiler to see TypeScript errors
- `npm run spellcheck` - runs CSpell to see any typos. If the word is misidentified, add it to `cspell.json`.
- `npm run test` - runs Jest and all unit tests
- `npm run clean` - removes all auto-generated files and dependencies
- `npm run list-outdated-dependencies` - lists the dependencies that have newer versions available with links to their repository and changelog
- `npm run update-dependencies` - update and install all outdated dependencies

## Why use this instead of create-react-app?

Tools like create-react-app bring everything and the kitchen sink when setting up a new project. They are great to start quickly, but as soon as you want to customize or understand how it all works you'll have trouble. My goal is to expose all of the tools and show how easy it can be to configure from scratch. This makes it easier to debug and tweak settings to fit your needs.
