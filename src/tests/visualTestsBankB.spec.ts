import { test, Locator } from '@playwright/test';
import { ScreenshotHelpers } from './screenshotHelper';
import { bankALocators, bankBLocators } from './locators';

test.describe('Visual Tests for Bank B', () => {
  test('Component and full page test', async ({ page }) => {
    const screenshotHelpers = new ScreenshotHelpers();
    const maskedLocatorList: Locator[] = [];
    // Navigate to Bank B's page
    await page.goto('http://localhost:3000/bankB');

    // Loop through all locators for Bank B
    for (const component of bankBLocators) {
      maskedLocatorList.push(component.locator(page));
      await screenshotHelpers.compareClipScreenshot(
        page,
        component.locator(page),
        component.screenshotName,
        0.00 // Allowable maxDiffPixelRatio
      );
    }

    // Compare the full page screenshot with masked locators
    await screenshotHelpers.compareFullPageScreenshot(
      page,
      maskedLocatorList,
      'bankB-full-page'
    );
    
  });
});