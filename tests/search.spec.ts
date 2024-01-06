import { test, expect } from '@playwright/test';

require('dotenv').config();

const baseUrl = process.env.BASE_URL || 'https://onlinelibrary.wiley.com/'
const SEARCHBOX = "//input[@id='searchField1']";

// Advanced Search Option Test Case -> Positive
test('Advanced Search Option ', async ({ page }) => {
  // URL
  await page.goto(baseUrl);

  // Search Box
  await page.locator(SEARCHBOX).fill("Information Technology", { timeout: 1000 });

  //Return to Search Options
  await page.goto('https://onlinelibrary.wiley.com/action/doSearch?AllField=Information+Technology');

  await page.locator('li').filter({ hasText: 'Special Section: Information Policy Free Access free What about reader privacy' }).getByRole('link').nth(4)

  // Reader Privacty
  await page.getByRole('link', { name: 'What about reader privacy?' }).click();

  // Regine Search
  await page.getByRole('button', { name: 'refine search' }).click();

  // Enter a Journal , book or publication
  await page.getByPlaceholder('Enter a journal, book, or').click();
  await page.getByPlaceholder('Enter a journal, book, or').fill('Wiley');

  // Click on Search Button
  await page.getByRole('button', { name: 'Search', exact: true }).click();

  // Redirecting to Search Home Page
  await page.goto('https://onlinelibrary.wiley.com/action/doSearch?AllField=Information+Technology#');

  // Click on Refine Search Button
  await page.getByRole('button', { name: 'refine search' }).click();

  // Click on Search History
  await page.getByRole('tab', { name: 'Search History' }).click();

  // View Search Name
  await expect(await page.getByRole('columnheader', { name: 'Search name' })).toHaveText('Search Name')
  await expect(await page.getByRole('cell', { name: 'All: information technology (2293006)', exact: true })).toHaveText('All: information technology');

  // View Searched On
  await expect(await page.getByRole('columnheader', { name: 'Searched On' })).toHaveText('Searched On');
  await expect(page.getByRole('cell', { name: 'Jan 05' })).toHaveText('Jan 05');

  // Search for Publications
  await page.getByRole('link', { name: 'Publications' }).click();


});

