module.exports = {
  testURL: "http://localhost",
  coverageDirectory: "./coverage/",
  collectCoverageFrom: [
    "**/*.js",
    "!**/*.json",
    "!**webpack.config.js**",
    "!**jest.config.js**",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/coverage/**",
    "!**src/dev.js**"
  ],
  coverageThreshold: {
    global: {
      statements: 96,
      branches: 100,
      functions: 88,
      lines: 96
    }
  }
};
