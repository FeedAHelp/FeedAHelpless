module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsconfig: 'tsconfig.json',
    },
  },
  rootDir: '.',
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/src/mocks/styleMock.ts',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/src/mocks/fileMock.ts`,

    // Handle module aliases
    '^src/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  preset: 'ts-jest',
}
