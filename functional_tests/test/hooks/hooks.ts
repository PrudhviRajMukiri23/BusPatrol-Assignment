import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import * as envData from 'dotenv'
import BoardGame from "../../src/pages/board_game";
import { fixtures } from "./fixtures";
import CupcakeIpsum from "../../src/pages/cupcake_ipsum";
import OrangeHrm from "../../src/pages/orange_hrm";
envData.config()

let page: Page, browser: Browser, context: BrowserContext

BeforeAll(async () => {
    try {
        if(process.env.headless == 'true')
            browser = await chromium.launch({headless: true, channel: process.env.channel})
        else if(process.env.headless == 'false')
            browser = await chromium.launch({headless: false, channel: process.env.channel})
        else 
            throw new Error("Enter valid headless value either 'true' or 'false': "+process.env.headless)
        fixtures.boardGameInstance = new BoardGame()
        fixtures.cupcakeIpsumInstance = new CupcakeIpsum()
        fixtures.orangeHrmInstance = new OrangeHrm()
    } catch(err) {
        console.log("Error occured while creating browser: "+err)
    }
    
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

    var pickleName = pickle.name.replace(" ", "_")
    if(result.status === Status.FAILED) {
        await fixtures.page.screenshot({path: `./test-results/screenshots/FAILED-${pickleName})-${timeStamp}.png`, type: 'png', fullPage: true})
    }
    await fixtures.page.screenshot({path: `./test-results/screenshots/PASSED-${pickleName})-${timeStamp}.png`, type: 'png', fullPage: true})

    const traceFileName = `traces-${timeStamp}.zip`
    await fixtures.context.tracing.stop({ path: `./traces/${traceFileName}` })

    await fixtures.context.close()
    await fixtures.page.close()
})

AfterAll(async () => {
    await browser.close()
})