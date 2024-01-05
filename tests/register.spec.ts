import { test, expect } from '@playwright/test';


test('Register an Account', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');
  await page.getByLabel('Log in or Register').click();
  await page.getByRole('link', { name: 'NEW USER' }, ).click();
  await page.getByLabel('A one-time confirmation email').click();
  await page.getByLabel('A one-time confirmation email').fill('dimuthchathu@gmail.com');
  await page.getByLabel('Retype email*').click();
  await page.getByLabel('Retype email*').fill('dimuthchathu@gmail.com');
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
