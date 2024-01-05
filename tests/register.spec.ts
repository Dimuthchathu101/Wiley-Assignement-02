import { test, expect } from '@playwright/test';

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

test.only('Register an Account Positive Test Cases', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByLabel(LOGIN_REGISTER).click();
  await page.getByRole('link', { name: 'NEW USER' }, ).click();
  await page.getByLabel(EMAIL).click();
  await page.getByLabel(EMAIL).fill('dimuthchathu@gmail.com');
  await page.getByLabel(RETYPE_EMAIL).click();
  await page.getByLabel(RETYPE_EMAIL).fill('dimuthchathu@gmail.com');
  await page.getByPlaceholder(PASSWORD, { exact: true }).click();
  await page.getByPlaceholder(PASSWORD, { exact: true }).fill('##Abcd12344');
  await page.getByPlaceholder(RETYPE_PASSWORD).click();
  await page.getByPlaceholder(RETYPE_PASSWORD).fill('##Abcd12344');
  await page.getByLabel(FIRST_NAME).click();
  await page.getByLabel(FIRST_NAME).fill('DimuthC');
  await page.getByLabel(LAST_NAME).click();
  await page.getByLabel(LAST_NAME).fill('Bandara');
  await page.getByLabel(COUNTRY_LOCATION).selectOption('country-lk');
  await page.getByLabel(AREA_OF_INTEREST).selectOption('psychiatry');
  await page.getByText(NEWSLETTER).click();
  await page.getByText(ACCEPT_TERMS).click();
  await page.frameLocator(NOT_A_ROBOT).getByLabel('I\'m not a robot').click();
  await page.getByRole('button', { name: 'REGISTER', exact: true }).click();
});

test('Register an Account Negative Test Cases', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByLabel(LOGIN_REGISTER).click();
  await page.getByRole('link', { name: 'NEW USER' }, ).click();
  await page.getByLabel(EMAIL).click();
  await page.getByLabel(EMAIL).fill('dimuthchathu');
  await page.getByLabel(RETYPE_EMAIL).click();
  await page.getByLabel(RETYPE_EMAIL).fill('dimuthchathu@');
  await page.getByPlaceholder(PASSWORD, { exact: true }).click();
  await page.getByPlaceholder(PASSWORD, { exact: true }).fill('##Abc');
  await page.getByPlaceholder(RETYPE_PASSWORD).click();
  await page.getByPlaceholder(RETYPE_PASSWORD).fill('##Abcd');
  await page.getByLabel(FIRST_NAME).click();
  await page.getByLabel(FIRST_NAME).fill('DimuthC');
  await page.getByLabel(LAST_NAME).click();
  await page.getByLabel(LAST_NAME).fill('Bandara');
  await page.getByText(NEWSLETTER).click();
  await page.getByText(ACCEPT_TERMS).click();
  await page.getByRole('button', { name: 'REGISTER', exact: true }).click();
});
