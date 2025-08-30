import { test, expect } from '@playwright/test';
import { AmazonHomePage } from '../pages/AmazonHomePage';
import { AmazonLoginPage } from '../pages/AmazonLoginPage';

test('TC002_Search_for_a_Product', async ({ page }) => {
    const loginPage = new AmazonLoginPage(page);
    const homePage = new AmazonHomePage(page);

    await loginPage.goto();
    await loginPage.verifyAmazonHomePage();
    await homePage.clearsearch();
    await homePage.searchProduct('iphone');
    await page.waitForTimeout(7000); 
  //  await homePage.validateIphonestore();
    await homePage.clickonfirstproductiphone();
    await page.waitForTimeout(7000); 
    await expect(homePage.page.locator('//input[@id="buy-now-button"]')).toBeVisible({ timeout: 10000 });
    
 //   await homePage.validationofclicksonthrfirstproduct();
});