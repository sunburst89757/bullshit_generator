module.exports = {
  env: {
    node: true
  },
  extends: ["airbnb-base", "eslint:recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "no-console": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-plusplus": "off",
    "no-unused-vars": "warn",
    camelcase: "off"
  }
};
