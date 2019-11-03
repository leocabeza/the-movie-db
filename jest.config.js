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
  ]
};
