import { test, expect } from '@playwright/test';
import { AmazonHomePage } from '../pages/AmazonHomePage';
import { AmazonLoginPage } from '../pages/AmazonLoginPage';

test('TC002_Search_for_a_Product', async ({ page }) => {
  const loginPage = new AmazonLoginPage(page);
  const homePage = new AmazonHomePage(page);

      await loginPage.goto();
      await loginPage.verifyAmazonHomePage();
      await homePage.clearsearch();
      await homePage.searchProduct('Laptop');
      await expect(page.locator('.a-color-state.a-text-bold')).toHaveText('"Laptop"');
      await expect(page.url()).toContain('Laptop');
      
     
});
