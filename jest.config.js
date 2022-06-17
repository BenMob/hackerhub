/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
  "coverageThreshold": {
    "global": {
      "branches": 95,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  }
}