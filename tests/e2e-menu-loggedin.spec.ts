import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('menu', async ({ page }) => {
  await page.getByRole('link', { name: 'TestingLogin' }).click();
  await expect(page.getByRole('heading', { name: /TestingLogin/i })).toBeVisible();
  await page.getByRole('link', { name: /alerts/i  }).click();
  await expect(page.getByText('Alerts (5)')).toBeVisible();
  await page.locator('#pt-watchlist-2').getByRole('link', { name: 'Watchlist' }).click();
  await expect(page.getByRole('heading', { name: 'Watchlist' })).toBeVisible();

})