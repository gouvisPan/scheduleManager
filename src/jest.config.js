module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/dist"], // might want?
  moduleNameMapper: {
    "@components(.*)": "<rootDir>/src/components$1", // might want?
  },
  moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/src/jest-setup.ts"],
};
