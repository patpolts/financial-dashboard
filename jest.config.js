module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
roots: ['<rootDir>/src', '<rootDir>/src/tests'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
    '**/tests/**/*.[jt]s?(x)'  
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
