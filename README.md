# React Template

This repository exists as a starting point for a new React 16 application (with hooks). The build system, unit testing and folder structure is all in place. Delete what you don't need and get started!

This repository should be generic enough that most people can use it out of the box. It comes with an existing "hello world" application which you can build and run right away.

## Dependencies Included

* [React](https://reactjs.org/docs/getting-started.html) (JavaScript UI framework)
* [Webpack](https://webpack.js.org/) (Asset bundling)
* [Babel](https://babeljs.io/docs/en/) (Transpiling JavaScript for older browsers)
* [ESLint](https://eslint.org/) (Identifying and reporting errors in code)
* [SCSS](https://sass-lang.com/guide) (enhanced CSS)
* [Jest](https://jestjs.io/docs/en/getting-started) (Unit test framework)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) (React unit test utilities)

## NPM scripts

* `npm install` - install all dependencies. *Do this first before anything else*
* `npm run dev` - starts a local server which can be accessed at https://localhost:7579. As long as this server is running it'll auto refresh whenever you save changes.
* `npm run build` - creates a release build of your application. All output files will be located in the dist folder. This also runs `clean`, `lint` and `test`.
* `npm run bundle-analysis` - opens a bundle analysis showing the file size of each dependency in your output JavaScript bundle.
* `npm run lint` - runs eslint enforcing good coding style and habits and erroring if any are broken.
* `npm run test` - runs jest and all unit tests located in \_\_tests\_\_ with `test.js` as their file extension.
* `npm run clean` - removes all auto-generated files and installed dependencies
* `npm run list-outdated-dependencies` - lists the dependencies that have newer versions available
* `npm run update-dependencies` - update and install all outdated dependencies

## Why use this instead of create-react-app?

Tools like create-react-app bring everything and the kitchen sink when setting up a new project. They are great to start quickly, but as soon as you want to customize or understand how it all works you'll have trouble. My goal is bring only the basics and expose all of the details so you can clearly see what is going on. This makes it easier to debug and tweak settings to fit your needs.