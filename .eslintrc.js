module.exports = {
  extends: [
    "mantine",
    "next/core-web-vitals",
    "plugin:@next/next/recommended",
    "plugin:jest/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: ["testing-library", "jest"],
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
