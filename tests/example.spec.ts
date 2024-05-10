import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright'

test('Submitting "Contact Us" form', async ({ page }) => {

  const zeroStepArgs = {page, test};

  await ai("Navigate to https://digital.ivy.co.il/", zeroStepArgs);

  let pageUrl = await ai("Get the URL of current page", zeroStepArgs); // We are getting without 'https' part
  await expect(page).toHaveURL('https://'+pageUrl);

  await ai("Fill and submit the form יצירת קשר", zeroStepArgs);

  await page.waitForTimeout(2000);
});

