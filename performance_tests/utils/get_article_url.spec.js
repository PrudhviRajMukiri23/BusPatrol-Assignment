const { test, chromium } = require('@playwright/test');
import fs from 'fs'

test("fetch the article and click", async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('response', (response) => {
    const requestUrl = response.url();
    
    if (requestUrl.includes('bbc.com/news/articles')) {
        console.log(`Captured Request URL: ${requestUrl}`);
        fs.writeFileSync("../tests/.env", `${requestUrl}`)
    }
  });

  await page.goto('https://www.bbc.com/', {waitUntil: 'load'});

  await page.waitForSelector("(//a[contains(@href, 'article')])[1]");

  await page.locator("(//a[contains(@href, 'article')])[1]").click()

  await browser.close();
})