import { test, expect } from '@playwright/test';
import { AmazonHomePage } from '../pages/AmazonHomePage';
import { AmazonLoginPage } from '../pages/AmazonLoginPage';

test('TC002_Search_for_a_Product', async ({ page }) => {
    const loginPage = new AmazonLoginPage(page);
    const homePage = new AmazonHomePage(page);

    await loginPage.goto();
    await loginPage.verifyAmazonHomePage();
    await homePage.clearsearch();
    await homePage.searchProduct('smartphones');
    await page.waitForTimeout(7000); 
    await expect(page.locator('.a-color-state.a-text-bold')).toHaveText('"smartphones"');
   await expect(page.url()).toContain('smartphones');
    await homePage.clickonAppleCheckbox();
   await expect(page.locator("xpath=(//h2[contains(@aria-label, 'Apple')]//span[contains(text(), 'Apple')])[1]")).toBeVisible({ timeout: 10000 });
   
});