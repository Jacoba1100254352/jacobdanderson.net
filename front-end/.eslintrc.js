module.exports = {
  root: true,

  env: {
    node: true,
  },

  // Combine the extends arrays into one, removing the duplication
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier",
    "@vue/typescript"
  ],

  parserOptions: {
    parser: "@typescript-eslint/parser",
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  }
};

