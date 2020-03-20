const path = require("path");

module.exports = {
  rootDir: __dirname,
  preset: "@vue/cli-plugin-unit-jest",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@ele(.*)$": "<rootDir>/src/components/element/$1"
  }
};
