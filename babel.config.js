/* eslint-env node */

module.exports = (api) => {
    const isTest = api.env("test");
    return {
        presets: [
            [
                "@babel/env",
                {
                    bugfixes: true,
                    useBuiltIns: "usage",
                    corejs: 3,
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
    };
};
