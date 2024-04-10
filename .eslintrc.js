// cspell:words setstate, eqeqeq, iife, backreference, isnan, nonoctal, textnodes, nonconstructor, typedefs
/* eslint-env node */
/*
    Rules in this file are in the same order as they appear in the docs sites to make it easy to find. (Usually this is alphabetical but sometimes there's subgroups.)
    ESLint Rule Documentation Sites:
        https://eslint.org/docs/latest/rules/
        https://github.com/jsx-eslint/eslint-plugin-react
        https://github.com/import-js/eslint-plugin-import
        https://github.com/testing-library/eslint-plugin-testing-library
        https://github.com/jest-community/eslint-plugin-jest
        https://typescript-eslint.io/rules/
        https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
        https://github.com/gund/eslint-plugin-deprecation
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
    plugins: [
        "@typescript-eslint",
        "react",
        "react-hooks",
        "jsx-a11y",
        "jest",
        "testing-library",
        "import",
        "deprecation",
    ],
    env: {
        es2024: true,
        browser: true,
    },
    root: true,
    reportUnusedDisableDirectives: true,
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {
            jsx: true,
            impliedStrict: true,
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
            parser: "@typescript-eslint/parser",
            parserOptions: {
                sourceType: "module",
                project: "./tsconfig.json",
                tsconfigRootDir: __dirname,
            },
            files: ["*.ts", "*.tsx"],
            rules: {
                // TypeScript ESLint Core Disables - https://typescript-eslint.io/docs/linting/configs#eslint-recommended
                "constructor-super": "off",
                "getter-return": "off",
                "no-const-assign": "off",
                "no-dupe-args": "off",
                "no-dupe-keys": "off",
                "no-func-assign": "off",
                "no-import-assign": "off",
                "no-new-native-nonconstructor": "off",
                "no-obj-calls": "off",
                "no-setter-return": "off",
                "no-this-before-super": "off",
                "no-undef": "off",
                "no-unreachable": "off",
                "no-unsafe-negation": "off",
                "valid-typeof": "off",
                // TypeScript - https://typescript-eslint.io/rules/
                "@typescript-eslint/adjacent-overload-signatures": "error",
                "@typescript-eslint/array-type": "warn",
                "@typescript-eslint/await-thenable": "error",
                "@typescript-eslint/ban-ts-comment": "error",
                "@typescript-eslint/ban-types": "error",
                "@typescript-eslint/consistent-generic-constructors": ["warn", "constructor"],
                "@typescript-eslint/consistent-type-assertions": [
                    "warn",
                    {
                        assertionStyle: "as",
                        objectLiteralTypeAssertions: "allow-as-parameter",
                    },
                ],
                "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
                "@typescript-eslint/consistent-type-exports": "error",
                "@typescript-eslint/consistent-type-imports": "warn",
                "@typescript-eslint/explicit-function-return-type": [
                    "error",
                    {
                        allowTypedFunctionExpressions: true,
                    },
                ],
                "@typescript-eslint/explicit-member-accessibility": "warn",
                "@typescript-eslint/explicit-module-boundary-types": "error",
                "@typescript-eslint/method-signature-style": "warn",
                "@typescript-eslint/naming-convention": [
                    "warn",
                    {
                        selector: [
                            "classProperty",
                            "objectLiteralProperty",
                            "typeProperty",
                            "classMethod",
                            "objectLiteralMethod",
                            "typeMethod",
                            "accessor",
                            "enumMember",
                        ],
                        format: null,
                        modifiers: ["requiresQuotes"],
                    },
                    {
                        selector: "default",
                        format: ["camelCase"],
                    },
                    {
                        selector: "import",
                        format: ["camelCase", "PascalCase"],
                    },
                    {
                        selector: ["function", "method", "enumMember", "property"],
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
                "@typescript-eslint/no-array-delete": "error",
                "@typescript-eslint/no-base-to-string": "error",
                "@typescript-eslint/no-confusing-non-null-assertion": "error",
                "@typescript-eslint/no-confusing-void-expression": "error",
                "@typescript-eslint/no-duplicate-type-constituents": "warn",
                "@typescript-eslint/no-empty-interface": "warn",
                "@typescript-eslint/no-explicit-any": "warn",
                "@typescript-eslint/no-extra-non-null-assertion": "error",
                "@typescript-eslint/no-extraneous-class": "error",
                "@typescript-eslint/no-floating-promises": "error",
                "@typescript-eslint/no-for-in-array": "error",
                "@typescript-eslint/no-inferrable-types": "warn",
                "@typescript-eslint/no-invalid-void-type": "error",
                "@typescript-eslint/no-meaningless-void-operator": "warn",
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-misused-promises": "error",
                "@typescript-eslint/no-namespace": "warn",
                "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",
                "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
                "@typescript-eslint/no-redundant-type-constituents": "warn",
                "@typescript-eslint/no-require-imports": "error",
                "@typescript-eslint/no-this-alias": "warn",
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
                "@typescript-eslint/no-unnecessary-condition": "warn",
                "@typescript-eslint/no-unnecessary-qualifier": "warn",
                "@typescript-eslint/no-unnecessary-type-arguments": "warn",
                "@typescript-eslint/no-unnecessary-type-assertion": "warn",
                "@typescript-eslint/no-unnecessary-type-constraint": "warn",
                "@typescript-eslint/no-unsafe-argument": "error",
                "@typescript-eslint/no-unsafe-assignment": "error",
                "@typescript-eslint/no-unsafe-call": "error",
                "@typescript-eslint/no-unsafe-enum-comparison": "warn",
                "@typescript-eslint/no-unsafe-declaration-merging": "error",
                "@typescript-eslint/no-unsafe-member-access": "error",
                "@typescript-eslint/no-unsafe-return": "error",
                "@typescript-eslint/no-unsafe-unary-minus": "error",
                "@typescript-eslint/no-useless-empty-export": "warn",
                "@typescript-eslint/no-useless-template-literals": "warn",
                "@typescript-eslint/no-var-requires": "error",
                "@typescript-eslint/non-nullable-type-assertion-style": "warn",
                "@typescript-eslint/parameter-properties": "error",
                "@typescript-eslint/prefer-as-const": "warn",
                "@typescript-eslint/prefer-find": "warn",
                "@typescript-eslint/prefer-for-of": "warn",
                "@typescript-eslint/prefer-includes": "warn",
                "@typescript-eslint/prefer-namespace-keyword": "warn",
                "@typescript-eslint/prefer-nullish-coalescing": [
                    "warn",
                    {
                        ignoreTernaryTests: false,
                    },
                ],
                "@typescript-eslint/prefer-optional-chain": "warn",
                "@typescript-eslint/prefer-readonly": "warn",
                "@typescript-eslint/prefer-reduce-type-parameter": "warn",
                "@typescript-eslint/prefer-return-this-type": "error",
                "@typescript-eslint/prefer-string-starts-ends-with": "warn",
                "@typescript-eslint/prefer-ts-expect-error": "warn",
                "@typescript-eslint/require-array-sort-compare": "error",
                "@typescript-eslint/restrict-plus-operands": "error",
                "@typescript-eslint/restrict-template-expressions": "error",
                "@typescript-eslint/strict-boolean-expressions": [
                    "error",
                    {
                        allowString: false,
                        allowNumber: false,
                        allowNullableObject: false,
                        allowNullableEnum: false,
                    },
                ],
                "@typescript-eslint/switch-exhaustiveness-check": "error",
                "@typescript-eslint/triple-slash-reference": "warn",
                "@typescript-eslint/unbound-method": "error",
                "@typescript-eslint/unified-signatures": "warn",
                "@typescript-eslint/use-unknown-in-catch-callback-variable": "warn",
                // TypeScript Extension Rules - https://typescript-eslint.io/rules/#extension-rules
                "consistent-return": "off",
                "@typescript-eslint/consistent-return": "error",
                "default-param-last": "off",
                "@typescript-eslint/default-param-last": "error",
                "prefer-promise-reject-errors": "off",
                "@typescript-eslint/prefer-promise-reject-errors": "error",
                "no-array-constructor": "off",
                "@typescript-eslint/no-array-constructor": "error",
                "no-dupe-class-members": "off",
                "no-empty-function": "off",
                "@typescript-eslint/no-empty-function": "warn",
                "no-implied-eval": "off",
                "@typescript-eslint/no-implied-eval": "error",
                "no-invalid-this": "off",
                "no-loss-of-precision": "off",
                "@typescript-eslint/no-loss-of-precision": "error",
                "no-redeclare": "off",
                "@typescript-eslint/no-redeclare": [
                    "error",
                    {
                        ignoreDeclarationMerge: false,
                    },
                ],
                "no-shadow": "off",
                "@typescript-eslint/no-shadow": [
                    "error",
                    {
                        ignoreOnInitialization: true,
                    },
                ],
                "no-throw-literal": "off",
                "@typescript-eslint/no-throw-literal": [
                    "error",
                    {
                        allowThrowingAny: false,
                        allowThrowingUnknown: false,
                    },
                ],
                "no-unused-expressions": "off",
                "@typescript-eslint/no-unused-expressions": [
                    "warn",
                    {
                        enforceForJSX: true,
                    },
                ],
                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": "warn",
                "no-use-before-define": "off",
                "@typescript-eslint/no-use-before-define": [
                    "warn",
                    {
                        functions: false,
                        classes: false,
                        variables: true,
                        allowNamedExports: false,
                        // TS extension options
                        enums: true,
                        typedefs: true,
                        ignoreTypeReferences: true,
                    },
                ],
                "require-await": "off",
                "@typescript-eslint/require-await": "error",
                // Other
                "deprecation/deprecation": "warn",
            },
        },
        {
            // JSX A11y - This plugin is being extended because there's an extensive amount of custom options automatically configured. - https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
            extends: ["plugin:jsx-a11y/recommended"],
            files: ["*.jsx", "*.tsx"],
            rules: {
                // React - https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules
                "react/checked-requires-onchange-or-readonly": "error",
                "react/function-component-definition": [
                    "warn",
                    {
                        unnamedComponents: "arrow-function",
                    },
                ],
                "react/hook-use-state": "warn",
                "react/iframe-missing-sandbox": "warn",
                "react/no-access-state-in-setstate": "error",
                "react/no-array-index-key": "error",
                "react/no-children-prop": "error",
                "react/no-danger": "error",
                "react/no-danger-with-children": "error",
                "react/no-deprecated": "error",
                "react/no-did-mount-set-state": "error",
                "react/no-did-update-set-state": "error",
                "react/no-direct-mutation-state": "error",
                "react/no-find-dom-node": "error",
                "react/no-invalid-html-attribute": "warn",
                "react/no-is-mounted": "error",
                "react/no-object-type-as-default-prop": "error",
                "react/no-redundant-should-component-update": "error",
                "react/no-render-return-value": "error",
                "react/no-string-refs": "error",
                "react/no-this-in-sfc": "error",
                "react/no-typos": "error",
                "react/no-unknown-property": "error",
                "react/no-unused-state": "warn",
                "react/require-render-return": "error",
                "react/self-closing-comp": "warn",
                "react/void-dom-elements-no-children": "error",
                // JSX-specific rules - https://github.com/jsx-eslint/eslint-plugin-react#jsx-specific-rules
                "react/jsx-boolean-value": ["warn", "always"],
                "react/jsx-curly-brace-presence": ["warn", "never"],
                "react/jsx-fragments": "warn",
                "react/jsx-key": [
                    "error",
                    {
                        checkFragmentShorthand: true,
                        checkKeyMustBeforeSpread: true,
                        warnOnDuplicates: true,
                    },
                ],
                "react/jsx-no-comment-textnodes": "error",
                "react/jsx-no-duplicate-props": "error",
                "react/jsx-no-script-url": "error",
                "react/jsx-no-target-blank": "warn",
                "react/jsx-no-undef": "error",
                "react/jsx-no-useless-fragment": [
                    "warn",
                    {
                        allowExpressions: true,
                    },
                ],
                "react/jsx-pascal-case": "warn",
                "react/jsx-props-no-spreading": "warn",
                "react/jsx-uses-react": "error",
                "react/jsx-uses-vars": "error",
                // Other
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
            },
        },
        {
            files: ["*.test.js", "*.test.ts", "*.test.jsx", "*.test.tsx", "test/**"],
            env: {
                "jest/globals": true,
            },
            rules: {
                // Jest - https://github.com/jest-community/eslint-plugin-jest#rules
                "jest/consistent-test-it": [
                    "warn",
                    {
                        withinDescribe: "test",
                    },
                ],
                "jest/expect-expect": "warn",
                "jest/no-alias-methods": "warn",
                "jest/no-commented-out-tests": "warn",
                "jest/no-conditional-expect": "error",
                "jest/no-conditional-in-test": "error",
                "jest/no-confusing-set-timeout": "error",
                "jest/no-deprecated-functions": "error",
                "jest/no-disabled-tests": "warn",
                "jest/no-done-callback": "error",
                "jest/no-export": "error",
                "jest/no-focused-tests": "warn",
                "jest/no-identical-title": "error",
                "jest/no-interpolation-in-snapshots": "error",
                "jest/no-jasmine-globals": "error",
                "jest/no-mocks-import": "error",
                "jest/no-standalone-expect": "error",
                "jest/no-test-prefixes": "warn",
                "jest/no-test-return-statement": "error",
                "jest/prefer-comparison-matcher": "warn",
                "jest/prefer-each": "warn",
                "jest/prefer-equality-matcher": "warn",
                "jest/prefer-importing-jest-globals": "error",
                "jest/prefer-lowercase-title": [
                    "warn",
                    {
                        ignoreTopLevelDescribe: true,
                    },
                ],
                "jest/prefer-mock-promise-shorthand": "warn",
                "jest/prefer-spy-on": "warn",
                "jest/prefer-strict-equal": "error",
                "jest/prefer-to-be": "warn",
                "jest/prefer-to-contain": "warn",
                "jest/prefer-to-have-length": "warn",
                "jest/valid-describe-callback": "error",
                "jest/valid-expect": "error",
                "jest/valid-expect-in-promise": "error",
                "jest/valid-title": "warn",
            },
        },
        {
            parser: "@typescript-eslint/parser",
            parserOptions: {
                sourceType: "module",
                project: "./tsconfig.json",
                tsconfigRootDir: __dirname,
            },
            files: ["*.test.ts", "*.test.tsx", "test/**/*.ts"],
            rules: {
                // TypeScript-specific test overrides
                "@typescript-eslint/naming-convention": "off",
                "@typescript-eslint/unbound-method": "off",
                "jest/unbound-method": "error",
            },
        },
        {
            files: ["*.test.jsx", "*.test.tsx"],
            rules: {
                // React Testing Library - https://github.com/testing-library/eslint-plugin-testing-library
                "testing-library/await-async-queries": "error",
                "testing-library/await-async-utils": "error",
                "testing-library/no-await-sync-queries": "error",
                "testing-library/no-container": "error",
                "testing-library/no-debugging-utils": "warn",
                "testing-library/no-dom-import": ["error", "react"],
                "testing-library/no-global-regexp-flag-in-query": "warn",
                "testing-library/no-node-access": "warn",
                "testing-library/no-unnecessary-act": "warn",
                "testing-library/no-wait-for-multiple-assertions": "error",
                "testing-library/no-wait-for-side-effects": "error",
                "testing-library/no-wait-for-snapshot": "error",
                "testing-library/prefer-find-by": "warn",
                "testing-library/prefer-implicit-assert": "warn",
                "testing-library/prefer-presence-queries": "error",
                "testing-library/prefer-query-by-disappearance": "error",
                "testing-library/prefer-screen-queries": "warn",
                "testing-library/prefer-user-event": "error",
                "testing-library/render-result-naming-convention": "error",
                // Jest - https://github.com/jest-community/eslint-plugin-jest
                "jest/expect-expect": [
                    "warn",
                    {
                        assertFunctionNames: ["expect", "*.getBy*", "*.getAllBy*", "*.findBy*", "*.findAllBy*"],
                    },
                ],
            },
        },
        {
            // This enables running the JS rules on these file types
            files: ["*.cjs", "*.mjs"],
            env: {
                node: true,
            },
        },
    ],
    rules: {
        // Possible Problems - https://eslint.org/docs/latest/rules/#possible-problems
        "array-callback-return": [
            "error",
            {
                checkForEach: true,
            },
        ],
        "constructor-super": "error",
        "for-direction": "error",
        "getter-return": "error",
        "no-async-promise-executor": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": ["error", "always"],
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-constructor-return": "error",
        "no-control-regex": "error",
        "no-debugger": "warn",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-ex-assign": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-import-assign": "error",
        "no-inner-declarations": ["error", "both"],
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": [
            "error",
            {
                skipStrings: false,
                skipTemplates: false,
                skipJSXText: false,
            },
        ],
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-new-native-nonconstructor": "error",
        "no-obj-calls": "error",
        "no-prototype-builtins": "error",
        "no-self-assign": "warn",
        "no-self-compare": "warn",
        "no-setter-return": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unreachable": "warn",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": [
            "error",
            {
                enforceForOrderingRelations: true,
            },
        ],
        "no-unsafe-optional-chaining": [
            "error",
            {
                disallowArithmeticOperators: true,
            },
        ],
        "no-unused-vars": "warn",
        "no-use-before-define": [
            "warn",
            {
                functions: false,
                classes: false,
                variables: true,
                allowNamedExports: false,
            },
        ],
        "no-useless-backreference": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
        // Suggestions - https://eslint.org/docs/latest/rules/#suggestions
        "consistent-return": "error",
        curly: "warn",
        "default-param-last": "error",
        eqeqeq: "error",
        "func-names": ["warn", "never"],
        "func-style": ["warn", "declaration"],
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-case-declarations": "error",
        "no-delete-var": "error",
        "no-else-return": "warn",
        "no-empty": "warn",
        "no-empty-function": "warn",
        "no-empty-static-block": "warn",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": [
            "warn",
            {
                enforceForLogicalOperands: true,
            },
        ],
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": [
            "error",
            {
                capIsConstructor: false,
            },
        ],
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-multi-assign": "warn",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-object-constructor": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "warn",
        "no-restricted-imports": ["warn", baseRestrictedImports],
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
            {
                selector: "TSEnumDeclaration",
                message: "Use a type with a union of strings instead.",
            },
            {
                selector: "TSTypeReference Identifier[name='React']",
                message: "Import the type explicitly instead of using the React global.",
            },
            {
                selector: "TSTypeReference Identifier[name='PropsWithChildren']",
                message: "Explicitly declare children in your props type.",
            },
        ],
        "no-return-assign": ["warn", "always"],
        "no-script-url": "error",
        "no-sequences": [
            "warn",
            {
                allowInParentheses: false,
            },
        ],
        "no-shadow": [
            "error",
            {
                ignoreOnInitialization: true,
            },
        ],
        "no-shadow-restricted-names": "error",
        "no-throw-literal": "error",
        "no-unused-expressions": [
            "warn",
            {
                enforceForJSX: true,
            },
        ],
        "no-useless-call": "error",
        "no-useless-catch": "warn",
        "no-useless-computed-key": [
            "warn",
            {
                enforceForClassMembers: true,
            },
        ],
        "no-useless-concat": "error",
        "no-useless-escape": "warn",
        "no-useless-rename": "warn",
        "no-useless-return": "warn",
        "no-var": "error",
        "no-with": "error",
        "one-var": ["warn", "never"],
        "operator-assignment": "warn",
        "prefer-arrow-callback": "warn",
        "prefer-const": "warn",
        "prefer-numeric-literals": "warn",
        "prefer-object-spread": "warn",
        "prefer-promise-reject-errors": "error",
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "prefer-template": "warn",
        radix: "error",
        "require-await": "error",
        "require-yield": "error",
        // Layout & Formatting - https://eslint.org/docs/latest/rules/#layout--formatting
        // ---- Nothing in this category. Defer to Prettier. ----
        // React Hooks - https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        // React - https://github.com/jsx-eslint/eslint-plugin-react
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [".jsx", ".tsx"],
            },
        ],
        // Import - https://github.com/import-js/eslint-plugin-import
        "import/no-duplicates": "warn",
        "import/no-namespace": "warn",
        "import/order": [
            "warn",
            {
                groups: ["builtin", "external", "parent", ["sibling", "internal", "index"]],
                pathGroups: [
                    {
                        pattern: "~/**",
                        group: "parent",
                    },
                    {
                        pattern: "test/**",
                        group: "parent",
                    },
                ],
                alphabetize: {
                    order: "asc",
                    orderImportKind: "desc",
                    caseInsensitive: true,
                },
                "newlines-between": "never",
            },
        ],
    },
};
