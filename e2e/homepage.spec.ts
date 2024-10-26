import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('/');
  const title = page.getByRole('heading', { name: 'Home' });
  await expect(title).toHaveText('Home');
});
