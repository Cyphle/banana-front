import type { Config } from 'jest';

const config: Config = {
  prettierPath: require.resolve('prettier-2'),
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "assets/images/generated-icons": "identity-obj-proxy",
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  modulePaths: [
    "<rootDir>/src"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/test-utils/setupTests.ts"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/src/assets/images/generated-icons/",
    ".styled.ts",
    ".types.ts",
    "index.ts",
    "reportWebVitals.ts",
    "routes.ts",
    "router.tsx",
    "App.tsx"
  ]
};

export default config;
