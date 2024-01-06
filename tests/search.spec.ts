import { test, expect } from '@playwright/test';

require('dotenv').config();

const baseUrl = process.env.BASE_URL || 'https://onlinelibrary.wiley.com/'
const SEARCHBOX = "//input[@id='searchField1']";

// Advanced Search Option Test Case -> Positive
test('Advanced Search Option ', async ({ page }) => {
  await page.goto(baseUrl);
  await page.locator(SEARCHBOX).fill("Information Technology", { timeout: 1000 });
  
  await page.goto('https://onlinelibrary.wiley.com/action/doSearch?AllField=Information+Technology');
  await page.locator('li').filter({ hasText: 'Special Section: Information Policy Free Access free What about reader privacy' }).getByRole('link').nth(4).click();
  await page.getByRole('link', { name: 'What about reader privacy?' }).click();
  await page.getByRole('button', { name: 'refine search' }).click();
  await page.getByPlaceholder('Enter a journal, book, or').click();
  await page.getByPlaceholder('Enter a journal, book, or').fill('Wiley');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.goto('https://onlinelibrary.wiley.com/action/doSearch?AllField=Information+Technology#');
  await page.getByRole('button', { name: 'refine search' }).click();
  await page.getByRole('tab', { name: 'Search History' }).click();
  await page.getByRole('columnheader', { name: 'Search name' }).click();
  await page.getByRole('cell', { name: 'All: information technology (2293006)', exact: true }).click();
  await page.getByRole('columnheader', { name: 'Searched On' }).click();
  await page.getByRole('cell', { name: 'Jan 05' }).click();
  await page.getByRole('link', { name: 'Publications (360)' }).click();
  
  
});

