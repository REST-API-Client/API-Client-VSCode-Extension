module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["webview/**/*.{js,jsx,ts,tsx}", "!webview/**/*.d.ts"],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "^.+.(svg|png|jpg)$": "jest-transform-stub",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
    "^.+\\.svg$": "jest-transform-stub",
  },
};
