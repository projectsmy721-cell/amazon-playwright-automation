import { Page, expect } from '@playwright/test';

export class AmazonHomePage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    } 
 async clearsearch() {
    await this.page.locator('#twotabsearchtextbox').fill('');
    }
    async searchProduct(productName: string) {
      await this.page.locator('#twotabsearchtextbox').fill(productName);

        await this.page.locator('[value="Go"]').click();
}
async clickonfirstproduct() {

        await this.page.locator('a[href*="/sspa/click?"]').first().click();
   // await this.page.locator('.a-size-medium a-spacing-none a-color-base a-text-normal').first().click();
}
async searchvalidation() {
    await expect(this.page.locator('input[formaction$="/buynow"]')).toBeVisible();
}
async Clicksonelectronicsitem(){
   
    await this.page.locator('[aria-label="electronics items"]').click();

}

async searchProductdropdown(productName: string) {
        await this.page.locator('#twotabsearchtextbox').fill(productName);
    }
    async clickonfirstproductmouse() {
        await this.page.locator('#sac-suggestion-row-1-cell-1').click();
            }
   async addtocart() {
       await this.page.locator('#a-autoid-1-announce').click();
   }
    async validateCartcountincreases(){
        await expect(this.page.locator('div.a-section.ax-replace.a-spacing-none span[data-a-selector="value"]')).toHaveText('1')
    }
    async clickonAppleCheckbox() {
        const appleChekbox = this.page.locator("//span[contains(@class,'a-size-base') and text()='Apple']").first();
        const clearnow = this.page.locator("(//i[@class='a-icon a-icon-extender-expand']/following-sibling::span[@class='a-expander-prompt'])[1]").first();
     if (await appleChekbox.isVisible()) {
            await appleChekbox.click();  
     } else (await clearnow.isVisible());{
        await this.page.waitForTimeout(2000); 
            await clearnow.click();     
       // await appleChekbox.click();   
        }
}
    async validateIphonestore(){
        await expect(this.page.locator("//a[@aria-label='apple iphone logo - the iphone store']")).toBeVisible({ timeout: 10000 });
      //  await expect(page.locator('//a[@aria-label="apple iphone logo - the iphone store"]')).toBeVisible();

    }
    async clickonfirstproductiphone() {
        // Remove the [1] from XPath and use .first() instead
        const productLocator = await this.page.locator("//a//h2[contains(@class, 'a-size-medium')]//span[contains(text(), 'iPhone')]").first().innerText();
        console.log('Product Text:', productLocator);
        await this.page.locator(`//h2[contains(@aria-label, '${productLocator}')]`).click();
    }
    async validatingthecolorofiphone(){
        
        await expect(this.page.locator('//input[@id="buy-now-button"])).toBeVisible({ timeout: 10000 });'))
    }

    
    
}