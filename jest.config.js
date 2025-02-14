/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

/** @type {import('jest').Config} */
const config = {
	preset: 'ts-jest',
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.json',
		},
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@public/(.*)$': '<rootDir>/public/$1',
	},
	coverageProvider: 'v8',
	testEnvironment: 'jest-environment-jsdom',
	modulePathIgnorePatterns: ['.next'],
};

module.exports = createJestConfig(config);
