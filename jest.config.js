module.exports = {
  coverageDirectory: "./coverage",
  collectCoverageFrom: ["src/**/*.ts", "src/**/*.tsx"],
  testEnvironment: "node",
  modulePaths: ["<rootDir>/src", "node_modules"],
  roots: ["src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
  coverageReporters: ["json", "lcov", "text"],
  coveragePathIgnorePatterns: [".*/src/.*\\.d\\.ts", ".*/src/testUtil/.*"],
};
