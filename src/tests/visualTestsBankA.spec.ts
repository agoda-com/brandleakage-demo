import { test, Locator } from '@playwright/test';
import { ScreenshotHelpers } from './screenshotHelper';
import { bankALocators, bankBLocators } from './locators';

test.describe('Visual Tests for Bank A', () => {
  test('Component and full page test', async ({ page }) => {
    const screenshotHelpers = new ScreenshotHelpers();
    const maskedLocatorList: Locator[] = [];
    // Navigate to Bank A's page
    await page.goto('http://localhost:3000/bankA');

    // Loop through all locators for Bank A
    for (const component of bankALocators) {
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
      'bankA-full-page'
    );

  });
});