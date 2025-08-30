import { test, expect } from '@playwright/test';
import { AmazonHomePage } from '../pages/AmazonHomePage';
import { AmazonLoginPage } from '../pages/AmazonLoginPage';

test('TC002_Search_for_a_Product', async ({ page }) => {
  const loginPage = new AmazonLoginPage(page);
  const homePage = new AmazonHomePage(page);

await loginPage.goto();
await loginPage.verifyAmazonHomePage();
await homePage.clearsearch();
await homePage.searchProductdropdown('wireless mouse');
await page.waitForTimeout(7000); // wait for 3 seconds
await homePage.clickonfirstproductmouse();
await expect(page.locator('.a-color-state.a-text-bold')).toHaveText('"wireless mouse hp"');
await page.waitForTimeout(7000); // wait for 3 seconds
await homePage.addtocart();
await homePage.validateCartcountincreases();
 
});