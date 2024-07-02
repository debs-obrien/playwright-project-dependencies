import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('menu', async ({ page }) => {
  await page.getByRole('link', { name: 'TestingLogin' }).click();
  await expect(page.getByRole('heading', { name: /TestingLogin/i })).toBeVisible();
  await page.getByRole('link', { name: /alerts/i  }).click();
  await expect(page.getByText('Alerts')).toBeVisible();
  await page.getByRole('button', { name: /notice/i  }).click();
  await expect(page.getByText('Notices', { exact: true })).toBeVisible();
  await page.getByRole('link', { name: /watchlist/i  }).click();
  await expect(page.getByRole('heading', { name: 'Watchlist' })).toBeVisible();

})