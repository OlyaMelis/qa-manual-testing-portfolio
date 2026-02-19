import { test, expect } from '@playwright/test';

test('DemoQA Text Box - submit shows entered data', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await page.getByPlaceholder('Full Name').fill('Olga Melis');
  await page.getByPlaceholder('name@example.com').fill('olga.melis@test.com');
  await page.getByPlaceholder('Current Address').fill('Senlis, France');
  await page.locator('#permanentAddress').fill('Bishkek, Kyrgyzstan');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#output')).toBeVisible();
  await expect(page.locator('#name')).toContainText('Olga Melis');
  await expect(page.locator('#email')).toContainText('olga.melis@test.com');
});
