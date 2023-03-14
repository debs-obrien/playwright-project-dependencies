import { defineConfig } from '@playwright/test';
import path from 'path';

require('dotenv').config();

export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json');

export default defineConfig({
  testDir: './tests',
  reporter: [['list'], ['html']],
  use: {
    baseURL: 'https://en.wikipedia.org',
    trace: 'on-first-retry',
  },

  projects: [
    // this matches all tests ending with .setup.ts
    {
      name: 'setup',
      testMatch: '**/*.setup.ts',
    },
    // this project depends on the setup project
    {
      name: 'e2e tests logged in',
      testMatch: '**/*loggedin.spec.ts',
      dependencies: ['setup'],
      use: {
        storageState: STORAGE_STATE,
      },
    },
    // this project runs all tests expect ones for logged in
    {
      name: 'e2e tests',
      testIgnore: ['**/*loggedin.spec.ts', '**/*.setup.ts'],
    },
  ],
});
