import { test, expect } from '@playwright/test';

require('dotenv').config();

const baseUrl = process.env.BASE_URL || 'https://onlinelibrary.wiley.com/'
const SEARCHBOX = "//input[@id='searchField1']";

test('has title', async ({ page }) => {
  await page.goto(baseUrl);

  await page.locator(SEARCHBOX).fill("Hello World", { timeout: 1000 });
});
