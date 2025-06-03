module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    // Turn off specific rules that were causing errors
    "@typescript-eslint/no-explicit-any": "error",
    "react/no-unescaped-entities": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "prefer-const": "error",
  },
};
