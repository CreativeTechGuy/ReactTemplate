/* eslint-env node */
/*
    ESLint Rule Documentation Sites
        https://eslint.org/docs/rules/
        https://github.com/yannickcr/eslint-plugin-react
        https://github.com/benmosher/eslint-plugin-import
        https://github.com/testing-library/eslint-plugin-testing-library
        https://github.com/jest-community/eslint-plugin-jest
        https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
*/

const baseRestrictedImports = {
    patterns: [
        {
            group: ["../*"],
            message: "Usage of relative parent imports is not allowed.",
        },
    ],
    paths: [
        {
            name: ".",
            message: "Usage of local index imports is not allowed.",
        },
        {
            name: "./index",
            message: "Import from the source file instead.",
        },
    ],
};

module.exports = {
    plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y", "jest", "testing-library", "import"],
    extends: ["eslint:recommended", "plugin:react-hooks/recommended"],
    env: {
        es6: true,
        browser: true,
    },
    reportUnusedDisableDirectives: true,
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: "module",
        requireConfigFile: false,
    },
    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },
    },
    overrides: [
        {
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
            ],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                sourceType: "module",
                project: "./tsconfig.json",
                tsconfigRootDir: __dirname,
            },
            files: ["*.ts", "*.tsx"],
            rules: {
                "default-param-last": "off",
                "@typescript-eslint/default-param-last": "error",
                "no-empty-function": "off",
                "@typescript-eslint/no-empty-function": "warn",
                "no-implied-eval": "off",
                "@typescript-eslint/no-implied-eval": "error",
                "no-invalid-this": "off",
                "@typescript-eslint/no-invalid-this": "error",
                "no-shadow": "off",
                "@typescript-eslint/no-shadow": "error",
                "no-throw-literal": "off",
                "@typescript-eslint/no-throw-literal": [
                    "error",
                    {
                        allowThrowingAny: false,
                        allowThrowingUnknown: false,
                    },
                ],
                "no-unused-expressions": "off",
                "@typescript-eslint/prefer-regexp-exec": "off",
                "@typescript-eslint/no-unused-expressions": "error",
                "@typescript-eslint/unbound-method": "off",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/consistent-type-assertions": [
                    "warn",
                    {
                        assertionStyle: "as",
                        objectLiteralTypeAssertions: "never",
                    },
                ],
                "@typescript-eslint/consistent-type-imports": "warn",
                "@typescript-eslint/explicit-function-return-type": [
                    "error",
                    {
                        allowTypedFunctionExpressions: true,
                    },
                ],
                "@typescript-eslint/explicit-member-accessibility": "warn",
                "@typescript-eslint/explicit-module-boundary-types": "error",
                "@typescript-eslint/no-base-to-string": "error",
                "@typescript-eslint/no-confusing-non-null-assertion": "error",
                "@typescript-eslint/no-confusing-void-expression": "error",
                "@typescript-eslint/no-invalid-void-type": "error",
                "@typescript-eslint/no-require-imports": "error",
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
                "@typescript-eslint/no-unnecessary-condition": "warn",
                "@typescript-eslint/no-unnecessary-qualifier": "warn",
                "@typescript-eslint/no-useless-empty-export": "warn",
                "@typescript-eslint/non-nullable-type-assertion-style": "warn",
                "@typescript-eslint/prefer-for-of": "warn",
                "@typescript-eslint/prefer-optional-chain": "warn",
                "@typescript-eslint/prefer-readonly": "warn",
                "@typescript-eslint/prefer-ts-expect-error": "warn",
                "@typescript-eslint/prefer-return-this-type": "error",
                "@typescript-eslint/prefer-string-starts-ends-with": "warn",
                "@typescript-eslint/require-array-sort-compare": "error",
                "@typescript-eslint/unified-signatures": "warn",
                "@typescript-eslint/array-type": "warn",
                "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
                "@typescript-eslint/member-delimiter-style": "warn",
                "@typescript-eslint/method-signature-style": "warn",
                "@typescript-eslint/naming-convention": [
                    "warn",
                    {
                        selector: "default",
                        format: ["camelCase"],
                    },
                    {
                        selector: ["function", "enumMember", "property"],
                        format: ["camelCase", "PascalCase"],
                    },
                    {
                        selector: "variable",
                        modifiers: ["const"],
                        format: ["camelCase", "PascalCase", "UPPER_CASE"],
                    },
                    {
                        selector: "typeLike",
                        format: ["PascalCase"],
                    },
                    {
                        selector: "typeProperty",
                        format: ["camelCase", "PascalCase", "UPPER_CASE"],
                    },
                ],
                "@typescript-eslint/no-extraneous-class": "error",
                "@typescript-eslint/no-parameter-properties": "error",
                "@typescript-eslint/no-redundant-type-constituents": "warn",
                "@typescript-eslint/strict-boolean-expressions": [
                    "error",
                    {
                        allowString: false,
                        allowNumber: false,
                        allowNullableObject: false,
                    },
                ],
            },
        },
        {
            extends: ["plugin:react/recommended", "plugin:jsx-a11y/recommended"],
            files: ["*.jsx", "*.tsx"],
            rules: {
                "react/react-in-jsx-scope": "off",
                "react/prop-types": "off",
                "react/display-name": "off",
                "react/no-unescaped-entities": "off",
                "react/no-access-state-in-setstate": "error",
                "react/no-array-index-key": "error",
                "react/no-danger": "error",
                "react/no-did-mount-set-state": "error",
                "react/no-did-update-set-state": "error",
                "react/no-invalid-html-attribute": "warn",
                "react/no-redundant-should-component-update": "error",
                "react/no-this-in-sfc": "error",
                "react/no-typos": "error",
                "react/no-unused-state": "warn",
                "react/self-closing-comp": "warn",
                "react/void-dom-elements-no-children": "error",
                "react/jsx-boolean-value": ["warn", "always"],
                "react/jsx-fragments": "warn",
                "react/jsx-key": [
                    "error",
                    {
                        checkFragmentShorthand: true,
                        checkKeyMustBeforeSpread: true,
                        warnOnDuplicates: true,
                    },
                ],
                "react/jsx-no-script-url": "error",
                "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
                "react/jsx-pascal-case": "warn",
                "react/jsx-props-no-spreading": "warn",
                "no-restricted-imports": [
                    "warn",
                    {
                        ...baseRestrictedImports,
                        paths: [
                            {
                                name: "react",
                                importNames: ["default"],
                                message:
                                    "'import React' is not needed due to the new JSX transform: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html\n\nIf you need a named export, use: 'import { Something } from \"react\"'",
                            },
                        ],
                    },
                ],
                "react/function-component-definition": [
                    "warn",
                    {
                        unnamedComponents: "arrow-function",
                    },
                ],
                "react/hook-use-state": "warn",
                "react/iframe-missing-sandbox": "warn",
                "react/jsx-curly-brace-presence": ["warn", "never"],
            },
        },
        {
            extends: ["plugin:jest/recommended", "plugin:jest/style"],
            files: ["*.test.js", "*.test.ts", "*.test.jsx", "*.test.tsx", "test/**"],
            globals: {
                screen: "off",
            },
            rules: {
                "jest/no-conditional-in-test": "error",
                "jest/no-test-return-statement": "error",
                "jest/prefer-comparison-matcher": "warn",
                "jest/prefer-equality-matcher": "warn",
                "jest/prefer-strict-equal": "error",
                "jest/require-top-level-describe": "error",
                "jest/consistent-test-it": [
                    "warn",
                    {
                        withinDescribe: "test",
                    },
                ],
                "jest/prefer-spy-on": "warn",
                "jest/prefer-lowercase-title": ["warn", { ignoreTopLevelDescribe: true }],
                "@typescript-eslint/naming-convention": "off",
            },
        },
        {
            extends: ["plugin:testing-library/react"],
            files: ["*.test.jsx", "*.test.tsx"],
            rules: {
                "jest/expect-expect": [
                    "warn",
                    {
                        assertFunctionNames: ["expect", "*.getBy*", "*.getAllBy*", "*.findBy*", "*.findAllBy*"],
                    },
                ],
                "testing-library/no-render-in-setup": "off",
                "testing-library/prefer-wait-for": "warn",
            },
        },
    ],
    rules: {
        "no-template-curly-in-string": "error",
        "array-callback-return": "error",
        "consistent-return": "error",
        curly: "warn",
        "default-param-last": "error",
        eqeqeq: "error",
        "no-constructor-return": "error",
        "no-empty-function": "warn",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-return-assign": "warn",
        "no-script-url": "error",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "error",
        "no-unused-expressions": "warn",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-return": "warn",
        "prefer-promise-reject-errors": "error",
        radix: "error",
        "require-await": "error",
        "wrap-iife": ["warn", "inside"],
        "no-shadow": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-multi-assign": "warn",
        "no-new-object": "error",
        "no-useless-computed-key": "warn",
        "no-useless-rename": "warn",
        "no-var": "error",
        "prefer-const": "warn",
        "prefer-numeric-literals": "warn",
        "prefer-object-spread": "warn",
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "prefer-template": "warn",
        "import/no-duplicates": "warn",
        "import/order": [
            "warn",
            {
                groups: ["builtin", "external", ["parent", "sibling", "internal", "index"]],
                pathGroups: [
                    {
                        pattern: "~/**",
                        group: "internal",
                    },
                    {
                        pattern: "test/**",
                        group: "internal",
                    },
                ],
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
                "newlines-between": "never",
            },
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [".jsx", ".tsx"],
            },
        ],
        "no-else-return": "warn",
        "func-names": ["warn", "never"],
        "func-style": ["warn", "declaration"],
        "one-var": ["warn", "never"],
        "operator-assignment": "warn",
        "prefer-arrow-callback": "warn",
        "no-restricted-syntax": [
            "warn",
            {
                selector: "CallExpression[callee.name='String']",
                message: "Don't use the String function. Use .toString() instead.",
            },
            {
                selector: "CallExpression[callee.name='Number']",
                message: "Don't use the Number function. Use parseInt or parseFloat instead.",
            },
            {
                selector: "CallExpression[callee.name='Boolean']",
                message: "Don't use the Boolean function. Use a strict comparison instead.",
            },
        ],
        "no-restricted-imports": ["warn", baseRestrictedImports],
    },
};
