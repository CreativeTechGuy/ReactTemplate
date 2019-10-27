# React Template

This repository exists as a starting point for a new React application. The build system, unit testing and folder structure is all in place. Delete what you don't need and get started!

This repository should be generic enough that most people can use it out of the box. It comes with an existing "hello world" application which you can build and run right away.

## NPM scripts

The npm scripts defined in package.json are designed for Windows, but they can be easily changed to work on a Mac/Unix system.

* `npm install` install all dependencies. *Do this first before anything else*
* `npm run dev` starts a local server which can be accessed at https://localhost:7579. As long as this server is running it'll auto refresh whenever you save changes.
* `npm run build` creates a release build of your application. All output files will be located in the dist folder. This also runs `lint`, `test` and `clean`.
* `npm run build-analysis` opens a bundle analysis showing the file size of each dependency in your output JavaScript bundle.
* `npm run lint` runs eslint enforcing good coding style and habits and erroring if any are broken.
* `npm run test` runs jest and all unit tests located in \_\_tests\_\_ with `test.js` as their file extension.
* `npm run clean` removes the dist folder if it exists.


## Why use this instead of create-react-app?

Tools like create-react-app hide away all of the complexity of setting up a new project. They are great to start out with, but as soon as you want to customize or understand how it all works you'll have trouble. My goal is to expose all of the fine details so you can clearly see what is going on. This makes it easier to debug and tweak settings to fit your needs.