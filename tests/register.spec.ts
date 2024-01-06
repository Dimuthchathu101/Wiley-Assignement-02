import { test, expect, chromium } from '@playwright/test';

const baseUrl = process.env.BASE_URL || 'https://onlinelibrary.wiley.com/';
const LOGIN_REGISTER = 'Log in or Register';
const EMAIL = 'A one-time confirmation email';
const RETYPE_EMAIL = 'Retype email*';
const PASSWORD = 'Type your password';
const RETYPE_PASSWORD = 'Re-type your password';
const FIRST_NAME = 'First Name*';
const LAST_NAME = 'Last Name*';
const COUNTRY_LOCATION = 'Country/Location*';
const AREA_OF_INTEREST = 'Area of interest*';
const NEWSLETTER = 'Yes, please sign me up for';
const ACCEPT_TERMS = 'I have read and accept the';
const NOT_A_ROBOT = 'iframe[name="a-ve19zp2h3y3q"]'

// Positvie Test Cases for Register an Account
test.only('Register an Account Positive Test Cases', async () => {

  const browser = await chromium.launch({
    headless: false, // Optional: Set to `true` to run in headless mode
    args: ['--disable-incognito'] // Disable incognito mode
  });
  
  const context = await browser.newContext();
  context.setDefaultTimeout(60000);
  
  const page = await context.newPage();
  
  // Visit the site
  await page.goto(baseUrl);

  // Login Register Options
  await page.getByLabel(LOGIN_REGISTER).click();
  await page.getByRole('link', { name: 'NEW USER' },).click();

  await page.waitForNavigation()


  // Email 
  await page.getByLabel(EMAIL).click();
  await page.getByLabel(EMAIL).fill('dimuthchathu@gmail.com');

  // Retype Email 
  await page.getByLabel(RETYPE_EMAIL).click();
  await page.getByLabel(RETYPE_EMAIL).fill('dimuthchathu@gmail.com');

  // Passswrod 
  await page.getByPlaceholder(PASSWORD, { exact: true }).click();
  await page.getByPlaceholder(PASSWORD, { exact: true }).fill('##Abcd12344');

  // Retype Password
  await page.getByPlaceholder(RETYPE_PASSWORD).click();
  await page.getByPlaceholder(RETYPE_PASSWORD).fill('##Abcd12344');

  // First Name 
  await page.getByLabel(FIRST_NAME).click();
  await page.getByLabel(FIRST_NAME).fill('DimuthC');

  // Last Name 
  await page.getByLabel(LAST_NAME).click();
  await page.getByLabel(LAST_NAME).fill('Bandara');

  // Country Location 
  await page.getByLabel(COUNTRY_LOCATION).selectOption('country-lk');

  // Area of Interest
  await page.getByLabel(AREA_OF_INTEREST).selectOption('psychiatry');

  // Subscribe for Newsletter
  await page.getByText(NEWSLETTER).click();

  // Accept Terms and Conditions
  await page.getByText(ACCEPT_TERMS).click();

  // I'm not a robot validation
  await page.frameLocator(NOT_A_ROBOT).getByLabel('I\'m not a robot').click();

  // Click on Login Button
  await page.getByRole('button', { name: 'REGISTER', exact: true }).click();

  // Testing after returning to home page
  expect("//h4[normalize-space()='Your registration is almost complete.']").toContain("Your registration is almost complete")
});

// Register an Account Negative Test Case
test('Register an Account Negative Test Cases', async ({ page }) => {
  // Visit the site
  await page.goto(baseUrl);

  // Login Register Options
  await page.getByLabel(LOGIN_REGISTER).click();
  await page.getByRole('link', { name: 'NEW USER' },).click();

  // Email 
  await page.getByLabel(EMAIL).click();
  await expect(await page.getByLabel(EMAIL).fill('dimuth')).toThrowError('Invalid Email Field');

  // Retype Email 
  await page.getByLabel(RETYPE_EMAIL).click();
  await expect(await page.getByLabel(RETYPE_EMAIL).fill('dimuthc')).toThrowError('Incorrect Email Format and Emails are not matchine');

  // Passswrod 
  await page.getByPlaceholder(PASSWORD, { exact: true }).click();
  await expect(await page.getByPlaceholder(PASSWORD, { exact: true }).fill('##Ab')).toThrowError('Incorrect Password Format');

  // Retype Password
  await page.getByPlaceholder(RETYPE_PASSWORD).click();
  await expect(await page.getByPlaceholder(RETYPE_PASSWORD).fill('##Abc')).toThrowError('Password isnt in correct format');

  // First Name 
  await page.getByLabel(FIRST_NAME).click();
  await page.getByLabel(FIRST_NAME).fill('DimuthC');

  // Last Name 
  await page.getByLabel(LAST_NAME).click();
  await page.getByLabel(LAST_NAME).fill('Bandara');

  // Country Location 
  await page.getByLabel(COUNTRY_LOCATION).selectOption('country-lk');

  // Area of Interest
  await expect(await page.getByLabel(AREA_OF_INTEREST).selectOption('psychiatryyy')).toThrowError('Plaese Select the Correct Option');

  // Subscribe for Newsletter
  await expect(await page.getByText(NEWSLETTER).uncheck()).toThrowError('Plase Check the checkbox');

  // Accept Terms and Conditions
  await expect(await page.getByText(ACCEPT_TERMS).uncheck()).toThrowError('Accept Terms and Conditions');

  // I'm not a robot validation
  await expect(await page.frameLocator(NOT_A_ROBOT).getByLabel('I\'m not a robot').uncheck()).toThrowError('Check Im not a robot');

  // Click on Login Button
  await page.getByRole('button', { name: 'REGISTER', exact: true }).click();

  // Testing after returning to home page
  expect("//h4[normalize-space()='Your registration is almost complete.']").toContain("Your registration is almost complete")
});
