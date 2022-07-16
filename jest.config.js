module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["webview/**/*.{js}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
