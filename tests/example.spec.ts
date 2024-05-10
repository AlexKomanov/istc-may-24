import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright'

test('has title', async ({ page }) => {

  const zeroStepArgs = {page, test};

  await ai("Navigate to https://playwright.dev/", zeroStepArgs)

  let pageUrl = await ai("Get the URL of current page", zeroStepArgs) // We are getting without 'https' part
  await expect(page).toHaveURL('https://'+pageUrl)

});

