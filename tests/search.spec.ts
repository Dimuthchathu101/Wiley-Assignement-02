import { test, expect } from '@playwright/test';

require('dotenv').config();

const baseUrl = process.env.BASE_URL || 'https://onlinelibrary.wiley.com/'
const SEARCHBOX = "//input[@id='searchField1']";

test('has title', async ({ page }) => {
  await page.goto(baseUrl);
  await page.locator(SEARCHBOX).fill("Information Technology", { timeout: 1000 });
  await page.goto('https://onlinelibrary.wiley.com/action/doSearch?AllField=Information+Technology');
  await page.getByRole('link', { name: 'What about reader privacy?' }).click();
  await page.locator('li').filter({ hasText: 'Special Section: Information Policy Free Access free What about reader privacy' }).getByRole('link').nth(4).click();
  await page.locator('.meta__authors').first().click();
});
