module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>../../src/components/$1',
    '^@pages/(.*)$': '<rootDir>../../src/pages/$1',
    '^@i18n/(.*)$': '<rootDir>../../src/i18n/$1',
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/src/**/?(*.)+(spec|test).ts?(x)',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/public/', '/config/'],
  rootDir: '../../',
};
