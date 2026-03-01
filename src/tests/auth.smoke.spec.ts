import { test, expect } from '@playwright/test';

test('@smoke OrangeHRM login -> dashboard', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');

  await expect(page.locator('button[type="submit"]')).toBeVisible();

  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL(/\/dashboard\/index/i);
  await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();
});