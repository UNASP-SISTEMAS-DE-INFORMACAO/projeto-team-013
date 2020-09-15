module.exports = {
  clearMocks: true,
  projects: ['<rootDir>/packages/**/jest.config.js'],
  testEnvironment: 'node',
  testMatch: ['*.spec.ts', '*.spec.tsx']
}
