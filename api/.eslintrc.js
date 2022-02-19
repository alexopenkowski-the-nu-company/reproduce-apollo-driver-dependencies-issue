module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json",
		sourceType: "module",
	},
	env: {
		node: true,
		jest: true,
	},
}
