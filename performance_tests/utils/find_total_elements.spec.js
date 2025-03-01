const { test, chromium } = require('@playwright/test');

test("return all the web elements on the page", async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(process.env.searchPageURL);

  let elementLocators = await page.$$("//div[@data-testid='new-jersey-grid']/descendant::h2")

  for(let loc of elementLocators) {
    let value = await loc.textContent()
    console.log(value)
  }

  await page.waitForSelector('article');
  await browser.close();
})