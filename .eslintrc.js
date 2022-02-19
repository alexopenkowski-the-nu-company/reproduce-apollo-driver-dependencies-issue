module.exports = {
	root: true,
	parser: "@typescript-eslint/parser", // Specifies the ESLint parser
	parserOptions: {
		tsconfigRootDir: __dirname,
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: "module", // Allows for the use of imports
		project: "./tsconfig.json",
		ecmaFeatures: {
			impliedStrict: true,
		},
	},
	plugins: ["@typescript-eslint"],
	ignorePatterns: ["*.js", "**/generated/**/*.ts"],
	extends: [
		"plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
	],
	rules: {
		"no-multiple-empty-lines": "error",
		curly: ["error", "all"],
		eqeqeq: ["error", "always", { null: "ignore" }], // Check type-unsafe equality operators
		"no-console": ["error", { allow: ["warn", "error"] }],
		"no-var": "error",
		"object-shorthand": ["error", "always", { avoidQuotes: true }],
		"spaced-comment": "error",
		"sort-imports": ["error", { ignoreDeclarationSort: true }],
		"no-return-assign": "error",
		"no-useless-return": "error",
		"default-case-last": "error",
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-lonely-if": "error",
		"no-unsafe-negation": "error",
		"no-extra-boolean-cast": "error",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/explicit-member-accessibility": "off",
		"@typescript-eslint/promise-function-async": "error",
		"@typescript-eslint/dot-notation": "error",
		"@typescript-eslint/return-await": "error",
		"@typescript-eslint/no-shadow": "error",
		"@typescript-eslint/no-throw-literal": "error",
		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-unnecessary-condition": "error",
		"@typescript-eslint/no-unnecessary-type-constraint": "error",
		"@typescript-eslint/prefer-as-const": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
	},
}
