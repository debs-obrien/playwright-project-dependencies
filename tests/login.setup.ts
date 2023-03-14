import { test as setup, expect } from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config';

setup('do login', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Enter your username').fill(process.env.PASSWORD!);
  await page.getByPlaceholder('Enter your password').fill(process.env.PASSWORD!);
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page.getByRole('button', { name: 'Personal tools' })).toBeVisible();
  await page.context().storageState({ path: STORAGE_STATE });
});
