module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "eqeqeq": ["error", "always"],
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-var": "error",
    "object-curly-spacing": ["error", "always"],
},
};
