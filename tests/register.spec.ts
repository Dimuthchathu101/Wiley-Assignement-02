import { test, expect } from '@playwright/test';

const baseUrl = process.env.BASE_URL || 'https://onlinelibrary.wiley.com/'
const LOGIN_REGISTER = 'Log in or Register'
const EMAIL = 'A one-time confirmation email'
const RETYPE_EMAIL = 'Retype email*'

test('Register an Account Positive Test Cases', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByLabel(LOGIN_REGISTER).click();
  await page.getByRole('link', { name: 'NEW USER' }, ).click();
  await page.getByLabel(EMAIL).click();
  await page.getByLabel(EMAIL).fill('dimuthchathu@gmail.com');
  await page.getByLabel(RETYPE_EMAIL).click();
  await page.getByLabel(RETYPE_EMAIL).fill('dimuthchathu@gmail.com');
  await page.getByPlaceholder('Type your password', { exact: true }).click();
  await page.getByPlaceholder('Type your password', { exact: true }).fill('##Abcd12344');
  await page.getByPlaceholder('Re-type your password').click();
  await page.getByPlaceholder('Re-type your password').fill('##Abcd12344');
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('DimuthC');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Bandara');
  await page.getByLabel('Country/Location*').selectOption('country-lk');
  await page.getByLabel('Area of interest*').selectOption('psychiatry');
  await page.getByText('Yes, please sign me up for').click();
  await page.getByText('I have read and accept the').click();
  await page.frameLocator('iframe[name="a-ve19zp2h3y3q"]').getByLabel('I\'m not a robot').click();
  await page.getByRole('button', { name: 'REGISTER', exact: true }).click();
});
