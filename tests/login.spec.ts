import { test, expect } from '@playwright/test';

const baseUrl = process.env.BASE_URL || 'https://onlinelibrary.wiley.com/'
const LOGIN_REGISTER = 'Log in or Register'
const EMAIL = 'Email or Customer ID'
const PASSWORD = 'Enter your password'


// Login Positvie Test Cases
test('Login Positive Test Case', async ({ page }) => {

   
  await page.goto(baseUrl);
  const loggedInUrl = await page.url();
  expect(loggedInUrl).toContain('https://onlinelibrary.wiley.com/');
  
  await page.getByLabel(LOGIN_REGISTER).click();
  await page.getByLabel(EMAIL).fill('dimuthcbandara97@gmail.com');
  await page.getByPlaceholder(PASSWORD).click();
  await page.getByPlaceholder(PASSWORD).fill('##AAbbccdd11223344');
  await page.getByRole('button', { name: 'Log In' }).click();

  // After Login It Directs to the Home Page
  const loginURL = await page.url();
  expect(loginURL).toContain('https://onlinelibrary.wiley.com/');
  expect("//p[@class='intro-text--search']").toContain("Today's research, tomorrow's innovation")
  
});

// Forget Password Test Case
test('Forget Password Positve Test Case', async ({ page }) => {
  await page.goto(baseUrl);
  const loggedInUrl = await page.url();
  expect(loggedInUrl).toContain('https://onlinelibrary.wiley.com/');

  await page.getByLabel(LOGIN_REGISTER).click();
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('dimuthcbandara97@gmail.com');
  await page.getByRole('button', { name: 'RESET PASSWORD' }).click();

});

// Login Negative Test Case
test('Login Negative Test Case', async ({ page }) => {
  await page.goto(baseUrl);
  const loggedInUrl = await page.url();
  expect(loggedInUrl).toContain('https://onlinelibrary.wiley.com/');

  await page.getByLabel(LOGIN_REGISTER).click();
  await page.getByLabel(EMAIL).fill('helloworld@something.com');
  await page.getByPlaceholder(PASSWORD).click();
  await page.getByPlaceholder(PASSWORD).fill('##AAkl');
  await page.getByRole('button', { name: 'Log In' }).click();
});

// Forget Password Negative Test Case
test('Forget Password Negative Test Case', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByLabel(LOGIN_REGISTER).click();
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('hello900@gmail.com');
  await page.getByRole('button', { name: 'RESET PASSWORD' }).click();
});