import { Locator, Page } from '@playwright/test';

export interface ComponentLocator {
  locator: (page: Page) => Locator; // A function that returns the locator
  screenshotName: string; // The name of the screenshot
}

export const bankALocators: ComponentLocator[] = [
  {
    locator: (page) => page.locator('[data-testid="logo"]'),
    screenshotName: 'bankA-logo',
  },
  {
    locator: (page) => page.locator('[data-testid="welcome-message"]'),
    screenshotName: 'bankA-welcome-message',
  },
  {
    locator: (page) => page.locator('[data-testid="features-list"]'),
    screenshotName: 'bankA-features-list',
  },
  {
    locator: (page) => page.locator('[data-testid="currency"]'),
    screenshotName: 'bankA-currency',
  },
  {
    locator: (page) => page.locator('[data-testid="exclusive-component"]'),
    screenshotName: 'bankA-exclusive-component',
  },
];

export const bankBLocators: ComponentLocator[] = [
  {
    locator: (page) => page.locator('[data-testid="logo"]'),
    screenshotName: 'bankB-logo',
  },
  {
    locator: (page) => page.locator('[data-testid="welcome-message"]'),
    screenshotName: 'bankB-welcome-message',
  },
  {
    locator: (page) => page.locator('[data-testid="features-list"]'),
    screenshotName: 'bankB-features-list',
  },
  {
    locator: (page) => page.locator('[data-testid="currency"]'),
    screenshotName: 'bankB-currency',
  },
];