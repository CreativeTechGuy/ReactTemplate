const packageJson = require("./package.json");
const allPackages = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
};
const coreJSVersion = allPackages["core-js"].match(/\d\.\d+/)[0];

module.exports = (api) => {
    const isTest = api.env("test");
    const isDev = api.env("development");
    return {
        plugins: [...(isDev ? ["react-refresh/babel"] : [])],
        presets: [
            [
                "@babel/env",
                {
                    bugfixes: true,
                    useBuiltIns: "usage",
                    corejs: {
                        version: coreJSVersion,
                        proposals: true,
                    },
                    shippedProposals: true,
                    ...(isTest
                        ? {
                              targets: {
                                  node: "current",
                              },
                          }
                        : {}),
                },
            ],
            [
                "@babel/react",
                {
                    useBuiltIns: true,
                    runtime: "automatic",
                },
            ],
            [
                "@babel/typescript",
                {
                    allowDeclareFields: true,
                    onlyRemoveTypeImports: true,
                },
            ],
        ],
        retainLines: isTest,
        assumptions: {
            ignoreFunctionLength: true,
            constantReexports: true,
            noClassCalls: true,
            noDocumentAll: true,
        },
    };
};
