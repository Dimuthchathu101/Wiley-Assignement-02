import { test, expect } from '@playwright/test';

require('dotenv').config();

const baseUrl = process.env.BASE_URL || 'https://onlinelibrary.wiley.com/'
const SEARCHBOX = "//input[@id='searchField1']";

// Advanced Search Option Test Case -> Positive
test('Advanced Search Option ', async ({ page }) => {
  await page.goto(baseUrl);
  await page.locator(SEARCHBOX).fill("Information Technology", { timeout: 1000 });
  await page.goto('https://onlinelibrary.wiley.com/action/doSearch?AllField=Information+Technology');
  
  // Displaying Search Results 
  await page.locator('li').filter({ hasText: 'Special Section: Information Policy Free Access free What about reader privacy' }).getByRole('link').nth(4).click();
  await page.locator('.meta__authors').first().click();
  await page.getByRole('link', { name: 'What about reader privacy?' }).click();
});
