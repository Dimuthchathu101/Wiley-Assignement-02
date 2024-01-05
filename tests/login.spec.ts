import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');
  await page.getByLabel('Log in or Register').click();
  await page.getByLabel('Email or Customer ID').fill('dimuthcbandara97@gmail.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('##AAbbccdd11223344');
  await page.getByRole('button', { name: 'Log In' }).click();
});