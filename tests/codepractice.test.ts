import {test, expect ,Page} from '@playwright/test';

async function reverseString(page : Page){
    await page.goto("https://in.tradingview.com/chart/ae8XyFPB/");
    const text = await page.locator('.title-yrIMi47q').innerText();
    const reverdedText = text.split('We').reverse().join('');
    console.log(reverdedText);
}

test('Codepractise', async ({ page}) => {
    await reverseString(page);
});

async function parelogram( page : Page){
    await page.goto("https://in.tradingview.com/chart/ae8XyFPB/");
    const text = (await page.locator('.title-yrIMi47q').textContent() || '');
    const arr = text.toLowerCase().replace(/'/g, '');
    console.log(arr);
    return arr === arr.split("'").reverse().join('');
   
}

test('parellogram', async ({page}) => {
    const result = await parelogram(page);
    console.log(result);
    expect(result).toBe(true);
});
   