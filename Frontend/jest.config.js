/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.js$': 'babel-jest',  // Ensure .js files are transformed by Babel
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    testMatch: ['**/testing/**/*.test.ts?(x)', '**/__tests__/**/*.test.ts?(x)'],
  };
  