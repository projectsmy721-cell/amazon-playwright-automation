import { Page, expect } from '@playwright/test';

export class AmazonLoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  async goto() {
    try {
      await this.page.goto('https://www.amazon.in', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
      });
      // Wait for a short time to let the page settle
      await this.page.waitForTimeout(3000);
      
      // Wait for the search box as an indication that the page has loaded
      await this.page.waitForSelector('#twotabsearchtextbox', { timeout: 30000 });
    } catch (error) {
      console.log('Error while loading page:', error);
      throw error;
    }
  }
  async verifyAmazonHomePage() {
    await expect(this.page.locator('[aria-label="Amazon.in"]').first()).toBeVisible();
  }
}
