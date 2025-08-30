import { test, expect } from '@playwright/test';
import { AmazonLoginPage } from '../pages/AmazonLoginPage';

test('TC001_Launch Amazon Home Page', async ({ page }) => {
  const amazonLoginPage = new AmazonLoginPage(page);
      await amazonLoginPage.goto();
      await amazonLoginPage.verifyAmazonHomePage();

});
