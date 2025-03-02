import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import * as envData from 'dotenv'
import { fixtures } from "./fixtures";
envData.config()

let page: Page, browser: Browser, context: BrowserContext

BeforeAll(async () => {
    browser = await chromium.launch({headless: false, channel: process.env.channel})
})

Before(async () => {
    context = await browser.newContext()
    await context.tracing.start({screenshots: true, snapshots: true})
    page = await context.newPage()

    fixtures.context = context
    fixtures.page = page
})

After(async ({result, pickle}) => {

    await fixtures.page.waitForLoadState('load') 
    const timeStamp = new Date().toISOString().replace(/[:.-]/g, '_')

    if(result.status !== Status.FAILED) {
        let pickleName = pickle.name.replace(" ", "_")
        await fixtures.page.screenshot({path: `./test-results/screenshots/${pickleName})-${timeStamp}.png`, type: 'png'})
    }

    const traceFileName = `traces-${timeStamp}.zip`
    await fixtures.context.tracing.stop({ path: `./traces/${traceFileName}` })

    await fixtures.context.close()
    await fixtures.page.close()
})

AfterAll(async () => {
    await browser.close()
})