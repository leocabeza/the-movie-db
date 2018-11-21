module.export = {
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
    "!**src/dev.js**",
    "!**mocks.js**",
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 100,
      functions: 95,
      lines: 98
    }
  }
};
