const { test, chromium } = require('@playwright/test');
import fs from 'fs'

test.only("fetch the article and click", async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('response', (response) => {
    const requestUrl = response.url();
    
    if (requestUrl.includes('bbc.com/news/live/')) {
        console.log(`Captured Request URL: ${requestUrl}`);
        fs.writeFileSync("../pages/.env", `${requestUrl}`)
    }
  });

  await page.goto('https://www.bbc.com/');
  await page.locator("//div[@data-testid='westminster-live']/descendant::a[1]").click()
  await page.waitForSelector('article');
  await browser.close();

})