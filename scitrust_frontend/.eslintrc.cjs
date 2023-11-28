module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ["react",
    "@typescript-eslint", "react-refresh"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ], "prettier/prettier": [
      "error",
      {
        "semi": false,
        "tabWidth": 2,
        "useTabs": true,
        "printWidth": 80,
        "endOfLine": "auto",
        "singleQuote": true,
        "bracketSpacing": true,
        "arrowParens": "always",
        "trailingComma": "none"
      }
    ],
    "react-refresh/only-export-components": "off"
  },
}
