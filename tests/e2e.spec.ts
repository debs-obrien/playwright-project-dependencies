import { test, expect } from '@playwright/test';

test('should show search', async ({ page }) => {
  
  await page.goto('/');
  await page.getByRole('searchbox').fill('playwright');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('heading', { name: 'Playwright', exact: true })).toBeVisible();
});
