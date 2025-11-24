module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  extends: [
    "eslint:recommended",

    // TypeScript type-aware rules
    "plugin:@typescript-eslint/recommended-type-checked",
    // Optional stylistic rules
    "plugin:@typescript-eslint/stylistic-type-checked",

    // React rules
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",

    // React Hooks rules (оставляем)
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
