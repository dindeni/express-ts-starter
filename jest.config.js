module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['config'],
  testRegex: '/tests/.*.spec.(js|ts)?$',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/tests/'],
}
