import { Locator, expect, Page } from '@playwright/test';

export class ScreenshotHelpers {
    compareClipScreenshot = async (
        page: Page,
        componentLocator: Locator,
        screenshotName: string,
        maxDiffPixelRatio?: number,
    ) => {
        const userDefinedMaxDiffPixelRatio = maxDiffPixelRatio ?? 0.00;
        const screenshotPath = `${screenshotName}.png`;
        const box = await componentLocator.boundingBox();
        if (!box) {
            throw new Error(
                `Unable to retrieve bounding box for the component - ${screenshotName}.`,
            );
        }
        const scrollX = await page.evaluate(() => window.scrollX);
        const scrollY = await page.evaluate(() => window.scrollY);

        const boxDimensions = {
            width: box.width,
            height: box.height,
            x: box.x + scrollX,
            y: box.y + scrollY,
        };
        await expect.soft(page).toHaveScreenshot(screenshotPath, {
            threshold: 0.2,
            maxDiffPixelRatio: userDefinedMaxDiffPixelRatio,
            fullPage: true,
            clip: boxDimensions,
            omitBackground: true,
        });
    };

    compareFullPageScreenshot = async (
        page: Page,
        MaskedLocatorList: Array<Locator>,
        screenshotName: string,
    ) => {
        await page.evaluate(() => {
            window.scrollTo(0, 0);
        });
        await page.waitForLoadState('domcontentloaded');
        const screenshotPath = `${screenshotName}.png`;
        const screenshotWithoutMasking = await page.screenshot({
            fullPage: true,
            path: 'test-results/'.concat(screenshotPath),
        });
        const fullPageScreenshot = await page.screenshot({
            fullPage: true,
            mask: MaskedLocatorList,
        });
        expect.soft(fullPageScreenshot).toMatchSnapshot({
            name: screenshotPath,
            threshold: 0.2,
            maxDiffPixelRatio: 0.01,
        });
    };
}
